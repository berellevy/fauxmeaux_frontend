import {
    ADD_ADDITIONAL_VIEWS,
    ADD_COMMENT, 
    ADD_POST_TO_VIEW, 
    ADD_USERS, 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS, 
    REGISTER_SUCCESS, 
    RESET_APP, 
    SHOW_POST, 
    SIGNUP_FAILURE, 
    SIGNUP_SUCCESS, 
    UNLOCK_VIEW, ADD_VIEWS
} from "./constants"

// VIEWS
export const unlockView = (payload) => ({ type: UNLOCK_VIEW, payload })
export const addPosts = (page_num, payload) => {
    const type = !page_num ? ADD_VIEWS : ADD_ADDITIONAL_VIEWS
    return{ type, payload }
}
export const addPostToView = (payload) => ({ type: ADD_POST_TO_VIEW, payload })
export const showPostFrontend = (payload) => ({ type: SHOW_POST, payload})

// COMMENTS
export const addComment = (payload) => ({ type: ADD_COMMENT, payload })

// USERS
export const addUsers = (payload) => ({ type: ADD_USERS, payload })

// AUTH
export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload })
export const loginFailure = () => ({ type: LOGIN_FAILURE})
export const signupSuccess = (payload) => ({ type: SIGNUP_SUCCESS, payload })
export const signupFailure = (payload) => ({ type: SIGNUP_FAILURE, payload })
export const registerSuccess = (payload) => ({ type: REGISTER_SUCCESS, payload })
export const logout = () => ({ type: RESET_APP })