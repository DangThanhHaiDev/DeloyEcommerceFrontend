import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { API_BASE_URL } from "../../config/apiConfig"
import { PermPhoneMsg } from "@mui/icons-material"

const register_request = ()=> ({type: REGISTER_REQUEST})
const register_success = (user)=> ({type: REGISTER_SUCCESS, payload: user})
const register_failure = (err)=> ({type:REGISTER_FAILURE, payload: err})
const getUser_request = ()=> ({type: GET_USER_REQUEST})
const getUser_success = (user)=> ({type: GET_USER_SUCCESS, payload: user})
const getUser_failure = (err)=>({typr: GET_USER_FAILURE, payload: err})
const login_request = ()=>({type: LOGIN_REQUEST})
const login_success = (user)=>({type: LOGIN_SUCCESS, payload: user})
const login_failure = (err)=>({type: LOGIN_FAILURE, payload: err})
const logout = ()=> ({type:LOGOUT})

export const register = (useData) => async(dispatch)=>{
    dispatch(register_request())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, useData)
        const user = response.data
        if(user.token){
            localStorage.setItem("token", user.token)
        }
        dispatch(register_success(user))
    } catch (error) {
        dispatch(register_failure(error))
    }
}

export const getUserByToken = (token)=> async(dispatch)=>{
    dispatch(getUser_request())
    try {        
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const user = response.data     
           
        dispatch(getUser_success(user))
        
    } catch (error) {        
        dispatch(getUser_failure(error))
    }
}

export const login = (useData)=> async(dispatch)=>{
    dispatch(login_request())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, useData)
        const user = response.data
        console.log(`${API_BASE_URL}/auth/signin`);
        
        if(user.token){
            localStorage.setItem("token", user.token)
            
        }
        dispatch(login_success(user))
        
    } catch (error) {        
        dispatch(login_failure(error))
    }
}

export const logout_user = ()=> async(dispatch)=>{
    localStorage.removeItem("token")
    dispatch(logout())
}