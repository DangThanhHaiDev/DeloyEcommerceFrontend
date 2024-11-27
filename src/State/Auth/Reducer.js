import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    error: null,
    isLoading: false,
    token: null
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case GET_USER_REQUEST:
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case REGISTER_SUCCESS:
        case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    token: action.payload
                }

        case REGISTER_FAILURE:
        case GET_USER_FAILURE:
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case LOGOUT:
            return{
                initialState
            } 
        default: return state
    }
}