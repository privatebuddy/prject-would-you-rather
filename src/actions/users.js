export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export function receiveUsers(users) {
    return{
        type: RECEIVE_USERS,
        users
    }
}

export function createUser(name,gender)
{
    return{
        type: CREATE_USER,
        name,
        gender
    }
}

export function login(userID) {
    return{
        type: LOGIN_USER,
        userID
    }
}

export function updateUser(users) {
    return{
        type: UPDATE_USER,
        users
    }
}

export function logoutUser()
{
    return{
        type: LOGOUT_USER,
    }
}
