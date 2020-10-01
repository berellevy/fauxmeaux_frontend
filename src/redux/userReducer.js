import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./constants"

const user = {
    loggedIn: false
}

export const userReducer = ( currentState = user, action ) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { loggedIn: true, ...action.payload }
        case LOGIN_FAILURE:
            return { loggedIn: false, error: "incorrect username or password"}
        case SIGNUP_SUCCESS:
            return { loggedIn: true, ...action.payload }
        case SIGNUP_FAILURE:
            return { loggedIn: false, errors: action.payload}
        case REGISTER_SUCCESS:
            return { loggedIn: true, ...action.payload}
        default:
            return currentState
    }
}