import React, { useState, useEffect } from "react";
import api from "api";
import { Tooltip, Box, Button, Typography, Modal } from "@mui/material";
import "./style.css";
import OnclickOptions from "components/OnclickOptions";
import D3Graph from "components/D3Graph";

function MyMarkerComponent({ isOpen, onClose, IsMemoOpen, pageNum, userId, highlightId, bookId, children }) {
	const [highlights, setHighlights] = useState([]);
	const [onClickOptions, setOnClickOptions] = useState(false);
	const [memoData, setMemoData] = useState("");
	const [isTooltipOpen, setIsTooltipOpen] = useState(false); // Tooltip을 제어하기 위한 상태
	const [D3GraphOpen, setD3GraphOpen] = useState(false);
	const [linkData, setLinkData] = useState({ nodes: [], links: [] }); // API로부터 받은 링크 데이터를 저장

	useEffect(() => {
		if (D3GraphOpen) {
			// D3Graph 모달이 열릴 때 링크 데이터를 가져옴
			const fetchLinkData = async () => {
				try {
					const response = await api.get(`link/${highlightId}`);
					if (response.data && response.data.data) {
						setLinkData(transformData(response.data.data)); // 가져온 데이터를 상태에 저장
					}
				} catch (error) {
					console.error("Failed to fetch link data", error);
				}
			};

			fetchLinkData();
		}
	}, [D3GraphOpen, highlightId]);

	const transformData = (links) => {
		const nodes = [{ id: highlightId.toString(), label: "Highlight Node", note: memoData }]; // ID를 문자열로 변환
		links.forEach((link) => {
			// toHighlightId를 노드 배열에 추가
			const targetId = link.toHighlightId.toString(); // ID를 문자열로 변환
			if (!nodes.some((node) => node.id === targetId)) {
				nodes.push({ id: targetId, label: "Connected Node", note: link.note || "No note" });
			}
		});

		const linksTransformed = links.map((link) => ({
			source: highlightId.toString(),
			target: link.toHighlightId.toString(),
			// 추가적인 링크 속성
		}));

		return { nodes, links: linksTransformed };
	};

	const handleComponentClick = async () => {
		try {
			const response = await api.get(`/highlights/book/${bookId}`);
			console.log("북아이디", bookId);
			console.log("하이라이트아이디", highlightId);
			console.log("데이터 입니다", response);
			setHighlights(response.data.data); // 상태 업데이트
			setOnClickOptions(true);
		} catch (error) {
			console.error("Failed to fetch highlights", error);
		}
	};

	const handleComponentLeave = () => {
		setIsTooltipOpen(false); // 마우스가 떠나면 Tooltip을 숨김
	};

	const handleComponentEnter = async () => {
		try {
			const response = await api.get(`/highlights/${highlightId}`);
			setMemoData(response.data.data.memo); // 메모 데이터를 상태에 저장
			console.log(response.data.data.memo);
			setIsTooltipOpen(true); // Tooltip을 표시
		} catch (error) {
			console.error("Failed to fetch highlights", error);
		}
	};

	const handleCreateHighlight = async (e, memo) => {
		e.preventDefault(); // 폼 제출의 기본 동작 방지
		try {
			const response = await api.put(`/highlights/user/${userId}/memo`, {
				highlightId,
				memo,
			});
			console.log("메모 생성 성공:", response.data);
			onClose(); // 모달 닫기
		} catch (error) {
			console.error("Failed to create highlight", error);
		}
	};

	const viewLink = async () => {
		setD3GraphOpen(true);
	};

	const viewInnerLink = async () => {};

	const modalStyle = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 900, // 모달 너비 조정
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
		outline: "none",
	};

	return (
		<>
			<mark
				data-highlight-id={highlightId}
				data-page-num={pageNum}
				data-user-id={userId}
				onClick={() => handleComponentClick()}
			>
				{children}
				{IsMemoOpen && (
					<>
						<Tooltip
							title={memoData || "No memo available"} // Tooltip에 표시할 텍스트
							open={isTooltipOpen} // Tooltip 표시 여부
							disableFocusListener // 포커스 시 Tooltip이 표시되지 않도록 함
							disableHoverListener // 호버 시 Tooltip이 자동으로 표시되지 않도록 함
							disableTouchListener // 터치 시 Tooltip이 표시되지 않도록 함
						>
							<Button
								className="memobutton"
								onMouseEnter={handleComponentEnter} // 마우스 오버 시 메모 데이터 로드
								onMouseLeave={handleComponentLeave} // 마우스 아웃 시 Tooltip 숨김
							>
								🔴{/* 메모 확인 버튼 */}
							</Button>
						</Tooltip>
						<Button variant="contained" size="large" href="#contained-buttons" onClick={() => viewLink()}>
							🟠버튼입니다.{/* 내부 링크 확인 버튼 */}
						</Button>
						<button className="memobutton" onClick={() => viewInnerLink()}>
							🟡{/* 외부 링크 확인 버튼 */}
						</button>
					</>
				)}
			</mark>
			{onClickOptions && (
				<OnclickOptions
					isOpen={onClickOptions}
					onClose={() => setOnClickOptions(false)}
					highlightId={highlightId}
					handleCreateHighlight={handleCreateHighlight}
					bookId={bookId}
				/>
			)}
			{D3GraphOpen && (
				<Modal open={D3GraphOpen} onClose={() => setD3GraphOpen(false)}>
					<Box sx={modalStyle}>
						<D3Graph
							highlightId={highlightId}
							data={linkData} // 여기서 yourData는 그래프를 그리는 데 필요한 데이터 객체입니다.
							width={600} // 그래프의 너비를 지정합니다. 원하는 값으로 변경 가능합니다.
							height={400} // 그래프의 높이를 지정합니다. 원하는 값으로 변경 가능합니다.
							onNodeClick={(nodeId) => console.log(`Node ${nodeId} was clicked`)} // 노드 클릭 시 실행될 함수입니다.
						/>
					</Box>
				</Modal>
			)}
		</>
	);
}

export default MyMarkerComponent;
