import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route ,Redirect} from 'react-router-dom';
import {handleGameInitialData} from './actions/shared';
import './App.css';
import QuestionDashBoard from './components/QuestionDashBoard';
import LoginPage from "./components/LoginPage";
import NavigationBar from "./components/NavagationBar";
import CreateUserPage from './components/CreateUserPage';
import QuestionPage from "./components/QuestionPage";
import CreateQuestionPage from "./components/CreateQuestionPage";
import LeaderBoardPage from "./components/LeaderBoardPage";
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
                                    <Route path='/questions/:id' component={QuestionPage} />
                                    <Route path='/add' component={CreateQuestionPage} />
                                    <Route path='/leaderboard' component={LeaderBoardPage} />
                                    <Redirect from="/*" to="/login" />
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
