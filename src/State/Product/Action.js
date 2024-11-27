import { api } from "../../config/apiConfig"
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType"

const findProductRequest = () => ({ type: FIND_PRODUCT_BY_ID_REQUEST })
const findProductSuccess = (product) => ({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: product })
const findProductFailure = (err) => ({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: err })

const findProudctsSuccess = (products)=>({type: FIND_PRODUCT_SUCCESS, payload: products})
const findProudctsFailure = (err)=>({type: FIND_PRODUCT_FAILURE, payload: err})
const findProudctsRequest = (products)=>({type: FIND_PRODUCT_REQUEST, payload: products})



export const findProducts = (reqData) => async (dispatch) => {
    dispatch(findProudctsRequest())
    const { color, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData
    try {

        const response = await api.get(`/api/products?pageNumber=${pageNumber-1}&pageSize=6&category=${category}&color=${color}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        const { data } = response
        dispatch(findProudctsSuccess(data))

    } catch (error) {
        dispatch(findProudctsFailure(error.message))
    }
}

export const findProduct = (reqData) => async (dispatch) => {
    
    dispatch(findProductRequest())
    const { productId } = reqData

    try {
        const response = await api.get(`/api/products/id/${productId}`)
        const product = response.data
                
        dispatch(findProductSuccess(product))
    } catch (error) {
        dispatch(findProductFailure(error.message))
    }
}