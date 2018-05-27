import {RECEIVE_USERS} from "../actions/users";

export default function userData(state = {},action) {
    switch (action.type){
        case RECEIVE_USERS :
            let returnValue = {
                users : action.users,
            };

            return{
                ...state,
                ...returnValue
            };
        default :
            return state
    }
}