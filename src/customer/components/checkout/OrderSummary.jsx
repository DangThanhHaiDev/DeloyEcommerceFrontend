import { Button } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation, useNavigate } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const order = useSelector(store => store.order)
  const checkout = useSelector(store => store.payment)  
  useEffect(() => {
    
    const searchParams = new URLSearchParams(location.search)
    dispatch(getOrderById(searchParams.get("order_id")))
  }, [])

  useEffect(()=>{
    if(checkout?.data?.data?.paymentUrl){
      console.log(checkout.data.data.paymentUrl);
      
        window.location.href = checkout.data.data.paymentUrl
    }
  }, [checkout])
  
  
  
  const handleCheckout = ()=>{
    dispatch(createPayment({amount: order.order.discountedPrice, bankCode: "ACB"}))    
  }  
  


  return (
    <div className="xl:p-5 xl:px-20">
      <div className=" rounded-s-md shadow-lg border">
        <AddressCard address={order.order?.shppingAddress} />
      </div>
      <div className="xl:grid grid-cols-3 mt-5">
        <div className="xl:col-span-2 space-y-3 col-span-3">
          {
            order.order ?
              order.order.orderItems.map(item => (
                <CartItem key={item.id} product={item} />
              ))
              : ""
          }
        </div>
        <div className="xl:pl-10">
          <div className="border space-y-3 text-sm font-semibold p-5 rounded-md shadow-lg max-xl:w-full xl:sticky xl:top-5 max-xl:mt-5 max-xl:fixed max-xl:bottom-0 z-50 bg-white">
            <h1 className="uppercase text-left opacity-80">price details</h1>
            <hr />
            <div className="flex justify-between opacity-80">
              <p>Price</p>
              <p className="text-red-700">{order.order ? Number(order.order.totalPrice).toLocaleString("vi-VN") : ''}</p>
            </div>
            <div className="flex justify-between opacity-80">
              <p>Discount</p>
              <p className="text-red-700 opacity-80">{order.order ? Number(order.order.discounted).toLocaleString("vi-VN") : ""}</p>
            </div>
            <div className="flex justify-between opacity-80">
              <p>Delivery Charge</p>
              <p className="text-red-700">Free</p>
            </div>
            <hr />
            <div className="flex justify-between opacity-100 font-bold">
              <p>Total Amount</p>
              <p className="text-red-900">{order.order ? (Number(order.order.totalPrice) - Number(order.order.discounted)).toLocaleString("vi-VN") : ""}</p>
            </div>
            <br />
            <div>
              <Button onClick={handleCheckout}
                variant="contained"
                className="w-full"
                sx={{ bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
