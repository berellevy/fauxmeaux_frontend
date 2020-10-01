import { ADD_USERS } from "./constants"

export const usersReducer = (currentState = [], action) => {
    let { type, payload } = action
    switch (type) {
        case ADD_USERS:
            return payload
        default:
            return currentState
    }
}