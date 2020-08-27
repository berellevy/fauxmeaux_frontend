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
            console.log('problem');
            return { loggedIn: false, error: "incorrect username or password"}
        default:
            return currentState
    }
}




export const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer
})