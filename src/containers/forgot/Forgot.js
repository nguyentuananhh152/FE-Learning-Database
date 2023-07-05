import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Wrapper, PopupLoginWrapper, Text, Row, Input, Button, Blank, Button2, Header} from './forgotStyle'
import logo from '../login/logo.jpg'

const Forgot = () => {
  const [state, setState] = useState({
    userName: '',
    password: 0,
  })

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
            Quên mật khẩu
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
            Email
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
                  Gửi
              </Text>
          </Button>
        </Link>
      </PopupLoginWrapper>
    </Wrapper>
  )
}

export default Forgot
