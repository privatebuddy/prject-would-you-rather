import React, { Component} from 'react';
import {connect} from "react-redux";
import {Redirect,Link} from 'react-router-dom';
import { Image, List,Header,Button } from 'semantic-ui-react'
import getImageName from '../Images/ImageManager';
import {login} from '../actions/users';
class LoginPage extends Component {

    onChooseUser = (id) =>{
        console.log("Login using "+id);
        this.props.dispatch(login(id));
    };

    render() {
        const {isLogin,users} = this.props;

        if(isLogin !== null)
        {
            return <Redirect to={'/'}/>
        }

        return(
            <div className={'login_container'}>
                <Header size='medium'>Please Login</Header>
                <List selection verticalAlign='middle'>
                    {
                        users.length > 0 ? users.map((user,index) =>
                            <List.Item key={index} value={user.id} onClick={() => this.onChooseUser(user.id)}>
                                <Image avatar src={getImageName(user.avatarURL)} />
                                <List.Content>
                                    <List.Header>{user.name}</List.Header>
                                </List.Content>
                            </List.Item>) : null
                    }
                </List>
                <Button as={Link} to='/create' >Create New User</Button>
            </div>
        );
    }
}

function mapStateToProps({questionData,userData}) {
    return {
        isLogin: userData.currentUser.id,
        users: userData.users
    }
}

export default connect(mapStateToProps)(LoginPage);