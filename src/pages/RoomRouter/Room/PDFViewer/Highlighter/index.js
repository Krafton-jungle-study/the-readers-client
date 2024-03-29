import { logger } from "logger";
import api from "api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { rangeToInfo, InfoToRange, eraseHighlight, drawHighlight } from "./util";
import { useRecoilState, useRecoilCallback, useRecoilValue } from "recoil";
import {
	roomUsersState,
	penModeState,
	userState,
	scrollerRefState,
	highlightListState,
	buttonGroupsPosState,
	bookState,
	highlightLoadStateFamily,
	selectedHighlightInfoState,
	pageLoadingStateFamily,
} from "recoil/atom";
import { useToggleDrawer } from "recoil/handler";
import socket from "socket.js";
import "./styles.css";

import HighlightList from "./HighlightList";
import OptionsModal from "components/OptionsModal";
import { useGetPageLoadState } from "../PdfScroller/util";

function Highlighter({ renderContent }) {
	const { bookId, roomId } = useParams();
	const [user, setUser] = useRecoilState(userState);
	const [roomUsers, setRoomUsers] = useRecoilState(roomUsersState);
	const [prevRoomUsers, setPrevRoomUsers] = useState([]);
	const toggleDrawer = useToggleDrawer();

	// 진태 추가 코드
	const [optionsModalOpen, setOptionsModalOpen] = useState(false);
	const [book, setBook] = useRecoilState(bookState);
	const [highlightList, setHighlightList] = useRecoilState(highlightListState);
	const [scrollerRef, setScrollerRef] = useRecoilState(scrollerRefState);
	const [penMode, setPenMode] = useRecoilState(penModeState);
	const [buttonGroupsPos, setButtonGroupsPos] = useRecoilState(buttonGroupsPosState);
	const [selectedHighlightInfo, setSelectedHighlightInfo] = useRecoilState(selectedHighlightInfoState);

	const recoilProps = {
		setButtonGroupsPos,
		setSelectedHighlightInfo,
	};

	const loadingState = useRecoilValue(pageLoadingStateFamily({ bookId: bookId, pageNum: 1 }));
	const getPageLoadState = useGetPageLoadState();

	const updatehighlightLoadState = useRecoilCallback(
		({ set }) =>
			(book, userId, flag) => {
				console.log("userId", userId, "totalPage", book?.totalPage || 0, "updatehighlightLoadState", flag);
				for (let pageNum = 1; pageNum <= book?.totalPage || 0; pageNum++) {
					set(highlightLoadStateFamily({ bookId: book.id, pageNum: pageNum, userId: userId }), flag);
				}
			},
		[]
	);

	useEffect(() => {
		scrollerRef?.addEventListener("mouseup", selectionToHighlight);
		return () => {
			scrollerRef?.removeEventListener("mouseup", selectionToHighlight);
		};
	}, [scrollerRef, user, penMode, book]);

	useEffect(() => {
		if (!book) return;
		console.log("book changed bookId :", book.id, roomUsers);
		setHighlightList([]);
		roomUsers.forEach((roomUser) => {
			updatehighlightLoadState(book, roomUser.id, false);
		});
	}, [book]);

	const selectionToHighlight = () => {
		if (!user) {
			alert("하이라이팅은 로그인이 필요합니다.");
			toggleDrawer("signin")();
			return;
		}
		const selectedRange = window.getSelection();

		if (penMode == "highlight" && selectedRange.rangeCount == 1 && !selectedRange.isCollapsed) {
			const range = selectedRange.getRangeAt(0);
			// console.log(range);
			const additionalInfo = { bookId: book.id, text: selectedRange.toString() };
			const highlightInfo = rangeToInfo(range, additionalInfo);
			// console.log("highlightInfo", highlightInfo);
			setSelectedHighlightInfo(highlightInfo);
			setOptionsModalOpen(true);
		}

		selectedRange.removeAllRanges();
	};

	useEffect(() => {
		if (renderContent) {
			if (user) {
				console.log("my applyServerHighlight");
				loadHighlightList(user.id, book.id); //true
			} else {
				console.log("로그아웃, 하이라이트 지움");
				setHighlightList([]);
				scrollerRef.querySelectorAll("mark").forEach((highlight) => {
					const highlightId = highlight.getAttribute("data-highlight-id");
					eraseHighlight(scrollerRef, highlightId);
				});
				prevRoomUsers.forEach((roomUser) => {
					updatehighlightLoadState(book, roomUser.id, false);
				});
			}
		}
	}, [renderContent, user]);

	useEffect(() => {
		if (!user || !book) return;
		const goneUsers = prevRoomUsers.filter((prevUser) => !roomUsers.some((user) => user.id === prevUser.id));
		// const joinedUsers = roomUsers.filter((user) => !prevRoomUsers.some((prevUser) => prevUser.id === user.id));
		setPrevRoomUsers(roomUsers);
		goneUsers?.forEach((roomUser) => {
			scrollerRef.querySelectorAll(`mark[data-user-id="${roomUser.id}"]`).forEach((highlight) => {
				const highlightId = highlight.getAttribute("data-highlight-id");
				eraseHighlight(scrollerRef, highlightId);
			});
			console.log("updatehighlightLoadState", roomUser.id, false);
			updatehighlightLoadState(book, roomUser.id, false);
		});
		return () => {
			roomUsers?.forEach((roomUser) => {
				console.log("book highlight State reset");
				updatehighlightLoadState(book, roomUser.id, false);
			});
		};
	}, [book, roomUsers]);

	const drawHighlightHandler = (data) => {
		console.log("drawHighlightInfo", data);
		console.warn("book", book?.id, "page 1 loadState", loadingState);
		getPageLoadState(book?.id, data.pageNum).then((pageLoadState) => {
			console.log("book", book?.id, "page", data.pageNum, "pageLoadState", pageLoadState);

			const newRange = InfoToRange(data);
			const drawHighlightInfo = {
				...data,
			};
			drawHighlight(newRange, drawHighlightInfo, scrollerRef, recoilProps);
			// if (pageLoadState == "loaded") {

			// }
		});
	};

	useEffect(() => {
		if (!book || !scrollerRef) return;
		socket.on("draw-highlight", drawHighlightHandler);
		return () => {
			socket.off("draw-highlight", drawHighlightHandler);
		};
	}, [book, scrollerRef, drawHighlightHandler, getPageLoadState]);

	useEffect(() => {
		if (!scrollerRef) return;
		socket.on("erase-highlight", (data) => {
			console.log("erase-highlight", data);
			eraseHighlight(scrollerRef, data.id);
		});
		return () => {
			socket.off("erase-highlight");
		};
	}, [scrollerRef]);

	/* Server */
	const loadHighlightList = (userId, bookId) => {
		api
			.get(`/highlights/user/${userId}/book/${bookId}`)
			.then((response) => {
				logger.log("highlight", response.data);
				setHighlightList(response.data);
			})
			.catch((err) => {
				logger.log(err);
			});
	};

	/* Highlight List Item */

	const appendHighlightListItem = (highlightInfo) => {
		console.log("append");
		setHighlightList((prevHighlights) => {
			console.log(prevHighlights);
			const newHighlightInfos = [...prevHighlights, highlightInfo].sort((a, b) => a.num - b.num);
			console.log(newHighlightInfos);
			return newHighlightInfos;
		});
	};

	return (
		<>
			<HighlightList highlights={highlightList} />
			{/* 조건부 랜더링 : optionsModalOpen이 true되면 OptionsModal이 화면에 랜더링됨. */}
			{optionsModalOpen && (
				<OptionsModal
					isOpen={optionsModalOpen}
					onClose={() => setOptionsModalOpen(false)}
					color={user.color || "yellow"}
					appendHighlightListItem={appendHighlightListItem}
					recoilProps={recoilProps}
				/>
			)}
		</>
	);
}

export default Highlighter;
