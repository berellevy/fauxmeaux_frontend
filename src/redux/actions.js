import { fetcher } from "../helpers/Fetcher"
import { base_url, feed_url, user_posts_url, views_url, backload_post_url } from "../helpers/urls"

// export const base_url = (post_fix = '') =>  `http://localhost:4000/api/v1/${post_fix}`
// export const posts_url = (id = '' ) => base_url(`posts/${id}`)
// const feed_url = (page_num = 0) => base_url(`feed/${page_num}`)
// export const users_url = (id = '') => base_url(`users/${id}`)
// const user_posts_url = (username, page_num = 0) => base_url(`${username}/posts/${page_num}`)
// const backload_post_url = (view_id) => base_url(`backload_post/${view_id}`)
// export const views_url = (view_id = '') => base_url(`views/${view_id}`)


export const fetchPosts = (page_num = 0) => {
    return async(dispatch) => {
        const data = await fetcher(feed_url(page_num))
        const type = !page_num ? 'ADD_POSTS' : 'ADD_ADDITIONAL_POSTS'
        dispatch({ type: type, payload: data })
    }
}

export const fetchUserPosts = (username, page_num = 0) => {
    return async(dispatch) => {
        const data = await fetcher(user_posts_url(username, page_num))
        const type = !page_num ? 'ADD_POSTS' : 'ADD_ADDITIONAL_POSTS'
        dispatch({ type: type, payload: data })
    }
}

export const login = (credentials) => {
    return async(dispatch) => {
        const data = await fetcher(base_url('login'), { method: "POST", body: credentials })
        if (data.ok) {
            localStorage.setItem("token", data.jwt)
            dispatch({ type: "LOGIN_SUCCESS", payload: data.user })
        } else {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }
}

export const signup = (credentials) => {
    return async(dispatch) => {
        const data = await fetcher(base_url('users'), { method: "POST", body: credentials })
        if (data.ok) {
            localStorage.setItem("token", data.jwt)
            dispatch({ type: "SIGNUP_SUCCESS", payload: data.user })
        } else {
            dispatch({ type: "SIGNUP_FAILURE", payload: data.errors })
        }
    }
}

export const register = () => {
    return async(dispatch) => {
        const data = await fetcher(base_url('profile'))
        if (data.user) {
            dispatch({ type: "REGISTER_SUCCESS", payload: data.user })
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
        dispatch({ type: "ADD_COMMENT", payload: data })
    }
}

export const submitSearch = (query) => {
    return async(dispatch) => {
        const data = await fetcher(base_url('search'), { method: "POST", body: query })
        dispatch({ type: "ADD_USERS", payload: data })
    }
}

export const getFollows = (username_and_type) => {
    return async(dispatch) => {
        const data = await fetcher(base_url(username_and_type))
        dispatch({ type: "ADD_USERS", payload: data })
    }
}

export const unlockView = (view_id) => {
    return async(dispatch) => {
        const data = await fetcher(views_url(view_id), { method: "PATCH", body: { locked: "ad" } })
        dispatch({ type: "UNLOCK_VIEW", payload: data })
    }
}

export const showPostFrontend = (view_id) => ({ type: "SHOW_POST", payload: view_id })

export const showPostBackend = (view_id) => {
    return async(dispatch) => {
        await fetcher(views_url(view_id), { method: "PATCH", body: { locked: "ad" } })
    }
}

const addPostToView = (post_view) => {
    return { type: "ADD_POST_TO_VIEW", payload: post_view }
}

export const getSinglePost = (view_id) => {
    return async(dispatch) => {
        const data = await fetcher(backload_post_url(view_id))
        dispatch(addPostToView(data))
    }
}

export const logout = () => {
    return { type: "RESET_APP" }
}