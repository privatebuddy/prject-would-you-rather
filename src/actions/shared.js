import {showLoading,hideLoading} from 'react-redux-loading';
import {getGameInitialData} from '../Data/GameAPIs';
import {receiveUsers} from './users';
import {receiveQuestions} from "./questions";
import {setupInitialState} from './gamestate';

export function handleGameInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getGameInitialData()
            .then(({users,questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setupInitialState());
                dispatch(hideLoading());
            })
    }
}