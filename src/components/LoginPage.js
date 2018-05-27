import React, { Component} from 'react';
import {connect} from "react-redux";

class LoginPage extends Component {

    render() {
        return(
            <div>
                THIS IS LOGIN PAGE
            </div>
        );
    }
}

function mapStateToProps({questionData,userData}) {
    return {
        isLogin: true
    }
}

export default connect(mapStateToProps)(LoginPage);