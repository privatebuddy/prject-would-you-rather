import React, {Component} from 'react'
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom'

class NavigationBar extends Component {

    render()
    {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'} activeClassName={'active'}>
                            Question Board
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}


function mapStateToProps({userData}) {
    return{
        isLogin:true,
    }
}

export default connect(mapStateToProps)(NavigationBar);