import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "./ActionType"

const initialState = {
    order: null,
    isLoading: false,
    error: null
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
        case GET_ORDER_REQUEST:
            return { ...state, isLoading: true, error: null }
        case CREATE_ORDER_SUCCESS:
        case GET_ORDER_SUCCESS:
            return { ...state, order: action.payload }
        case CREATE_ORDER_FAILURE:
        case GET_ORDER_FAILURE:
            return { ...state, order: null, error: action.payload }

        default: return state
    }
}