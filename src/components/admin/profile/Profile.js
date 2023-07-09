import React, { Component } from "react";
import './Profile.css';
import avatarDefault from './avatar.png'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Button} from "@mui/material";
import logo from '../../../img/SQL_logo.png';
import AppBar from "@material-ui/core/AppBar";


const edit = () => {
    window.location.replace('/admin/profile/edit')
}

const home = () => {
    window.location.replace('/admin/home')
}
export class AdminProfile extends Component {


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
                    height:"60vh",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column"}}>
                    <div className="p-card card h-100" style={{marginRight:"auto", marginLeft:"auto", marginTop:50, width:"30vw", height:"30vw", borderRadius:50, boxShadow: "1px 3px 1px #9E9E9E"}}>
                        <div className="card-body" style={{marginTop:20}}>
                            <div className="account-settings">
                                <div className="user-profile">
                                    <div class="user-avatar">
                                        <img src={avatarDefault} alt="" id="img" className="img" />
                                    </div>

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
                                                <u>ID</u>
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
                                                <u>Name</u>
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
                                                <u>Email</u>
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
                                                <u>Age</u>
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
                                                <u>Address</u>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <button className="btn btn-outline-dark" onClick={edit} style={{marginTop:40}}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                    width: "100vw",
                    height:"40vh",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column",

                }}>

                    <div className="d-grid gap-2" style={{marginTop:40}}>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminProfile;
