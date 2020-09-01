import { combineReducers } from 'redux'

const defaultState = {
    posts: [],
    user: {
        loggedIn: false
    },
    profilePosts: []
}

const postsReducer = ( currentState = defaultState.posts, action ) => {
    let { type, payload } = action
    switch (type) {
        case "ADD_POSTS":
            return payload
        case "ADD_COMMENT":
            let newPostId = payload.post_id 
            let newState = [...currentState]
            let newPost = newState.find( post => post.id === newPostId )
            newPost.comments = [payload, ...newPost.comments]
            return newState
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

const profilePostsReducer = ( currentState = defaultState.profilePosts, action) => {
    switch (action.type) {
        case "ADD_USER_POSTS":
            return action.payload
        default:
            return currentState
    }
}




const appReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
    profilePosts: profilePostsReducer
})

export const rootReducer = (state, action) => {
    if (action.type === "RESET_APP") {
        return defaultState
    }
    return appReducer(state, action)
}