import { fetcher } from "../helpers/Fetcher"
import {
    base_url, 
    feed_url, 
    user_posts_url, 
    backload_post_url 
} from "../helpers/urls"

import {
    addComment, 
    addPosts, 
    addUsers, 
    loginFailure, 
    loginSuccess, 
    registerSuccess, 
    signupFailure, 
    signupSuccess, 
    addPostToView
} from "./actions"

export const fetchPosts = (page_num = 0) => {
    return async(dispatch) => {
        const data = await fetcher(feed_url(page_num))
        dispatch(addPosts(page_num, data))
    }
}

export const fetchUserPosts = (username, page_num = 0) => {
    return async(dispatch) => {
        const data = await fetcher(user_posts_url(username, page_num))
        dispatch(addPosts(page_num, data))
    }
}

export const login = (credentials) => {
    return async(dispatch) => {
        const data = await fetcher(base_url('login'), { method: "POST", body: credentials })
        if (data.ok) {
            localStorage.setItem("token", data.jwt)
            dispatch(loginSuccess(data.user))
        } else {
            dispatch(loginFailure())
        }
    }
}

export const signup = (credentials) => {
    return async(dispatch) => {
        const data = await fetcher(base_url('users'), { method: "POST", body: credentials })
        if (data.ok) {
            localStorage.setItem("token", data.jwt)
            dispatch(signupSuccess(data.user))
        } else {
            dispatch(signupFailure(data.errors))
        }
    }
}

export const register = () => {
    return async(dispatch) => {
        const data = await fetcher(base_url('profile'))
        if (data.user) {
            dispatch(registerSuccess(data.user))
        }
    }
}

export const submitPost = (post) => {
    return async(dispatch) => {
        fetcher(base_url('posts'), { method: "POST", body: post })
    }
}

export const submitComment = (comment) => {
    return async(dispatch) => {
        const data = await fetcher(base_url('comments'), { method: "POST", body: comment })
        dispatch(addComment(data))
    }
}

export const submitSearch = (query) => {
    return async(dispatch) => {
        const data = await fetcher(base_url('search'), { method: "POST", body: query })
        dispatch(addUsers(data))
    }
}

export const getFollows = (username_and_type) => {
    return async(dispatch) => {
        const data = await fetcher(base_url(username_and_type))
        dispatch(addUsers(data))
    }
}

export const getSinglePost = (view_id) => {
    return async(dispatch) => {
        const data = await fetcher(backload_post_url(view_id))
        dispatch(addPostToView(data))
    }
}