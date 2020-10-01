// VIEWS
const UNLOCK_VIEW = 'UNLOCK_VIEW'
const ADD_POST_TO_VIEW = 'ADD_POST_TO_VIEW'
const SHOW_POST = 'SHOW_POST'
export const unlockView = (payload) => ({ type: UNLOCK_VIEW, payload })
export const addPosts = (type, payload) => ({ type, payload })
export const addPostToView = (payload) => ({ type: ADD_POST_TO_VIEW, payload })
export const showPostFrontend = (payload) => ({ type: SHOW_POST, payload})

// COMMENTS
const ADD_COMMENT = 'ADD_COMMENT'
export const addComment = (payload) => ({ type: ADD_COMMENT, payload })

// USERS
const ADD_USERS = 'ADD_USERS'
export const addUsers = (payload) => ({ type: ADD_USERS, payload })

// AUTH
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const RESET_APP = 'RESET_APP'
export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload })
export const loginFailure = () => ({ type: LOGIN_FAILURE})
export const signupSuccess = (payload) => ({ type: SIGNUP_SUCCESS, payload })
export const signupFailure = (payload) => ({ type: SIGNUP_FAILURE, payload })
export const registerSuccess = (payload) => ({ type: REGISTER_SUCCESS, payload })
export const logout = () => ({ type: RESET_APP })