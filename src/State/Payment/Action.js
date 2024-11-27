import { type } from "@testing-library/user-event/dist/type"
import { PAYMENT_FAILURE, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "./ActionType"
import { api } from "../../config/apiConfig"

const paymentRequest = ()=>({type: PAYMENT_REQUEST})
const paymentSuccess = (data)=>({type: PAYMENT_SUCCESS, payload: data})
const paymentFailure = (err)=>({type:PAYMENT_FAILURE, payload: err})


export const createPayment = (reqData)=> async(dispatch)=>{
    dispatch(paymentRequest())
    try {
        const response = await api.get(`/api/vn-pay?amount=${reqData.amount}&bankCode=${reqData.bankCode}`)
        const {data} = response        
        dispatch(paymentSuccess(data))        
    } catch (error) {
        dispatch(paymentFailure(error.message))
    }
}