import { combineReducers } from 'redux'

const defaultState = {
    posts: [],
    user: {
        loggedIn: false
    },
    profilePosts: [],
    users: [] 
}

const postsReducer = ( currentState = defaultState.posts, action ) => {
    let { type, payload } = action
    switch (type) {
        case "ADD_POSTS":
            return payload
        case "ADD_COMMENT": 
            let newState = [...currentState]
            let newPost = newState.find( view => view.post && view.post.id === payload.post_id ).post
            newPost.comments = [payload, ...newPost.comments]
            return newState
        case "SHOW_AD":
            let updatedView = [...currentState].find( view => view.id === payload )
            updatedView.locked = "ad"
            return currentState.map( view => view.id === payload ? updatedView : view )
        case "UNLOCK_VIEW":
            let newViewId = payload.id
            return currentState.map(view=>view.id === newViewId ? payload : view)
        case "SHOW_POST":
            let updatedView2 = [...currentState].find( view => view.id === payload )
            updatedView2.locked = "unlocked"
            return currentState.map( view => view.id === payload ? updatedView2 : view )
        default:
            return currentState
    }
}

const profilePostsReducer = ( currentState = defaultState.profilePosts, action) => {
    let { type, payload } = action
    switch (type) {
        case "ADD_USER_POSTS":
            return action.payload
        case "SHOW_PROFILE_AD":
            let updatedView = [...currentState].find( view => view.id === payload )
            updatedView.locked = "ad"
            return currentState.map( view => view.id === payload ? updatedView : view )
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

const usersReducer = (currentState = defaultState.users, action) => {
    let { type, payload } = action
    switch (type) {
        case "ADD_USERS":
            return payload
        default:
            return currentState
    }
}




const appReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
    profilePosts: profilePostsReducer,
    users: usersReducer
})

export const rootReducer = (state, action) => {
    if (action.type === "RESET_APP") {
        return defaultState
    }
    return appReducer(state, action)
}