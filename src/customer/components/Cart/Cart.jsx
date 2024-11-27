import { Button } from "@mui/material";
import CartItem from "./CartItem.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserCart } from "../../../State/Cart/Action.js";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(store => store.cart.cart)
  const item = useSelector(store => store.cart.cartItems)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserCart())    
  }, [item, dispatch])

  
  const handleCheckoutClick = () => {
    navigate('/checkout?step=2')
  }
  
  return (
    <div className="xl:grid grid-cols-3">
      <div className="xl:col-span-2 space-y-3 xl:pr-10 xl:pl-24 col-span-3">
        {
          cart?.cartItems ?
            cart.cartItems.map((c) => (<CartItem product={c} key={c.product.id} />))
            : ''
        }

      </div>
      <div className="xl:pr-44">
        <div className="border space-y-3 text-sm font-semibold p-5 rounded-md shadow-lg max-xl:w-full xl:sticky xl:top-5 max-xl:mt-5 max-xl:fixed max-xl:bottom-0 z-50 bg-white">
          <h1 className="uppercase text-left opacity-80">price details</h1>
          <hr />
          <div className="flex justify-between opacity-80">
            <p>Price</p>
            <p className="text-red-700">{cart?.totalPrice.toLocaleString("vi-VN")}</p>
          </div>
          <div className="flex justify-between opacity-80">
            <p>Discount</p>
            <p className="text-red-700 opacity-80">{cart?.totalDiscountedPrice.toLocaleString("vi-VN")}</p>
          </div>
          <div className="flex justify-between opacity-80">
            <p>Delivery Charge</p>
            <p className="text-red-700">Free</p>
          </div>
          <hr />
          <div className="flex justify-between opacity-100 font-bold">
            <p>Total Amount</p>
            <p className="text-red-900">
              {(cart)?(Number(cart.totalPrice)- Number(cart.totalDiscountedPrice)).toLocaleString("vi-VN"): ''}
            </p>
          </div>
          <br />
          <div>
            <Button onClick={handleCheckoutClick} variant="contained" className="w-full" sx={{ bgcolor: "#9155fd" }}>Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
