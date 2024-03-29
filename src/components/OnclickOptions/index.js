import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import InsertLink from "components/OptionsModal/InsertLink";
import AddMemo from "components/OnclickOptions/AddMemo";

function OnclickOptions({ isOpen, onClose }) {
	const [activeModal, setActiveModal] = useState(null);

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
		outline: "none", // 모달 포커스 시 아웃라인 제거
	};

	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box sx={modalStyle}>
				<Button
					onClick={() => {
						onClose();
					}}
				>
					닫기
				</Button>
				<Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 2 }}>
					<Button variant="contained" onClick={() => openModal("Memo")}>
						메모 삽입
					</Button>
					<Button variant="contained" onClick={() => openModal("Link")}>
						링크 삽입
					</Button>
				</Box>
				{activeModal === "Memo" && <AddMemo isOpen={true} onClose={closeModal} onCloseEntire={onClose} />}
				{activeModal === "Link" && <InsertLink isOpen={true} onClose={closeModal} onCloseEntire={onClose} />}
			</Box>
		</Modal>
	);
}

export default OnclickOptions;
