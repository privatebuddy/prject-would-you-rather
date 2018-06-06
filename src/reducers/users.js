import {RECEIVE_USERS, CREATE_USER, LOGIN_USER, UPDATE_USER, LOGOUT_USER} from "../actions/users";
import {_updateUsers} from '../Data/_DATA';
export default function userData(state = {},action) {
    switch (action.type){
        case RECEIVE_USERS :
        let userArray = [];
        Object.values(action.users).map((user) => userArray.push(user));
            let returnValue = {
                users : userArray,
                currentUser : {
                    id: null,
                    name: null,
                    avatarURL: '',
                    answers: {
                    },
                    questions: []
                },
            };
            // let returnValue = {
            //     users : userArray,
            //     currentUser : userArray[0],
            // };

            return{
                ...state,
                ...returnValue
            };
        case CREATE_USER :
            let imageURL = '';
            if(action.gender === 'male')
            {
                imageURL = './avatar_men_1.png';
            }else {
                imageURL = './avatar_women_1.png';
            }

            const newUser = {
                id: `${action.name}+${Math.random().toString(36)}`,
                name: action.name,
                avatarURL: imageURL,
                answers: {
                },
                questions: []
            };

            _updateUsers(newUser);

            state.users.push(newUser);
            return{
                ...state,
            };
        case LOGIN_USER :
            const findUser = state.users.find((user) => user.id === action.userID);
            if(findUser !== undefined)
            {
                state.currentUser = findUser;
            }
            return{
                ...state,
            };
        case UPDATE_USER :
            state.users = Object.keys(action.users).map(key => {
                return action.users[key];
            });
            state.currentUser = state.users.find((user) => user.id === state.currentUser.id);
            return{
                ...state,
            };
        case LOGOUT_USER :
            state.currentUser ={
            id: null,
                name: null,
                avatarURL: '',
                answers: {
            },
            questions: []};

            return{
                ...state,
            };
        default :
            return state
    }
}