import {SETUP_GAME_INITIAL_STATE} from '../actions/gamestate';

export default function gameData(state = {},action) {
    switch (action.type){
        case SETUP_GAME_INITIAL_STATE :
            let returnValue = {
                questionId : 0,
            };

            return{
                ...state,
                ...returnValue
            };
        default :
            return state
    }
}