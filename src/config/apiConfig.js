import axios from "axios"

export const API_BASE_URL = "http://localhost:2207"

const token = localStorage.getItem("token")

export const api = axios.create(
    {
        baseURL: API_BASE_URL,
        headers:{
            "Authorization": `Bearer ${token}`,
            "content-type":"application/json"
        }
    }
)