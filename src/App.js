import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {handleGameInitialData} from './actions/shared';
import './App.css';
import QuestionDashBoard from './components/QuestionDashBoard';
import LoginPage from "./components/LoginPage";
import NavigationBar from "./components/NavagationBar";
import CreateUserPage from './components/CreateUserPage';
class App extends Component {
    componentDidMount()
    {
        this.props.dispatch(handleGameInitialData());
    }

  render() {
      const {isFinishLoading} = this.props;
    return (
        <Router>
            <Fragment>
                <LoadingBar/>
                {
                    <div>

                        {
                            isFinishLoading === true ?
                                null :
                                <div>
                                    <NavigationBar/>
                                    <Route path='/' exact component={QuestionDashBoard} />
                                    <Route path='/login' exact component={LoginPage} />
                                    <Route path='/create' exact component={CreateUserPage} />

                                </div>
                        }
                    </div>
                }
            </Fragment>
        </Router>
    );
  }
}

function mapStateToProps({userData,questionData}) {
    return {
        isFinishLoading: questionData.questions === undefined,
    }
}

export default connect(mapStateToProps)(App);
