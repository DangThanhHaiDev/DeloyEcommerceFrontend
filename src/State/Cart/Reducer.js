import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_FAILURE, REMOVE_CART_REQUEST, REMOVE_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState = {
    cart: null,
    cartItems: [],
    isLoading: false,
    error: null
}

export const cartProducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST:
        case GET_CART_REQUEST:
        case REMOVE_CART_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return { ...state, isLoading: true, error: null }
        case ADD_ITEM_TO_CART_SUCCESS:
            return { ...state, isLoading: false, cartItems: action.payload}
        case ADD_ITEM_TO_CART_FAILURE:
        case GET_CART_FAILURE:
        case REMOVE_CART_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return { ...state, error: action.payload, isLoading: false }
        case GET_CART_SUCCESS:
            return { ...state, cart: action.payload }
        case REMOVE_CART_SUCCESS:
            
            return {
                ...state,
                cartItems: action.payload,
                isLoading: false
            }
        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state, cartItems: action.payload,
                isLoading: false
            }
        default: return state;
    }
}