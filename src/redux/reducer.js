import { combineReducers } from 'redux'

const defaultState = {
    posts: [],
    user: null
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
        case "LOGIN":
            return action.payload
        default:
            return null
    }
}


export const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer
})