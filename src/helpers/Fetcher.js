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

export const fetcher = async (url, params = {}) => {
    const method = params.method ? params.method : "GET"
    const body = params.body ? JSON.stringify(params.body) : null
    const res = await fetch(url, { method: method, headers: headers(), body: body })
    const data = await res.json()
    return data
}