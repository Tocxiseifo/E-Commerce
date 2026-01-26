// ====================Routes===================
import { Routes, Route } from "react-router-dom";

// ====================Components===================
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import ProductSection from "../components/Products Section/ProductSection";
import  LogIn from "../pages/Login Page/LogIn";

export default function AppRoutes() {


    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="product/:productId" element={<ProductSection />} />
                <Route path="Login" element={<LogIn />} />
            </Routes>
        </>
    )
}