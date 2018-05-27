import React, { Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

class QuestionDashBoard extends Component {

    render() {
        const {isLogin} = this.props;

        if(isLogin === null)
        {
            return <Redirect to={'/login'}/>
        }

        return(
            <div>
                THIS IS QUEST DASH BOARD
            </div>
        );
    }
}

function mapStateToProps({questionData,userData}) {
    return {
        isLogin: userData.currentUser.id,
    }
}

export default connect(mapStateToProps)(QuestionDashBoard);