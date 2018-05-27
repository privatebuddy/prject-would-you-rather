import React, { Component} from 'react';
import {connect} from "react-redux";

class QuestionDashBoard extends Component {

    render() {
        return(
            <div>
                THIS IS QUEST DASH BOARD
            </div>
        );
    }
}

function mapStateToProps({questionData,userData}) {
    return {
        isLogin: true
    }
}

export default connect(mapStateToProps)(QuestionDashBoard);