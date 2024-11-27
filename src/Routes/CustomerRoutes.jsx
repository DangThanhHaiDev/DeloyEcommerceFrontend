import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage";
import Navigation from "../customer/components/navigation/Navigation";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/footer/Footer";
import Product from '../customer/components/product/Product.jsx'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails.jsx'
import Checkout from '../customer/components/checkout/Checkout.jsx'
import Order from '../customer/components/Order/Order.jsx'
import OrderDetails from '../customer/components/Order/OrderDetails.jsx'
import OrderSummary from "../customer/components/checkout/OrderSummary.jsx";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="mt-10">
        <Routes>
          <Route path="/login" element={<HomePage />}></Route>
          <Route path="/register" element={<HomePage/>}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/:laveOne/:laveTwo/:laveThree" element={<Product />}></Route>
          <Route path="/product/:productId" element={<ProductDetails />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path='/account/order' element={<Order />}></Route>
          <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default CustomerRoutes;
