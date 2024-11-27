import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType"

const initialState = {
    isLoading: false,
    error: null,
    product: null,
    products: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCT_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FIND_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
                product: null,
                isLoading: false
            }
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                products: null
            }
        case FIND_PRODUCT_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return {
                ...state,
                isLoading: false,
                product: null,
                products: null,
                error: action.payload
            }
        default: return state;
    }
}