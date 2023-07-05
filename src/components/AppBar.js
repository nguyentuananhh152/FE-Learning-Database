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

const listcourse = () => {
  window.location.replace('/listcourse')
}


export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='white'>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button onClick={home}>
              <img src={logo} width='100px'/>
            </Button>
            <Button color="inherit" onClick={listcourse}>Khóa Học</Button>
          </Typography>
          <Stack spacing={2} direction="row">
              <Button variant="contained">Đăng ký</Button>
              <Button variant="outlined">Đăng nhập</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}