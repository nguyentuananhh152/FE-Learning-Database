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
// import Search from '../Search';
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { divCourse, imgCourse } from '../../ListCourseStyle';
import { Link } from 'react-router-dom';
import avatarDefault from "../profile/avatar.png";


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

const coursemanagement = () => {
    window.location.replace('/coursemanagement')
}

const chooseFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if (reader.readyState === 2) {
            this.setState({ profileImg: reader.result });
        }
    };
    reader.readAsDataURL(e.target.files[0]);
}
const AddCourse = () => {
    const[ListCourse, setListCourse]=useState([])

    useEffect(()=> {
            if (JSON.parse(localStorage.getItem("checkLoginAdmin")) === true) {
                const unloadCallback = (event) => {
                    event.preventDefault();
                    event.returnValue = "";
                    return "";
                };

                window.addEventListener("beforeunload", unloadCallback);
                return () => window.removeEventListener("beforeunload", unloadCallback);
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
                backgroundColor:"#efd3d7"
            }}
        >
            <AppBar position="static" color='white'>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button onClick={home}>
                            <img src={logo} width='100px'/>
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container
                style={{
                    marginTop: "100px",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                }}
            >
                <div  style={{
                            width:"30vw", height:"20vw", boxShadow: "1px 3px 1px #9E9E9E", borderRadius:30, backgroundColor:"white"}}>
                        <table style={{marginRight:"auto", marginLeft:"auto", marginTop: 50}}>
                            <tr>
                                <td>
                                    <label>ID</label>
                                </td>
                                <td>
                                    <input></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name</label>
                                </td>
                                <td>
                                    <input></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Image</label>
                                </td>
                                <td>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="image-upload"
                                        id="input"
                                        onChange={chooseFile}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Lessons</label>
                                </td>
                                <td>
                                <select></select>
                                </td>
                            </tr>
                        </table>
                </div>
            </Container>
            <div style={{width:"auto", height:300, textAlign:"right", backgroundColor:"#efd3d7"}}>
                <Button style={{fontSize:15, width:110, height:45, marginRight:100, marginTop: 100, backgroundColor: "blue", borderRadius:20} }><p style={{color:"white"}} onClick={coursemanagement}>Submit</p></Button>
                {/*<Button variant="contained" onClick={window.location.replace('/admin/home')} style={{marginTop:30, marginRight:30}}>Cancel</Button>*/}
            </div>
        </div>

    );

}

export default AddCourse;

