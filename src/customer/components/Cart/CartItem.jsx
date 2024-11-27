import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { getUserCart, removeCartItem, UpdateCartItem } from "../../../State/Cart/Action";
import { useEffect } from "react";

const CartItem = ({product}) => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    
  },[])

  const handleMinus = ()=>{
    
    dispatch(UpdateCartItem({...product, quantity: product.quantity-1}))
  }
  
  const handleAdd = ()=>{    
    dispatch(UpdateCartItem({...product, quantity: product.quantity+1}))
  }

  const handleDelItem = ()=>{
    dispatch(removeCartItem(product))
  }

  return (
    <div className=" shadow-lg rounded-md border-t-2 p-3">
      <div className="flex">
        <div className="w-[7rem] h-[7rem] lg:w-[7rem] lg:h-[7rem]">
          <img
            src={product?.product?.imageUrl}
            alt="Anh"
            className="w-full h-full object-left-top object-cover"
          />
        </div>
        <div className="text-left px-5 lg:py-2">
          <h1 className="text-md font-semibold">
            {product?.product?.title}
          </h1>
          <p className="opacity-60 text-sm">Size: {product?.size}</p>
          <p className="opacity-60 text-sm">Seller: Dang Thanh Hai</p>
          <div className="flex space-x-3 mt-2 text-sm">
            <p className="font-semibold">{product?.price.toLocaleString("vi-VN")}đ</p>
            <p className="line-through opacity-80">{product?.discountedPrice}</p>
            <p className="text-red-600 font-semibold">83% off</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-10 mt-0 text-sm">
        <div className="flex items-center space-x-1 mt-1">
          <IconButton onClick={handleMinus} disabled={product.quantity<=1}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="px-5 border py-1">{product.quantity}</span>
          <IconButton sx={{color: "RGB(145 85 253)"}} onClick={handleAdd} disabled={product.quantity >= product.product.size.quantity}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
            <Button onClick={handleDelItem} sx={{color: "RGB(145 85 253)", fontSize: "0.8rem"}}>REMOVE</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
