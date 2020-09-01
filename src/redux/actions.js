import { authToken } from "../auth/Auth"
import { Redirect } from "react-router-dom"

export const base_url = "http://localhost:4000/api/v1"
export const posts_url = base_url + "/posts"
const login_url = base_url + "/login"
export const users_url = base_url + "/users"
const profile_url = base_url + "/profile"
const comments_url = base_url + "/comments"
const user_posts_url = (username) => base_url + "/" + username + "/posts" 

export const headers = () => {
    const headers = {
        "content-type": "application/json",
        "accept": "application/json"
    }
    if (authToken()) {
        headers.Authorization = `Bearer ${authToken()}`
    }
    return headers
}


export const fetchPosts = () => {
    return (dispatch) => {
        fetch(posts_url, {headers: headers()})
        .then(response=>response.json())
        .then(data=>{
            dispatch({type: "ADD_POSTS", payload: data})
        })
    }
}

export const fetchUserPosts = (username) => {
    return (dispatch) => {
        fetch(user_posts_url(username), {headers: headers()})
        .then(response=>response.json())
        .then(data=>{
            dispatch({type: "ADD_USER_POSTS", payload: data})
        })
    }
}


export const login = (credentials) => {
    return (dispatch) => {
        fetch(login_url, {
            method: 'POST',
            headers: headers(),
            body: JSON.stringify(credentials)
        })
        .then(response=>response.json())
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
        fetch(users_url, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify(credentials)
        })
        .then(response=>response.json())
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
        fetch(profile_url, {headers: headers()})
        .then(response=>response.json())
        .then(data=> {
            if (data.user) {
                dispatch({type: "REGISTER_SUCCESS", payload: data.user})
            }
        })
    }
} 

export const submitPost = (post) => {
    return (dispatch) => {
        fetch(posts_url, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify(post)
        })
        .then(response=>response.json())
        .then(post=> {
            let { id } = post
        })
    }
}

export const submitComment = (comment) => {
    return (dispatch) => {
        fetch(comments_url, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify(comment)
        })
        .then(response=>response.json())
        .then(data => {
            dispatch({type: "ADD_COMMENT", payload: data})
        })
    }
}

export const logout = () => {
    return {type: "RESET_APP"}
} 