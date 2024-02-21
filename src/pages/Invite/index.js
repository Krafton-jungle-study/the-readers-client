import React from "react";
import { Avatar, Badge, Card, CardContent, CardActions, Button, Typography, TextField, Box } from "@mui/material";
import { keyframes, styled, shadows } from "@mui/system";
import { deepOrange, green } from "@mui/material/colors";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { userState } from "recoil/atom";
import { useRecoilValue } from "recoil";
import { useToggleDrawer } from "recoil/handler";
import "./styles.css";

// const puff = keyframes`
// 0% {
//   top: 100%;
//   height: 0px;
//   padding: 0px;
// }
// 100% {
//   top: 50%;
//   height: 100%;
//   padding: 0px 100%;
// }
// `;

// const borderRadius = keyframes`
// 0% {
//   -webkit-border-radius: 50%;
// }
// 100% {
//   -webkit-border-radius: 0px;
// }
// `;

const StyledBody = styled("div")(({ theme }) => ({
	// 	overflow: "hidden",
	// 	background: '#bcdee7 url("../img/bg.jpg") no-repeat center center fixed',
	// 	backgroundSize: "cover",
	// 	position: "fixed",
	// 	padding: 0,
	// 	margin: 0,
	// 	width: "100%",
	// 	height: "100%",
	// 	font: 'normal 14px/1.618em "Roboto", sans-serif',
	// 	WebkitFontSmoothing: "antialiased",
	// 	"&::before": {
	// 		content: '""', // 가상 요소에는 content 속성이 필수입니다.
	// 		height: 0,
	// 		padding: 0,
	// 		border: "130em solid #313440",
	// 		position: "absolute",
	// 		left: "50%",
	// 		top: "100%",
	// 		zIndex: 1,
	// 		display: "block",
	// 		borderRadius: "50%",
	// 		transform: "translate(-50%, -50%)",
	// 		// Webkit 접두사가 붙은 속성들은 자동으로 처리됩니다. 별도로 추가할 필요가 없습니다.
	// 		// 애니메이션과 관련된 속성
	// 		animation: `${puff} 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, ${borderRadius} 0.2s 2.3s linear forwards`,
	// 	},
}));

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Invite() {
	const user = useRecoilValue(userState);
	const query = useQuery();
	const { roomId } = useParams();

	const host = decodeURIComponent(query.get("host"));
	const roomName = decodeURIComponent(query.get("roomName"));

	const toggleDrawer = useToggleDrawer();
	const navigate = useNavigate();

	const clickHandler = () => {
		if (!user) {
			alert("회원가입이 필요합니다.");
			toggleDrawer("signup")();
			return;
		} else {
			navigate(`/room/${roomId}`);
		}
	};

	// const url = `${baseURL}/invite/room/${roomId}?host=${decodeHost}&roomName=${room.title}`;
	// http://localhost:3001/invite/room/1/host/콩서누

	return (
		<StyledBody className="profile-body">
			<Box className="profile-card">
				<header>
					{/* <!-- 방 정보로 이동하는 기능? --> */}
					<Avatar
						component={Link}
						to={`/room/${roomId}`}
						alt="group chat image"
						src="/thumbnail.png"
						sx={{ width: 56, height: 56, border: "1px solid #ddd", boxShadow: 3 }}
						variant="rounded"
					></Avatar>

					{/* <!-- 초대한 사람 --> */}
					<Typography sx={{ mb: 0, fontSize: 20 }} color="text.secondary" gutterBottom>
						&quot;{host}&quot;님이 초대함:
					</Typography>

					{/* <!-- 방 이름 --> */}
					<Typography sx={{ mb: 2 }} variant="h4" component="h2">
						{roomName}
					</Typography>

					{/* <Typography variant="p" component="h6">
						<Badge sx={{ mx: 1, ml: 2 }} color="secondary" variant="dot"></Badge>
						{roomUsersNum}명 참여중
					</Typography> */}
				</header>

				{/* <!-- bit of a bio; who are you? --> */}
				<div className="profile-bio">
					{/* <Typography variant="body2">
						<TextField
							sx={{ width: "85%", mt: 3 }}
							id="outlined-basic"
							label="별명을 입력하세요."
							helperText="다른 회원에게 표시되는 이름입니다."
							variant="outlined"
						/>
					</Typography> */}
					<Button
						sx={{ width: "85%", mt: 3, fontSize: 20, backgroundColor: "#313440" }}
						variant="contained"
						size="medium"
						onClick={clickHandler}
					>
						이동하기
					</Button>
					{/* <Link sx={{ mt: 1, display: "block" }} href="#" underline="none">
						이미 링크가 있으신가요?
					</Link> */}
				</div>
			</Box>
		</StyledBody>
	);
}

export default Invite;
