import { combineReducers } from 'redux'
import { RESET_APP } from "./constants"
import { userReducer } from './userReducer'
import { usersReducer } from './usersReducer'
import { viewsReducer } from './viewsReducer'

const defaultState = {
    posts: [],
    user: {
        loggedIn: false
    },
    users: [] 
}

const appReducer = combineReducers({
    posts: viewsReducer,
    user: userReducer,
    users: usersReducer
})

export const rootReducer = (state, action) => {
    if (action.type === RESET_APP) {
        return defaultState
    }
    return appReducer(state, action)
}