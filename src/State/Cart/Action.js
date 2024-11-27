import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_FAILURE, REMOVE_CART_REQUEST, REMOVE_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const addCartItemRequest = ()=>({type: ADD_ITEM_TO_CART_REQUEST})
const addCartItemSuccess = (data)=>({type: ADD_ITEM_TO_CART_SUCCESS, payload: data})
const addCartItemFailure = (err)=>({type: ADD_ITEM_TO_CART_FAILURE, payload: err})
const getCartRequest = ()=>({type:GET_CART_REQUEST})
const getCartSuccess = (cart)=>({type: GET_CART_SUCCESS, payload: cart})
const getCartFailure = (err)=>({type: GET_CART_FAILURE, payload:err})
const removeCartItemRequest = ()=>({type:REMOVE_CART_REQUEST})
const removeCartItemSuccess = (data)=>({type:REMOVE_CART_SUCCESS, payload: data})
const removeCartItemFailure = (err)=>({type: REMOVE_CART_FAILURE, payload:err})
const updateCartItemRequest = ()=>({type: UPDATE_CART_ITEM_REQUEST})
const updateCartItemSuccess = (data)=>({type:UPDATE_CART_ITEM_SUCCESS, payload: data})
const updateCartItemFailure = (err)=>({type:UPDATE_CART_ITEM_FAILURE, payload:err})

export const addCartItemToCart = (reqData) =>async(dispatch)=>{
    dispatch(addCartItemRequest())
    try {
        const response = await api.put(`/api/cart/add`, reqData)        
        const {data} = response
        dispatch(addCartItemSuccess(data))
    } catch (error) {
        dispatch(addCartItemFailure(error.message))
    }
}

export const getUserCart = () => async(dispatch)=>{
    dispatch(getCartRequest())
    try {
        const response = await api.get("api/cart/")
        const {data} = response        
        dispatch(getCartSuccess(data))
    } catch (error) {
        dispatch(getCartFailure(error.message))
    }
}

export const removeCartItem = (reqData)=>async(dispatch)=>{
    dispatch(removeCartItemRequest())
    try {
        const {data} = await api.delete(`/api/cart_item/${reqData.id}`)        
        dispatch(removeCartItemSuccess(data))
    } catch (error) {
        dispatch(removeCartItemFailure(error.message))
    }
}

export const UpdateCartItem = (reqData)=> async(dispatch)=>{
    
    dispatch(updateCartItemRequest())
    try {
        const  {data} = await api.put(`api/cart_item/${reqData.id}`, reqData)
        
        dispatch(updateCartItemSuccess(data))
    } catch (error) {
        dispatch(updateCartItemFailure(error.message))
    }
}