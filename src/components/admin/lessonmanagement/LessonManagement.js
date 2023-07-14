import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";
import Stack from '@mui/material/Stack';
import logo from '../SQL_logo.png'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Search from '../../Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Input } from '@material-ui/icons';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const home = () => {
	window.location.replace('/admin/home')
}

const listcourse = () => {
	window.location.replace('/coursemanagement')
}

const addLesson = () => {
	window.location.replace('/addlesson')
}


const LessonManagement = () => {
	const[ListLesson, setListLesson]=useState([])
	const[lesson, setLesson] = useState({})

	useEffect(()=> {
		if (JSON.parse(localStorage.getItem("checkLoginAdmin")) === true) {
			// const urlOnline = `https://web-service-back-end-group-3-cnpm.onrender.com/get-all-lesson`;
			const url = `http://localhost:8081/get-all-lesson`;
			fetch(url)
				.then(res => res.json())
				.then((result) => {
						setListLesson(result);
						console.log(ListLesson);
					}
				)
		} else {
			window.location.replace('/admin/login')
		}
	},[])

	const classes = useStyles();
	return(
		<div
			style={{
				width: "100vw",
				display: "flex",
				alignSelf: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<AppBar position="static" color='white'>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<Button onClick={home}>
							<img src={logo} width='100px'/>
						</Button>
					</Typography>
					<Stack spacing={4} direction="row">
						<TextField
							id="search-bar"
							className="text"
							placeholder="Search Lesson"
							style={{
								marginLeft: 30,
								width:"30vw",
								height: "3vh",
								backgroundColor: "white",
								display: "flex",
								alignSelf: "center",
								justifyContent: "center",
							}}
							InputProps={{
								style: {
									borderRadius: "30px",
								}
							}}
						/>
						<IconButton type="submit" aria-label="search">
							<SearchIcon></SearchIcon>
						</IconButton>
						<NotificationsIcon></NotificationsIcon>
						<AccountCircleIcon></AccountCircleIcon>
					</Stack>
				</Toolbar>
			</AppBar>
			<div
				style={{
					width: "100vw",
					height: "100vh",
					display:"flex",
					flexDirection: "row",
				}}
			>
				<div
					style={{
						width: "20vw",
						height: "100vh",
						padding: "10px",
						display:"auto",
						overflowY: "scroll",
					}}
				>
					<h2>All Lesson</h2>
					{ListLesson.map((l,index)=>{
							return <Stack spacing={2} direction="row"
							              style={{
								              marginLeft: "10px",
								              marginTop: "10px",
							              }}
							>
								<Button
									style={{
										color: "black",
									}}
									onClick={() => setLesson(l)}
								>{l.name}</Button>
							</Stack>
						},
					)}




				</div>
				<div style={{
					width: "76vw",
					display: "flex",
					flexDirection: "column",
					marginLeft: "15px",
					backgroundColor:"#dbdbdb"
				}}>
					<div
						// style={{
						//     borderBottom: "solid",
						//     borderBottomWidth: "1px",
						// }}
					>
						<h2 style={{margin:30}}>{lesson.name}</h2>
						<div style={{
							margin: 30,
							backgroundColor: "white",
							borderRadius:5,
							boxShadow: "1px 3px 1px #9E9E9E",
							padding:20
						}}>

							<p>
								{lesson.content}
							</p>
						</div>
						<Button
							style={{
								color: "white",
								backgroundColor: "#157EFB",
								margin: "30px",
							}}
							onClick={addLesson}
						>New Lesson</Button>
						<Button
							style={{
								color: "white",
								backgroundColor: "#157EFB",
								margin: "10px",
							}}
						>Update Lesson</Button>
						<Button
							style={{
								color: "white",
								backgroundColor: "red",
								margin: "30px",
							}}
							onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) {this.onCancel()} }}
						>Delete Lesson</Button>

						<div style={{
							display: "flex",
							flexDirection: "row",
							margin: 30
						}}>
							<Button
								style={{
									color: "white",
									backgroundColor: "#157EFB",
								}}
							>Pre</Button>
							<Button
								style={{
									color: "white",
									backgroundColor: "#157EFB",
									marginLeft: 50
								}}
							>Next</Button>

						</div>
					</div>
				</div>
			</div>

		</div>

	);

}

export default LessonManagement;

