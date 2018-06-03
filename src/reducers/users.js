import {RECEIVE_USERS, CREATE_USER, LOGIN_USER} from "../actions/users";
export default function userData(state = {},action) {
    switch (action.type){
        case RECEIVE_USERS :
        let userArray = [];
        Object.values(action.users).map((user) => userArray.push(user));
            // let returnValue = {
            //     users : userArray,
            //     currentUser : {
            //         id: null,
            //         name: null,
            //         avatarURL: '',
            //         answers: {
            //         },
            //         questions: []
            //     },
            // };
            let returnValue = {
                users : userArray,
                currentUser : userArray[0],
            };

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

            state.users.push(newUser);
            return{
                ...state,
            };
        case LOGIN_USER :
            const findUser = state.users.find((user) => user.id === action.userID);
            console.log(findUser);
            if(findUser !== undefined)
            {
                state.currentUser = findUser;
            }
            return{
                ...state,
            };
        default :
            return state
    }
}