import {RECEIVE_QUESTIONS} from '../actions/questions';

export default function questionData(state = {},action) {
    switch (action.type){
        case RECEIVE_QUESTIONS :
            let returnQuestions = Object.keys(action.questions).map(key => {
                return action.questions[key];
            });
            let returnValue = {
                questions : returnQuestions,
            };

            return{
                ...state,
                ...returnValue
            };
        default :
            return state
    }
}