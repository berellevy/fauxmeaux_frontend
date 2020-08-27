import { authToken } from "../auth/Auth"

const base_url = "http://localhost:4000/api/v1"
const posts_url = base_url + "/posts"
const login_url = base_url + "/login"

const headers = () => {
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



export const login = (user) => {
    return (dispatch) => {
        fetch(login_url, {
            method: 'POST',
            headers: headers(),
            body: JSON.stringify(user)
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