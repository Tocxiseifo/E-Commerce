//==================Hooks=================
import useShop from "../../hooks/useShop";

//==================Router=================
import { Link } from "react-router-dom";


export default function CartProductCalculation() {
    //=====================Hook==================
    const {Carts , cart } = useShop() //custom hook contain the context data
    console.log(Carts);
    return(
        <>
            <section className="w-120 h-120 xl:ml-65 bg-white rounded-md shadow-md p-6 sticky top-32">
                <div className="flex flex-col justify-between w-full h-full">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-bold text-text-color mb-4">Order Summary</h2>
                        <div className="flex flex-row justify-between mb-2">
                            <span className="text-text-color">Subtotal</span>
                            <span className="text-text-color">${cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2)}</span>
                        </div>
                        <div className="flex flex-row justify-between mb-2">
                            <span className="text-text-color">Shipping</span>
                            <span className="text-text-color">$0.00</span>
                        </div>
                        <div className="flex flex-row justify-between mb-4">
                            <span className="text-text-color font-bold">Total</span>
                            <span className="text-text-color font-bold">${cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2)}</span>
                        </div>
                    </div>
                    <Link to={Carts.length === 0 ? "/Cart" : "/OrderSuccess"} className={Carts.length === 0 ? "w-full flex justify-center items-center bg-gray-300 text-white py-2 rounded-md hover:bg-gray-300 transition duration-300 cursor-no-drop" :"w-full flex justify-center items-center bg-main text-white py-2 rounded-md hover:bg-yellow-400 transition duration-300 cursor-pointer"}>
                        Proceed to Checkout
                    </Link>
                </div>
            </section>
        </>
    )
}