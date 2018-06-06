import React, {Component} from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import { Menu ,Image} from 'semantic-ui-react';
import getImageName from '../Images/ImageManager';
import {logoutUser} from "../actions/users";
class NavigationBar extends Component {
    state = { activeItem: 'quest_board' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handleLogOut = (e) =>{
        this.props.dispatch(logoutUser());
    };
    render()
    {
        const {activeItem} = this.state;
        const{imagePath,isLogin,userName}=this.props;
        if(isLogin)
        {
            return (
                <nav>
                    <Menu pointing secondary>
                        <Menu.Item name='quest_board' active={activeItem === 'quest_board'} onClick={this.handleItemClick} as={Link} to='/'>
                            Question Board
                        </Menu.Item>
                        <Menu.Item name='leader_board' active={activeItem === 'leader_board'} onClick={this.handleItemClick} as={Link} to='/leaderboard'>
                            Leader Board
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item name='logout' onClick={this.handleLogOut} />
                            <Menu.Item>
                                <Image src={getImageName(imagePath)} avatar/>
                            </Menu.Item>
                            <Menu.Item>
                                {userName}
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </nav>
            )
        }else {
            return null;
        }

    }
}


function mapStateToProps({userData}) {
    return{
        isLogin:userData.currentUser.id,
        imagePath: userData.currentUser.avatarURL,
        userName: userData.currentUser.name
    }
}

export default connect(mapStateToProps)(NavigationBar);