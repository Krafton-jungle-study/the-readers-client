import React, { useState, useEffect } from "react";
import { Box, Button, Modal } from "@mui/material";
import api from "api";
import InsertOuter from "./InsertOuter";
import MarkerViewer from "components/MarkerViewer";
import { useParams } from "react-router-dom";

function InsertLink({ isOpen, onClose, onCloseEntire }) {
	const { bookId } = useParams();
	const [activeModal, setActiveModal] = useState(null);
	const [showMarkerViewer, setMarkerViewer] = useState(false);
	const [highlights, setHighlights] = useState([]); // highlights 상태 추가

	useEffect(() => {
		console.log("useParams bookId", bookId);
		const fetchHighlights = async () => {
			if (!isOpen) return; // 모달이 닫혀있으면 요청하지 않음

			try {
				const response = await api.get(`/highlights/book/${bookId}`);
				console.log("highlightdata", response);
				setHighlights(response.data.data); // 응답에서 하이라이트 데이터를 상태에 저장
			} catch (error) {
				console.error("Failed to fetch highlights:", error);
			}
		};

		fetchHighlights();
	}, [isOpen, bookId]); // isOpen과 bookId가 변경될 때마다 실행

	const openModal = (modalType) => {
		setActiveModal(modalType);
	};

	const closeModal = () => {
		setActiveModal(null);
	};

	const modalStyle = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
		outline: "none",
	};

	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box sx={modalStyle}>
				<Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 2 }}>
					<Button variant="contained" onClick={() => setMarkerViewer(true)}>
						내부 링크 생성
					</Button>
					<Button variant="contained" onClick={() => openModal("InsertOuter")}>
						외부 링크 생성
					</Button>
				</Box>

				{showMarkerViewer && (
					<MarkerViewer
						isOpen={showMarkerViewer}
						onClose={() => setMarkerViewer(false)}
						onCloseEntire={onCloseEntire}
						MyMarkers={highlights} // highlights 상태를 ViewMyMarker 컴포넌트에 전달
					/>
				)}

				{activeModal === "InsertOuter" && (
					<InsertOuter isOpen={true} onClose={closeModal} onCloseEntire={onCloseEntire} />
				)}
			</Box>
		</Modal>
	);
}

export default InsertLink;
