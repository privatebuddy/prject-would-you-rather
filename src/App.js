import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {handleGameInitialData} from './actions/shared';
import './App.css';
import QuestionDashBoard from './components/QuestionDashBoard';
import LoginPage from "./components/LoginPage";
import NavigationBar from "./components/NavagationBar";
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
                        <NavigationBar/>
                        {
                            isFinishLoading === true ?
                                null :
                                <div>
                                    <Route path='/' exact component={QuestionDashBoard} />
                                    <Route path='/login' exact component={LoginPage} />
                                </div>
                        }
                    </div>
                }
            </Fragment>
        </Router>
    );
  }
}

function mapStateToProps({languageData,processData}) {
    return {
        isFinishLoading: true
    }
}

export default connect(mapStateToProps)(App);
