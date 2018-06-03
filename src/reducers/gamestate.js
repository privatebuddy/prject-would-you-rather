import {SETUP_GAME_INITIAL_STATE,APPLY_FILTER_TO_QUESTIONS} from '../actions/gamestate';

export default function gameData(state = {},action) {
    switch (action.type){
        case SETUP_GAME_INITIAL_STATE :
            let returnValue = {
                questionId : 0,
                dashBoardFilterBy: 3
            };

            return{
                ...state,
                ...returnValue
            };
        case APPLY_FILTER_TO_QUESTIONS:
            state.dashBoardFilterBy = action.filter;
            return{
                ...state
            };
        default :
            return state
    }
}