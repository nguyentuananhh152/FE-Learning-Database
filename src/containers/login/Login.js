import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Wrapper, PopupLoginWrapper, Text, Row, Input, Button, Blank, Button2, Button3, Button4, Header} from './loginStyle'
import logo from './logo.jpg'

const Login = () => {
  const [state, setState] = useState({
    userName: '',
    password: 0,
  })

  const signup = () => {
    window.location.replace('/signup')
  }
  const login = () => {
    const params = {
      userName: state.userName,
      password: state.password,
    }
  }

  const handleUserName = (event) => {
    setState({ ...state, userName: event.target.value })
  }

  const handlePassword = (event) => {
    setState({ ...state, password: event.target.value })
  }

  return (
    <Wrapper>
    <Header>
      <Link to="/">
        <Button2>
          <img src={logo} width='150px'/>
        </Button2>
      </Link>
    </Header>
      <PopupLoginWrapper>
        <Text color="#292929" fontSize={22} fontWeight="bold" paddingBottom={1} width="fit-content" paddingTop={1}>
            Đăng nhập
        </Text>
        <Row>
          <Text color="#4F4F4F" fontSize={18}>
            Tên đăng nhập
          </Text>
          <Input value={state.userName} onChange={handleUserName} />
        </Row>
        <Blank height={0.2} width="fit-content"/>
        <Row>
          <Text color="#4F4F4F" fontSize={18}>
            Mật khẩu
          </Text>
          <Input
            //value={state.password}
            onChange={handlePassword}
            type="password"
          />
        </Row>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
      />
        <Link to="forgot">
          <Button3>
              <Text color="#4F4F4F" fontSize={12} paddingTop={0.2}>
                  Quên mật khẩu?
              </Text>
          </Button3>
        </Link>
        <Link to="/" style={{alignSelf: 'center'}}>
          <Button>
              <Text color="#FFFFFF" fontSize={16}>
                  Đăng nhập
              </Text>
          </Button>
        </Link>
        <Link to="signup" style={{alignSelf: 'center'}}>
          <Button4>
              <Text color="#000000" fontSize={13} paddingTop={0.2}>
                  Bạn chưa có tài khoản? <span style={{color: '#0366FF'}}
              onClick={signup}> Đăng ký </span>
              </Text>
          </Button4>
        </Link>
      </PopupLoginWrapper>
    </Wrapper>
  )
}

export default Login
