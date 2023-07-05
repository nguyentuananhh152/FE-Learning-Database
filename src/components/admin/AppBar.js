import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logo from '../img/SQL_logo.png'
// import { Button } from '@material-ui/core';

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


export default function AppbarAdmin() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='white'>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button onClick={home}>
                            <img src={logo} width='100px'/>
                        </Button>
                        <Button color="inherit" onClick={coursemanagement}>Quản LÝ Khóa Học</Button>
                        <Button color="inherit" onClick={lessonmanagement}>Quản Lý bài Học</Button>
                        <Button color="inherit" onClick={accountmanagement}>Quản Lý Tài Khoản</Button>
                        <Button color="inherit" onClick={notificationmanagement}>Thông báo</Button>
                    </Typography>
                    <Stack spacing={2} direction="row">

                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    );
}