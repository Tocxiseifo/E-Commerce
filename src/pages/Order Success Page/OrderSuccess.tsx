//==================Material UI=================
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

//==================Router=================
import { Link } from 'react-router-dom';
import useShop from '../../hooks/useShop';

export default function OrderSuccess() {
    //=====================Hooks==================
    const {setCart} = useShop() //custom hook contain the context data
    
    //=====================Handlers==================
    function clearCart() {
        setCart([]); // Clear the cart
        localStorage.removeItem("cart"); // Remove cart from local storage
    }

    return(
        <>
            <section className="flex flex-col justify-center items-center h-screen w-full">
                <div className="h-120 w-160 flex items-center text-center flex-col justify-center bg-white">
                    <CheckCircleOutlineIcon style={{ fontSize: 80, color: 'green' }} />
                    <h1 className="text-4xl font-bold text-text-color mb-6">Thank You for Your Order!</h1>
                    <p className="text-lg text-subtitles mb-4">Your order has been successfully placed.</p>
                    <p className="text-lg text-subtitles">You will receive a confirmation email shortly.</p>
                    <Link to="/" onClick={clearCart} className="mt-8 px-6 py-3 bg-main text-white rounded-md hover:bg-yellow-400 transition duration-300 cursor-pointer">
                        Continue Shopping
                    </Link>
                </div>
            </section>
        </>
    )
}