import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";
import Stack from '@mui/material/Stack';
import logo from '../../../img/SQL_logo.png';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Input } from '@material-ui/icons';

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

const i = 0;




const EditCourse = () => {
    const[listLesson, setListLesson]=useState([])
    const[lesson, setLesson] = useState({})


    useEffect(()=> {
        if (JSON.parse(localStorage.getItem("checkLoginAdmin")) === true) {
            // const urlOnline = `https://web-service-back-end-group-3-cnpm.onrender.com/get-list-lesson?id=1`;

            const url = `http://localhost:8081/get-list-lesson?id=1`;
            fetch(url)
                .then(res => res.json())
                .then((result) => {
                        setListLesson(result);
                        console.log(result);
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
                        <Button color="inherit" onClick={listcourse}
                                style={{
                                    fontWeight: "bold",
                                }}
                        >Course Management</Button>
                    </Typography>
                    <Stack spacing={3} direction="row"
                           style={{
                               display: "flex",
                               alignSelf: "center",
                               justifyContent: "center",
                           }}
                    >
                        <SearchIcon />
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
                    <h2>Basic SQL</h2>
                    {listLesson.map(w => {
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
                                    onClick={() => setLesson(w)}
                                >{w.name}</Button>
                            </Stack>
                        }
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
                        <h2 style={{margin:30}}>Edit Course</h2>
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
                        >Add Lesson</Button>
                        <Button
                            style={{
                                color: "white",
                                backgroundColor: "red",
                                margin: "10px",
                            }}
                            onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) {this.onCancel()} }}
                        >Remove Lesson</Button>

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

export default EditCourse;

