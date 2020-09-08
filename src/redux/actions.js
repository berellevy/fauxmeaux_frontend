import { fetcher } from "../helpers/Fetcher"

export const base_url = "http://localhost:4000/api/v1"
export const posts_url = base_url + "/posts"
const feed_url = base_url + "/feed"
const login_url = base_url + "/login"
export const users_url = base_url + "/users"
const profile_url = base_url + "/profile"
const comments_url = base_url + "/comments"
const user_posts_url = (username, page_num) => base_url + "/" + username + "/posts/" + page_num
export const views_url = base_url + "/views"
const search_url = base_url + "/search"


export const fetchPosts = () => {
    return (dispatch) => {
        fetcher(feed_url + "/0")
        .then(data=>{
            dispatch({type: "ADD_POSTS", payload: data})
        })
    }
}

export const fetchPostsPage = (page_num) => {
    return (dispatch) => {
        fetcher(feed_url + "/" + page_num)
        .then(data=>{dispatch({type: "ADD_ADDITIONAL_POSTS", payload: data})})
    }
}

export const fetchUserPosts = (username) => {
    return (dispatch) => {
        fetcher(user_posts_url(username, 0))
        .then(data=>{dispatch({type: "ADD_POSTS", payload: data})})
    }
}

export const fetchUserPostsPage = (username, page_num) => {
    return (dispatch) => {
        fetcher(user_posts_url(username, page_num))
        .then(data=>{
            dispatch({type: "ADD_ADDITIONAL_POSTS", payload: data})
        })
    }
}


export const login = (credentials) => {
    return (dispatch) => {
        fetcher(login_url, {method: "POST", body: credentials})
        .then(data => {
            if (data.ok) {
                localStorage.setItem("token", data.jwt)
                dispatch({type: "LOGIN_SUCCESS", payload: data.user})
            } else {
                dispatch({type: "LOGIN_FAILURE"})
            }
        })
    }
}

export const signup = (credentials) => {
    return (dispatch) => {
        fetcher(users_url, {method: "POST", body: credentials})
        .then(data=> {
            if (data.ok) {
                localStorage.setItem("token", data.jwt)
                dispatch({type: "SIGNUP_SUCCESS", payload: data.user})
            } else {
                dispatch({type: "SIGNUP_FAILURE", payload: data.errors})
            }
        })

    }
    
}

export const register = () => {
    return (dispatch) =>{
        fetcher(profile_url)
        .then(data=> {
            if (data.user) {
                dispatch({type: "REGISTER_SUCCESS", payload: data.user})
            }
        })
    }
} 

export const submitPost = (post) => {
    return (dispatch) => {
        fetcher(posts_url, {method: "POST", body: post})
    }
}

export const submitComment = (comment) => {
    return (dispatch) => {
        fetcher(comments_url, {method: "POST", body: comment})
        .then(data => {
            dispatch({type: "ADD_COMMENT", payload: data})
        })
    }
}

export const submitSearch = (query) => {
    return (dispatch) => {
        fetcher(search_url, {method: "POST", body: query})
        .then(data=>dispatch({type: "ADD_USERS", payload: data}))
    }
}

export const getFollows = (username_and_type) => {
    return (dispatch) => {
        fetcher(base_url + "/" + username_and_type)
        .then(data=>{dispatch({type: "ADD_USERS", payload: data})})
    }
}

export const unlockView = (view_id) => {
    return (dispatch) => {
        fetcher(views_url + "/" + view_id, {method: "PATCH", body: {locked: "ad"}})
        .then(data => {dispatch({type: "UNLOCK_VIEW", payload: data})})
    }
}

export const showPostBackend = (view_id) => {
    return (dispatch) => {
        fetcher(views_url + "/" + view_id, {method: "PATCH", body: {locked: "ad"}})
    }
}

export const logout = () => {
    return {type: "RESET_APP"}
} 