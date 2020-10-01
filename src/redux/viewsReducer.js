import { ADD_ADDITIONAL_VIEWS, ADD_COMMENT, ADD_POST_TO_VIEW, ADD_VIEWS, SHOW_POST } from "./constants"

const addComment = (currentState, payload) => {
    return currentState.map((view) => {
        if (view.post && view.post.id === payload.post_id) {view.post.comments.unshift(payload)}
        return view
    })
}

const showPost = (currentState, payload) => {
    return currentState.map( view => {
        if (view.id === payload) {view.ad_view = false;}
        return view
    })
}

const addPostToView = (currentState, payload) => {
    return currentState.map( (view) => {
        if (view.id === payload.id) {Object.assign(view, payload)}
        return view
    })
}

export const viewsReducer = ( currentState = [], action ) => {
    let { type, payload } = action
    switch (type) {
        case ADD_VIEWS:
            return payload
        case ADD_ADDITIONAL_VIEWS:
            return [...currentState, ...payload]
        case ADD_COMMENT: 
            return addComment(currentState, payload)
        case SHOW_POST:
            return showPost(currentState, payload)
        case ADD_POST_TO_VIEW:
            return addPostToView(currentState, payload)
        default:
            return currentState
    }
}