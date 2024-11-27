import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";

const createOrderRequest = ()=>({type: CREATE_ORDER_REQUEST})
const createOrderSuccess = (order)=>({type: CREATE_ORDER_SUCCESS, payload: order})
const createOrderFailure = (err)=>({type: CREATE_ORDER_FAILURE, payload: err})
const getOrderRequest = ()=>({type: GET_ORDER_REQUEST})
const getOrderSuccess = (order)=>({type: GET_ORDER_SUCCESS, payload: order})
const getOrderFailure = (err)=>({type: GET_ORDER_FAILURE, payload: err})


export const createOrder = (reqData)=>async(dispatch)=>{
    dispatch(createOrderRequest())
    try {
        const {data} = await api.post(`api/orders/`, reqData.address)
        
        dispatch(createOrderSuccess(data))

        if(data.id){            
            reqData.navigate({search: `step=3&order_id=${data.id}`})
        }
    } catch (error) {
        dispatch(createOrderFailure(error.message))
    }
}

export const getOrderById = (orderId)=>async(dispatch)=>{
    dispatch(getOrderRequest())
    try {
        
        const {data} = await api.get(`api/orders/${orderId}`)        
        dispatch(getOrderSuccess(data))     
    } catch (error) {
        dispatch(getOrderFailure(error.message))
    }
}