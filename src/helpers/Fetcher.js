import { authToken } from "../auth/Auth"
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

export const fetcher = (url, params={}) => {
    const method =  params.method ? params.method : "GET"
    const body = params.body ? JSON.stringify(params.body) : null 
    return fetch(url, {method: method, headers: headers(), body: body})
            .then(response=>response.json())
}