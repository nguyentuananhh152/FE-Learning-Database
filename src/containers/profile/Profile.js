import React, {Component, useEffect} from "react";
import './Profile.css';
import avatarDefault from './avatar.png'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Button} from "@mui/material";
import logo from "../../img/SQL_logo.png";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@mui/material/TextField";


const edit = () => {
    window.location.replace('/profile/edit')
}



const logout = () => {
    localStorage.clear()
    window.location.replace('/')
}
const home = () => {
    window.location.replace('/')
}
let user;
export class Profile extends Component {
    constructor() {
        super();
        if (JSON.parse(localStorage.getItem("checkLogin")) === false) {
            window.location.replace('/login')
        }
    }

    user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result });
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    render() {

        return (
            <div className="p-body row" style={{textAlign:"center"}}>
                <AppBar position="static" color='white'>
                    <Toolbar>
                        <Typography variant="h6" >
                            <Button onClick={home}>
                                <img src={logo} width='100px'/>
                            </Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="col-lg-5 col-md-6" style={{
                    width: "100vw",
                    height:"41vw",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column"}}>
                    <div className="p-card card h-100" style={{marginRight:"auto", marginLeft:"auto", width:"50vw", height:"34vw", borderRadius:50, boxShadow: "1px 3px 1px #9E9E9E"}}>
                        <div className="card-body" style={{marginTop:20}}>
                            <div className="account-settings">
                                <div className="user-profile">
                                    <div class="user-avatar">
                                        <img src={avatarDefault} alt="" id="img" className="img" />
                                    </div>
                                    <label>Student</label>
                                    <table
                                        style={{
                                            width:"20vw",
                                            textAlign:"left",
                                            marginRight:"auto",
                                            marginLeft: "auto",
                                            marginTop:20,

                                        }}>
                                        <tr>
                                            <td style={{width:"6vw"}}>
                                                <label
                                                    htmlFor="fname"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    ID
                                                </label>
                                            </td>
                                            <td>
                                                <TextField value={JSON.parse(localStorage.getItem("user")).id} disabled={"disable"}></TextField>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label
                                                    htmlFor="fname"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Username
                                                </label>
                                            </td>
                                            <td>
                                                <TextField value={JSON.parse(localStorage.getItem("user")).username} disabled={"disable"} style={{fontWeight:"bold"}}></TextField>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label
                                                    htmlFor="fname"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Name
                                                </label>
                                            </td>
                                            <td>
                                                <TextField value={JSON.parse(localStorage.getItem("user")).name} disabled={"disable"} style={{fontWeight:"bold"}}></TextField>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label
                                                    htmlFor="email"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Email
                                                </label>
                                            </td>
                                            <td>
                                                <TextField value={JSON.parse(localStorage.getItem("user")).email} disabled={"disable"} style={{fontWeight:"bold"}}></TextField>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label
                                                    htmlFor="email"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Age
                                                </label>
                                            </td>
                                            <td>
                                                <TextField value={JSON.parse(localStorage.getItem("user")).numberAge} disabled={"disable"} style={{fontWeight:"bold"}}></TextField>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label
                                                    htmlFor="address"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Address
                                                </label>
                                            </td>
                                            <td>
                                                <TextField value={JSON.parse(localStorage.getItem("user")).address} disabled={"disable"} style={{fontWeight:"bold"}}></TextField>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <Button variant="contained" onClick={edit} style={{marginTop:30, marginRight:30}}>Edit</Button>
                                <Button variant="contained" onClick={logout} style={{marginTop:30}}>Logout</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;
