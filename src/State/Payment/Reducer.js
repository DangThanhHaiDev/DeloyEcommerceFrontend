import { PAYMENT_FAILURE, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "./ActionType"

const initialState = {
    isLoading: false,
    data: null,
    error: null
}

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAYMENT_REQUEST:
            return { ...state, isLoading: true, error: null }
        case PAYMENT_SUCCESS:
            
            return { ...state, isLoading: false, data: action.payload }
        case PAYMENT_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
        default: return state;
    }
}
