import React from 'react'
import {Link} from 'react-router-dom'
import {Wrapper, Button2, Button3, Text, Button, Button4, Button5, Header, Left, Main, Button6, 
        Content, Button7, Button8, Button9, Button10} from './profileStyle'
import logo from '../login/logo.jpg'
import account from './baseline_account_circle_black_24dp.png'
import notify from './baseline_notifications_black_24dp.png'
import search from './outline_search_black_18dp.png'
import avatar from './avatar.png'
import basic from './SQL_CB.png'
import advance from './SQL_NC.png'

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
                <Link to="edit">
                    <Button6>
                        <Text color="#000000" fontSize={16} fontWeight='bold'>
                            Sửa
                        </Text>
                    </Button6>
                </Link>
            </Left>
            <Main>
                <Button7>
                    <Text color="#000000" fontSize={22}>
                        Khóa học của tôi
                    </Text>
                </Button7>
                <Header>
                    <Button8>
                        <Text color="#000000" fontSize={40}>
                            SQL cơ bản
                        </Text>
                    </Button8>
                    <Button8>
                        <Text color="#000000" fontSize={40}>
                            SQL nâng cao
                        </Text>
                    </Button8>
                </Header>
                <Header>
                    <Button9>
                        <img src={basic} width='300px'/>
                    </Button9>
                    <Button10>
                        <img src={advance} width='300px'/>
                    </Button10>
                </Header>
            </Main>
        </Content>
    </Wrapper>
  )
}

export default Profile
