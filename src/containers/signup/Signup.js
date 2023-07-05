import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Wrapper, PopupLoginWrapper, Text, Row, Input, Button, Blank, Button2, Header} from './signupStyle'
import logo from '../login/logo.jpg'

const Signup = () => {
  const [state, setState] = useState({
    userName: '',
    password: 0,
  })

  const signup = () => {
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
            Đăng ký
        </Text>
        <Row>
          <Text color="#4F4F4F" fontSize={18}>
            Tên đăng ký
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
        <Link to="/login" style={{alignSelf: 'center'}}>
          <Button>
              <Text color="#FFFFFF" fontSize={16}>
                  Đăng ký
              </Text>
          </Button>
        </Link>
      </PopupLoginWrapper>
    </Wrapper>
  )
}

export default Signup
