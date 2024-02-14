import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import socket from "socket";
import { useRecoilState } from "recoil";
import { userState, roomUserState, roomUsersState } from "recoil/atom";

const createUuid = () => {
	var S4 = () => {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
};

export default function RoomJoinController({ roomId }) {
	const [user, setUser] = useRecoilState(userState);
	const [roomUser, setRoomUser] = useRecoilState(roomUserState);
	const [roomUsers, setRoomUsers] = useRecoilState(roomUsersState);
	// const uuid = createUuid();

	useEffect(() => {
		if (!user || !roomId) return;

		const onMessageHandler = (data) => {
			// alert(data.message);
			console.log("message", data.message);
		};

		socket.on("message", onMessageHandler);
		return () => {
			socket.off("message", onMessageHandler);
		};
	}, [user, roomId]);

	useEffect(() => {
		console.log("user", user, "roomId", roomId);
		if (user && roomId) {
			const myRoomUser = {
				user: user,
				roomId: roomId,
			};
			setRoomUser(myRoomUser);
			socket.emit("room-joined", myRoomUser);
		} else {
			socket.emit("room-leaved", roomUser);
			socket.off("room-joined");
			if (!user) {
				setRoomUser(null);
				setRoomUsers([]);
			}
		}
	}, [user, roomId]);

	useEffect(() => {
		const handleRoomUsersChanged = (data) => {
			console.log("room-users-changed", data.roomUsers);
			setRoomUsers(data.roomUsers);
		};
		socket.on("room-users-changed", handleRoomUsersChanged);
		return () => {
			socket.off("room-users-changed", handleRoomUsersChanged);
		};
	}, [user, roomId]);

	return <div></div>;
}
