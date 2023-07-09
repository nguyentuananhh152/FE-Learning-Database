import React, { Component } from "react";
import './Profile.css';
import avatarDefault from './avatar.png'

const profile = () => {
    window.location.replace('/admin/profile')
}
export class AdminEditProfile extends Component {

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
        // const { profileImg } = this.state;

        return (
            <div className="p-body row" style={{textAlign:"center"}}>
                <div className="col-lg-5 col-md-6" style={{
                    width: "100vw",
                    height:"60vh",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column"}}>
                    <div className="p-card card h-100" style={{marginRight:"auto", marginLeft:"auto", marginTop:50, width:"30vw", height:"20vw"}}>
                        <div className="card-body" style={{marginTop:20}}>
                            <div className="account-settings">
                                <div className="user-profile">
                                    <div class="user-avatar">
                                        <img src={avatarDefault} alt="" id="img" className="img" />
                                    </div>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="image-upload"
                                        id="input"
                                        onChange={this.imageHandler}
                                    />
                                    <table
                                        style={{
                                            textAlign:"center",
                                            marginRight:"auto",
                                            marginLeft: "auto",
                                            marginTop:20
                                        }}>
                                        <tr>
                                            <td>
                                                <label
                                                    htmlFor="fname"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                >
                                                    Name
                                                </label>
                                            </td>
                                            <td>
                                                <input
                                                    name="name"
                                                    value=""
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Name"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label
                                                    htmlFor="email"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                >
                                                    Email
                                                </label>
                                            </td>
                                            <td>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value=""
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label
                                                    htmlFor="email"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                >
                                                    Age
                                                </label>
                                            </td>
                                            <td>
                                                <input
                                                    type="tel"
                                                    name="contactNo"
                                                    value=""
                                                    className="form-control"
                                                    placeholder="Enter Contact Number"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label
                                                    htmlFor="address"
                                                    style={{color: "#000000"}}
                                                    className="form-label"
                                                >
                                                    Address
                                                </label>
                                            </td>
                                            <td>
                                                <input
                                                    value=""
                                                    name="deliveryAddress"
                                                    rows="3"
                                                    type="text"
                                                    id="address"
                                                    className="form-control text-break"
                                                    placeholder="Address"/>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <button className="btn btn-outline-dark" type="submit" onClick={profile}>
                                    Submit
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

export default AdminEditProfile;
