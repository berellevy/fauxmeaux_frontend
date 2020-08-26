import { combineReducers } from 'redux'

const defaultState = {
    posts: []
}

const postsReducer = (currentState = defaultState.posts, action ) => {
    switch (action.type) {
        case "ADD_POSTS":
            return [...currentState, ...action.payload]
        default:
            return currentState
    }
}
export const rootReducer = combineReducers({
    posts: postsReducer
})