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

  
  const LessonManagement = () => {
    const[ListLesson, setListLesson]=useState([])

    useEffect(()=> {
        const urlOnline = `https://web-service-back-end-group-3-cnpm.onrender.com/get-all-lesson`;
      const url = `http://localhost:8081/get-all-lesson`;
      fetch(urlOnline)
          .then(res => res.json())
          .then((result) => {
              setListLesson(result);
              console.log(ListLesson);
          }
      )
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
                            >{l.name}</Button>
                        </Stack>
                },
                )}
                
                
                

            </div>
            <div style={{
                width: "80vw",
                display: "flex",
                flexDirection: "column",
                marginLeft: "15px",
            }}>
                <div
                    style={{
                        borderBottom: "solid",
                        borderBottomWidth: "1px",
                    }}
                >
                    <h2>Name: Learn query 1</h2>
                    <h2>Content</h2>
                    <p>Nội dung 1</p>
                    <p>Nội dung 2</p>
                    <p>Nội dung 3</p>
                    <p>Nội dung 4</p>
                    <Button
                        style={{
                            color: "white",
                            backgroundColor: "#157EFB",
                            margin: "10px",
                        }}
                    >Edit</Button>
                    <Button
                        style={{
                            color: "white",
                            backgroundColor: "red",
                            margin: "10px",
                        }}
                        onClick={() => { if (window.confirm('Are you sure you wish to delete this lesson?')) {this.onCancel()} }}
                    >Delete</Button>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "10px",
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
                                position: "absolute",
                                right: "0px",
                            }}
                        >Next</Button>

                    </div>
                </div>
                <div>
                    <div
                        style={{
                            marginTop: "10px",

                            height: "100px",
                            marginRight: "10px",
                            padding: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <Button type='submit'
                                style={{
                                    color: "white",
                                    backgroundColor: "#157EFB",
                                    position: "absolute",
                                    right: "0px",
                                    margin: "10px",
                                    borderRadius:50

                                }}><p style={{color:"white"}} >+</p></Button>
                        {/*<Button style={{fontSize:15, width:110, height:45, marginRight:100, marginTop: 100, backgroundColor: "blue", borderRadius:20} }><p style={{color:"white"}} onClick={coursemanagement}>Gửi</p></Button>*/}

                    </div>
                </div>
            </div>
        </div>
        
        </div>
        
    );
  
  }
  
  export default LessonManagement;

