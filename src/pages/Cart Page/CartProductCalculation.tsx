//==================Hooks=================
import useShop from "../../hooks/useShop";


export default function CartProductCalculation() {
    //=====================Hook==================
    const {cart} = useShop() //custom hook contain the context data
    return(
        <>
            <section className="w-120 h-120 xl:ml-65 bg-white rounded-md shadow-md p-6">
                <div className="flex flex-col justify-between w-full h-full">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-bold text-text-color mb-4">Order Summary</h2>
                        <div className="flex flex-row justify-between mb-2">
                            <span className="text-text-color">Subtotal</span>
                            <span className="text-text-color">${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                        </div>
                        <div className="flex flex-row justify-between mb-2">
                            <span className="text-text-color">Shipping</span>
                            <span className="text-text-color">$0.00</span>
                        </div>
                        <div className="flex flex-row justify-between mb-4">
                            <span className="text-text-color font-bold">Total</span>
                            <span className="text-text-color font-bold">${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                        </div>
                    </div>
                    <button className="w-full bg-main text-white py-2 rounded-md hover:bg-yellow-400 transition duration-300 cursor-pointer">
                        Proceed to Checkout
                    </button>
                </div>
            </section>
        </>
    )
}