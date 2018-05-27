import { combineReducers } from 'redux';
import gameData from './gamestate';
import questionData from './questions';
import userData from './users';
import {loadingBarReducer} from 'react-redux-loading';

export default combineReducers({
    userData,
    questionData,
    gameData,
    loadingBar: loadingBarReducer
})