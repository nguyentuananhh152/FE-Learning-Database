import React from 'react'
import {Wrapper, Button2, Button3, Text, Button, Button4, Button5, Header, Left, Main, Button6, 
        Content, Input, PopupLoginWrapper} from './editStyle'
import logo from '../login/logo.jpg'
import account from '../profile/baseline_account_circle_black_24dp.png'
import notify from '../profile/baseline_notifications_black_24dp.png'
import search from '../profile/outline_search_black_18dp.png'
import avatar from '../profile/avatar.png'

const Profile = () => {
  return (
    <Wrapper>
        <Header>
            <Button2>
                <img src={logo} width='150px'/>
            </Button2>
            <Button3>
                <Text color="#000000" fontSize={18}>
                    Khóa học
                </Text>
            </Button3>
            <Button5>
                <img src={search} width='40px'/>
            </Button5>
            <Button>
                <img src={notify} width='50px'/>
            </Button>
            <Button4>
                <img src={account} width='50px'/>
            </Button4>
        </Header>
        <hr style={{width: '100%', border: '1.5px solid #000000'}}/>
        <Content>
            <Left>
                <Button2>
                    <img src={avatar} width='150px'/>
                </Button2>
                <Text color="#4F4F4F" fontSize={20} paddingTop={0.2} paddingBottom={1}>
                        Tên đăng nhập
                </Text>
                <Button6>
                    <Text color="#000000" fontSize={16} fontWeight='bold'>
                        Sửa
                    </Text>
                </Button6>
            </Left>
            <Main>
                <PopupLoginWrapper>
                    <Text color="#4F4F4F" fontSize={18}>
                        Tên hiển thị
                    </Text>
                    <Input />
                    <Text color="#4F4F4F" fontSize={18} paddingTop={0.2}>
                        Tuổi
                    </Text>
                    <Input />
                    <Text color="#4F4F4F" fontSize={18} paddingTop={0.2}>
                        Địa chỉ
                    </Text>
                    <Input />
                </PopupLoginWrapper>
            </Main>
        </Content>
    </Wrapper>
  )
}

export default Profile
