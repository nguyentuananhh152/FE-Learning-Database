import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";
import { Wrapper, Body_p, Title} from "./HomeStyle";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@mui/icons-material/Search";
import Stack from '@mui/material/Stack';
import logo from '../img/SQL_logo.png'
import homeimg from '../img/home.jpg';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
  window.location.replace('/')
}

const listcourse = () => {
  window.location.replace('/listcourse')
}
const profile = () => {
    window.location.replace('/profile')
}

const login = () => {
    window.location.replace('/login')
}

const sigup = () => {
    window.location.replace('/signup')
}

const infor = {
    id: 0,
    name: "",
    age: 0,
    address: "",
    email: "",
    username: ""
};
var user = JSON.stringify(infor);
// const checkLogin = false;


const Home = () => {
    useEffect(()=> {
        localStorage.removeItem("admin")
        localStorage.removeItem("checkLoginAdmin")
        if (localStorage.getItem("user") === null) {
            localStorage.setItem("user", user)
        }
        if (localStorage.getItem("checkLogin") === null) {
            localStorage.setItem("checkLogin", false)
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
            <Button color="inherit" onClick={listcourse} 
              style={{
                fontWeight: "bold",
              }}
            >Courses</Button>
          </Typography>
            <Stack spacing={2} direction="row" border={0} style={{marginLeft:20, marginRight: 150, borderRadius: 15}}>
                <TextField
                    id="search-bar"
                    className="text"
                    placeholder="Search"
                    style={{
                        marginLeft: 30,
                        width:"50vw",
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
            </Stack>
          <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={sigup} >Register</Button>
              <Button variant="outlined" onClick={login}>Login</Button>
              <AccountCircleIcon onClick={profile}></AccountCircleIcon>
          </Stack>
        </Toolbar>
      </AppBar>

      <div
        style={{
          width: "100vw",
          height:"100vh",
          backgroundColor: "#071A30",
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "column",

        }}>
          <img
            src={homeimg}
            max-width={100}
            max-height={60}
            //   width={1200}
            // height={700}
          ></img>

          <form
          style={{
            width: "60vw",
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
            margin: 0,
            padding: 0,
          }}
          >

          </form>
      </div>
        <div
            style={{
                width: "100vw",
                height:"40vh",
                backgroundColor: "#071A30",
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                flexDirection: "column",

            }}>
            <table style={{textAlign:"center", color:"white"}} >
                <th colSpan={5} style={{marginBottom:15, height:50}}>
                    THÀNH VIÊN NHÓM 5
                </th>
                <tr style={{fontWeight:"bold", marginBottom:10, height:50}}>
                    <td>
                        Lớp
                    </td>
                    <td>
                        Mã sinh viên
                    </td>
                    <td>
                        Tên
                    </td>
                    <td>
                        Số điện thoại
                    </td>
                    <td>
                        Email
                    </td>
                </tr>
                <tr>
                    <td>
                        TT33H7
                    </td>
                    <td>
                        A40877
                    </td>
                    <td>
                        Nguyễn Tuấn Anh
                    </td>
                    <td>
                        0833515743
                    </td>
                    <td>
                        nguyentuananhh152@gmail.com
                    </td>
                </tr>
                <tr>
                    <td>
                        TT33G1
                    </td>
                    <td>
                        A38956
                    </td>
                    <td>
                        Lê Anh Quân
                    </td>
                    <td>
                        0395738630
                    </td>
                    <td>
                        theanh1990xhn@gmail.com
                    </td>
                </tr>
                <tr>
                    <td>
                        TT32G1
                    </td>
                    <td>
                        A35532
                    </td>
                    <td>
                        Nguyễn Minh Hiếu
                    </td>
                    <td>
                        0969073513
                    </td>
                    <td>
                        potato.mhn@gmail.com
                    </td>
                </tr>
            </table>
        </div>
    </div>
  );

}

export default Home;

