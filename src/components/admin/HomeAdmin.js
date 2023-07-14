import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@mui/icons-material/Search";
import Stack from '@mui/material/Stack';
import logo from './SQL_logo.png'
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

const infor = {
    id: 0,
    name: "",
    age: 0,
    address: "",
    email: "",
    username: ""
};
var admin = JSON.stringify(infor);

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

const profile = () => {
    window.location.replace('/admin/profile')
}

const login = () => {
    window.location.replace('/admin/login')
}


const HomeAdmin = () => {
    useEffect(()=> {
        localStorage.removeItem("user")
        localStorage.removeItem("checkLogin")
        if (localStorage.getItem("admin") === null) {
            localStorage.setItem("admin", admin)
        }
        if (localStorage.getItem("checkLoginAdmin") === null) {
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
                        <Button color="inherit" onClick={coursemanagement}
                                style={{
                                    fontWeight: "bold",
                                }}
                        >Course Management</Button>
                        <Button color="inherit" onClick={lessonmanagement}
                                style={{
                                    fontWeight: "bold",
                                }}
                        >Lesson Management</Button>
                        <Button color="inherit" onClick={accountmanagement}
                                style={{
                                    fontWeight: "bold",
                                }}
                        >Account Management</Button>
                        <Button color="inherit" onClick={notificationmanagement}
                                style={{
                                    fontWeight: "bold",
                                }}
                        >Notification Management</Button>
                    </Typography>
                    <Stack spacing={2} direction="row" border={0} style={{marginLeft:20, marginRight: 150, borderRadius: 15}}>
                        <TextField
                            id="search-bar"
                            className="text"
                            placeholder="Search"
                            style={{
                                marginLeft: 30,
                                width:"25vw",
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
                        <Button variant="contained" onClick={login}>Login</Button>
                        <AccountCircleIcon onClick={profile}></AccountCircleIcon>
                    </Stack>
                </Toolbar>
            </AppBar>

            <div
                style={{
                    width: "100vw",
                    height:"100vh",
                    backgroundColor: "#2f527c",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column",

                }}>
                <h2
                    style={{
                        color:"white",
                        fontSize: "250px",
                        margin: 0,
                        padding: "30px",
                        display: "flex",
                        alignSelf: "center",
                        justifyContent: "center",
                    }}
                >SQL </h2>
                <h1 style={{
                    color:"white",
                    fontSize: "80px",
                    margin: 0,
                    padding: "30px",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                }}>MANAGEMENT</h1>
            </div>

        </div>
    );

}

export default HomeAdmin;

// export default function Home() {
//   return (
//     <Container>

//         <Paper>
//             <h1>
//                 This is home page
//             </h1>
//         </Paper>
//     </Container>

//   );
// }
