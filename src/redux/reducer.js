import { combineReducers } from 'redux'

const defaultState = {
    posts: [],
    user: {
        loggedIn: false
    }
}

const postsReducer = ( currentState = defaultState.posts, action ) => {
    switch (action.type) {
        case "ADD_POSTS":
            return [...currentState, ...action.payload]
        default:
            return currentState
    }
}

const userReducer = ( currentState = defaultState.user, action ) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { loggedIn: true, ...action.payload }
        case "LOGIN_FAILURE":
            return { loggedIn: false, error: "incorrect username or password"}
        case "SIGNUP_SUCCESS":
            return { loggedIn: true, ...action.payload }
        case "SIGNUP_FAILURE":
            return { loggedIn: false, errors: action.payload}
        case "REGISTER_SUCCESS":
            return { loggedIn: true, ...action.payload}
        default:
            return currentState
    }
}




const appReducer = combineReducers({
    posts: postsReducer,
    user: userReducer
})

export const rootReducer = (state, action) => {
    if (action.type === "RESET_APP") {
        return defaultState
    }
    return appReducer(state, action)
}