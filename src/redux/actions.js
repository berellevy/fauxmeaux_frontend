const base_url = "http://localhost:4000/api/v1"
const posts_url = base_url + "/posts"


export const fetchPosts = () => {
    return (dispatch) => {
        fetch(posts_url)
        .then(response=>response.json())
        .then(data=>dispatch({type: "ADD_POSTS", payload: data}))
    }
}