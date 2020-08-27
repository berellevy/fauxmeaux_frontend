const base_url = "http://localhost:4000/api/v1"
const posts_url = base_url + "/posts"
const login_url = base_url + "/login"


export const fetchPosts = () => {
    return (dispatch) => {
        fetch(posts_url)
        .then(response=>response.json())
        .then(data=>dispatch({type: "ADD_POSTS", payload: data}))
    }
}



export const login = (user) => {
    return (dispatch) => {
        fetch(login_url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "response": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response=>response.json())
        .then(data => {
            if (data.ok) {
                localStorage.setItem("token", data.jwt)
                dispatch({type: "LOGIN", payload: data.user})
            }
        })
    }
}