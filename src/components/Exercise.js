import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";
import Stack from '@mui/material/Stack';
import logo from '../img/SQL_logo.png'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
  
  const toCourse = () => {
    window.location.replace('/Course')
  }

  const toExercise = () => {
    window.location.replace('/Exercise')
  }
  const closeDiv = () =>{
    var x = document.getElementById("listExercise");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
  
  const Exercise = () => {
    const classes = useStyles();
    return(
      <div>
        <Stack spacing={3} direction="row"
                style={{
                    
                  }}
                >
                    <Button>
                        <ReorderIcon onClick={closeDiv}/>
                    </Button>
                    <Button onClick={home}>
                        <img src={logo} width='100px'/>
                    </Button>
                    <Button onClick={toCourse}>
                        <ArrowBackIosIcon/>
                    </Button>
                    
            </Stack>
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display:"flex",
                flexDirection: "row",
                position: "absolute",
                left: "5px",
            }}
        >
            <div id='listExercise'
            style={{
                width: "15vw",
                height: "100vh",
                borderRight: "solid",
                borderRightWidth: "1px",
                display: "flex",
                flexDirection: "column",
            }}
            >
                <Button
                    style={{
                        color: "black",
                        fontSize: "16px",
                    }}
                >Bài tập 1</Button>
                <Button
                    style={{
                        color: "black",
                        fontSize: "16px",
                    }}
                >Bài tập 2</Button>
                <Button
                    style={{
                        color: "black",
                        fontSize: "16px",
                    }}
                >Bài tập 3</Button>
                <Button
                    style={{
                        color: "black",
                        fontSize: "16px",
                    }}
                >Bài tập 4</Button>
                <Button
                    style={{
                        color: "black",
                        fontSize: "16px",
                    }}
                >Bài tập 5</Button>
                <Button
                    style={{
                        color: "black",
                        fontSize: "16px",
                    }}
                >Bài tập 6</Button>
            </div>

            
            <div style={{
                width: "80vw",
                display: "flex",
                flexDirection: "column",
                marginLeft: "30px",
            }}>
                <h2>Bài Tập:</h2>
                <p style={{fontSize: "20px"}}>Viết câu lệnh SQL để tạo một cơ sở dữ liệu mới được gọi la testDB</p>
                <div
                    style={{
                        backgroundColor: "#D9D9D9",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                        position: "relative",
                    }}
                >
                    <TextField
                        placeholder="Câu trả lời..."
                        style={{
                            backgroundColor: "white",
                            width: "50vw",
                            margin: "10px",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            right: "0px",
                            bottom: "0px",
                            margin: "30px"
                        }}
                    >
                        <Button
                                style={{
                                    color: "white",
                                    backgroundColor: "#157EFB",
                                    padding: "10px"
                                }}
                        >Đáp án</Button>
                    </div>
                </div>
                <Button
                    style={{
                        width: "30px",
                        color: "white",
                        backgroundColor: "#157EFB",
                        padding: "10px",
                        marginTop: "20px"
                    }}
                >Nộp</Button>

            </div>
        </div>
        
        </div>
        
    );
  
  }
  
  export default Exercise;

