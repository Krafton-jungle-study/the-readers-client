import React, { useEffect, useState } from "react";
import AgoraRTC, { createClient } from "agora-rtc-sdk-ng";
import { VideoPlayer } from "./VideoPlayer";
import Controls from "./Controls";
import { VideoContainer, MuteContainer } from "./style";
import { Box } from "@mui/material";
import { userState } from "recoil/atom";
import { useRecoilValue } from "recoil";

const APP_ID = "76b0ac36b01048398d9b51ac87db712f";
const TOKEN =
	"007eJxTYKj7ffzBnf8qe2dNi/AznCRo+H//wyYvuaXT701XUrU8uLVdgcHcLMkgMdkYSBoamFgYW1qkWCaZGiYmW5inJJkbGqWVX7uY2hDIyCDBnc3EyACBID4LQ25iZh4DAwDmCiCg";
const CHANNEL = "main";

AgoraRTC.setLogLevel(4);

let agoraCommandQueue = Promise.resolve();

const createAgoraClient = ({ onVideoTrack, onUserDisconnected, tracks, users }) => {
	const client = createClient({
		mode: "rtc",
		codec: "vp8",
	});

	const waitForConnectionState = (connectionState) => {
		return new Promise((resolve) => {
			const interval = setInterval(() => {
				if (client.connectionState === connectionState) {
					clearInterval(interval);
					resolve();
				}
			}, 200);
		});
	};

	const connect = async () => {
		await waitForConnectionState("DISCONNECTED");

		const uid = await client.join(APP_ID, CHANNEL, TOKEN, null);

		client.on("user-published", async (user, mediaType) => {
			await client.subscribe(user, mediaType);
			if (mediaType === "video") {
				onVideoTrack(user);
			}
		});

		client.on("user-left", (user) => {
			onUserDisconnected(user);
		});

		tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
		if (uid) {
			await client.publish(tracks);
		}

		return {
			tracks,
			uid,
		};
	};

	const disconnect = async () => {
		await waitForConnectionState("CONNECTED");
		client.removeAllListeners();
		for (let track of tracks) {
			track.stop();
			track.close();
		}
		await client.unpublish(tracks);
		await client.leave();
	};

	return {
		disconnect,
		connect,
	};
};

export const VideoRoom = () => {
	const [users, setUsers] = useState([]);
	const [uid, setUid] = useState(null);
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		const onVideoTrack = (user) => {
			setUsers((previousUsers) => [...previousUsers, user]);
		};

		const onUserDisconnected = (user) => {
			setUsers((previousUsers) => previousUsers.filter((u) => u.uid !== user.uid));
		};

		const { connect, disconnect } = createAgoraClient({
			onVideoTrack,
			onUserDisconnected,
			tracks,
			setTracks,
		});

		const setup = async () => {
			const { tracks, uid } = await connect();
			setUid(uid);
			setTracks(tracks);
			setUsers((previousUsers) => [
				...previousUsers,
				{
					uid,
					audioTrack: tracks[0],
					videoTrack: tracks[1],
				},
			]);
		};

		const cleanup = async () => {
			await disconnect();
			setUid(null);
			setUsers([]);
		};

		// const userStateData = useRecoilValue(userState);

		// const [userMap, setUserMap] = {};
		// setUserMap[users.uid] = userStateData.nick;

		// setup();
		agoraCommandQueue = agoraCommandQueue.then(setup);

		return () => {
			// cleanup();
			agoraCommandQueue = agoraCommandQueue.then(cleanup);
		};
	}, []);

	return (
		<>
			<Box sx={{ flexDirection: "column", width: "10vw" }}>
				<MuteContainer>
					<Controls tracks={tracks} />
				</MuteContainer>
				<VideoContainer>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(1, 200px)",
						}}
					>
						{users.map((user) => (
							<VideoPlayer key={user.uid} user={user} />
						))}
					</div>
				</VideoContainer>
			</Box>
		</>
	);
};
