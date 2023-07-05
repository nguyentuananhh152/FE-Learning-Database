import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";
import Stack from '@mui/material/Stack';
import logo from './SQL_logo.png'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
// import Search from '../Search';
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { divCourse, imgCourse } from '../ListCourseStyle';
import { Link } from 'react-router-dom';


const listlesson = () => {
    window.location.replace('/listlesson');
}

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
const lessonmanagement = () => {
    window.location.replace('/lessonmanagement')
}

const coursemanagement = () => {
    window.location.replace('/coursemanagement')
}

const accountmanagement = () => {
    window.location.replace('/accountmanagement')
}

const notificationmanagement = () => {
    window.location.replace('/notificationmanagement')
}

const toSeeMore = () =>{
    window.location.replace('/admin/SeeMore')
}
const toCourse = () =>{
    window.location.replace('/Course')
}
const AddCourse = () => {
    const[ListCourse, setListCourse]=useState([])

    // const addCourse = (id, name) => {
    //     fetch("http://localhost:8081/")
    // }
    useEffect(()=> {
        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
          };
        
          window.addEventListener("beforeunload", unloadCallback);
          return () => window.removeEventListener("beforeunload", unloadCallback);
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
                    <Stack spacing={3} direction="row"
                           style={{
                               display: "flex",
                               alignSelf: "center",
                               justifyContent: "center",
                           }}
                    >
                        <Button color="inherit" onClick={coursemanagement}
                                style={{
                                    fontWeight: "bold",
                                }}
                        >Quản Lý Khóa Học</Button>
                        <Button color="inherit" onClick={lessonmanagement}
                                style={{
                                    fontWeight: "bold",
                                }}
                        >Quản Lý Bài Học</Button>
                        <Button color="inherit" onClick={accountmanagement}
                                style={{
                                    fontWeight: "bold",
                                }}
                        >Quản Lý Tài Khoản</Button>
                        <Button color="inherit" onClick={notificationmanagement}
                                style={{
                                    fontWeight: "bold",
                                }}
                        >Quản Lý Thông Báo</Button>
                        <SearchIcon />
                        <AccountCircleIcon></AccountCircleIcon>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Container
                style={{
                    marginTop: "100px",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                }}
            >
                <form>
                    <table>
                        <tr>
                            <td>
                                <label>Mã</label>
                            </td>
                            <td>
                                <input></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Tên Khóa Học</label>
                            </td>
                            <td>
                                <input></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Bài Học</label>
                            </td>
                            <td>
                            <select></select>
                            </td>
                        </tr>
                    </table>
                </form>
                
            </Container>
            <div style={{width:"auto", height:300, textAlign:"right"}}>
                <Button style={{fontSize:15, width:110, height:45, marginRight:100, marginTop: 100, backgroundColor: "blue", borderRadius:20} }><p style={{color:"white"}}>Gửi</p></Button>
            </div>
        </div>

    );

}

export default AddCourse;

