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

const HomeAdmin = () => {
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
                    </Typography>
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
                <h1
                    style={{
                        color:"white",
                        fontSize: "100px",
                        margin: 0,
                        padding: "30px",
                        display: "flex",
                        alignSelf: "center",
                        justifyContent: "center",
                    }}
                >HỌC SQL</h1>
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
                    <TextField
                        id="search-bar"
                        className="text"
                        placeholder="Tìm kiếm khóa học. Ví dụ: SQL cơ bản,..."
                        style={{
                            width:"80vw",
                            height: "6vh",
                            backgroundColor: "white",
                            display: "flex",
                            alignSelf: "center",
                            justifyContent: "center",

                        }}
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon
                            style={{
                                width:"5vw",
                                height: "6vh",
                                padding: 0,
                                margin: 0,
                                backgroundColor: "white",
                                display: "flex",
                                alignSelf: "center",
                                justifyContent: "center",
                                fill: "white",
                                backgroundColor: "#157EF",
                            }}
                        />
                    </IconButton>
                </form>

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
