import React, {Component} from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import { Menu ,Image} from 'semantic-ui-react';
import getImageName from '../Images/ImageManager';
class NavigationBar extends Component {
    state = { activeItem: 'quest_board' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render()
    {
        const {activeItem} = this.state;
        const{imagePath,isLogin}=this.props;
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
                            <Menu.Item name='logout' />
                            <Menu.Item name='logout'>
                                <Image src={getImageName(imagePath)} avatar/>
                                <span>{}</span>
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
        userName: userData.name
    }
}

export default connect(mapStateToProps)(NavigationBar);