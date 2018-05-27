import {RECEIVE_QUESTIONS} from '../actions/questions';

export default function questionData(state = {},action) {
    switch (action.type){
        case RECEIVE_QUESTIONS :
            let returnValue = {
                questions : action.questions,
            };

            return{
                ...state,
                ...returnValue
            };
        default :
            return state
    }
}