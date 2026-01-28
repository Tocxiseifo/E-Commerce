// ====================Routes===================
import { Routes, Route } from "react-router-dom";

// ====================Components===================
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import  LogIn from "../pages/Login Page/LogIn";
import ProductDetails from "../pages/Product Details Page/ProductDetails";
import CartPage from "../pages/Cart Page/CartPage";
import OrderSuccess from "../pages/Order Success Page/OrderSuccess";

export default function AppRoutes() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="product/:productId" element={<ProductDetails />} />
                <Route path="Login" element={<LogIn />} />
                <Route path="Cart" element={<CartPage />} />
                <Route path="OrderSuccess" element={<OrderSuccess />} />
            </Routes>
        </>
    )
}