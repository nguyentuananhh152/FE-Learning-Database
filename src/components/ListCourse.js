import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";
import Stack from '@mui/material/Stack';
import logo from '../img/SQL_logo.png'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { divCourse, imgCourse } from './ListCourseStyle';
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
    window.location.replace('/')
  }
  
  const listcourse = () => {
    window.location.replace('/listcourse')
  }
const profile = () => {
    window.location.replace('/profile')
}
  const toSeeMore = () =>{
    window.location.replace('/SeeMore')
  }
  const toCourse = () =>{
    window.location.replace('/Course')
  }
  const ListCourse = () => {
    const[ListCourse, setListCourse]=useState([])

    useEffect(()=> {
        const urlOnline = `https://web-service-back-end-group-3-cnpm.onrender.com/get-all-list-course`;
        const url = `http://localhost:8081/get-all-list-course`
        fetch(urlOnline)
            .then(res => res.json())
            .then((result) => {
                setListCourse(result);
                console.log(ListCourse);
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
              <Button color="inherit" onClick={listcourse} 
                style={{
                  fontWeight: "bold",
                }}
              >Courses</Button>
            </Typography>
            <Stack spacing={3} direction="row"
                style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
            >
                <NotificationsIcon></NotificationsIcon>
                <AccountCircleIcon onClick={profile}></AccountCircleIcon>
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
                {ListCourse.map((w,index)=>{
                return <divCourse>
                            <h1>{w.name}</h1>
                            <img style={{ width: 350, height: 300, marginRight: 50,}} src={w.image}/>
                        
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" onClick={toCourse}>Register</Button>
                                <Button variant="outlined" onClick={toSeeMore}>Detail</Button>
                            </Stack>
                    
                </divCourse>
                            
                },
                
                )}
        </Container>
        </div>
        
    );
  
  }
  
  export default ListCourse;

//   return (
//     <Container>
//         <form>
//             <h1 style={{color:"blue"}}>List Course</h1>
//             {ListCourse.map((w,index)=>{
//             return  <Table border="1px" style={{whiteSpace: "normal", wordWrap: "break-word", marginTop:"50px"}}>
//                 <tr>
//                     <td width="130px" colSpan={2}>
//                         <img style={{ width: 350, height: 300 }} src={w.image} onClick={listlesson}/>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td width="500px">
//                         <TextField id="outlined-basic" inputProps={{min: 0, style: { textAlign: 'center'}}} label="Desctiption" variant="outlined" width="400px" fullWidth
//                         value={w.description}
//                         />
//                     </td>
//                     <td>
//                     <TextField inputProps={{min: 0, style: { textAlign: 'center', fontWeight: 'bold'}}} disabled="disabled" fullWidth value={w.name} ></TextField>
//                     </td>
//                 </tr>
//             </Table>
                        
//             },
            
//             )}
//         </form>
//     </Container>
  
//   );
// }
