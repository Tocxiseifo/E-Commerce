//===============Hooks=================
import { useEffect} from "react";
import useShop from "../../hooks/useShop"

//===============Components=================
import CartProductCalculation from "./CartProductCalculation";

//=====================Motion=====================
import { motion } from "framer-motion";

export default function CartPage() {
    //=====================Hook==================
    const {cart ,  setCart} = useShop() //custom hook contain the context data
    const Carts = cart.map((item) => ({...item , quantity:item.quantity || 1}));
    
    console.log(Carts);
    //=====================Handlers==================
    function handleDeleteClick(Id:number | string){
        //delete item from cart
        setCart(prev => prev.filter(item => item.id !== Id));
    }

    function handleIncreaseClick (Id :number | string ) {
       setCart(prev => prev.map(item => 
        item.id === Id ? {...item , quantity:item.quantity + 1} : item
       )) // Increase quantity by 1
    }

    function handleDecreaseClick (Id :number | string) {
        setCart(p => p.map(item => 
            item.id === Id ? {...item , quantity: item.quantity > 1 ? item.quantity - 1 : 1} : item
        )) // Ensure quantity doesn't go below 1
    }
    

    //=====================Storage==================
    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(Carts));
    }, [Carts]);
    
    //=====================Ensure Quantity Property==================
    useEffect(() => {
        //we write this useEffect to ensure that each item in the cart has a quantity property
        setCart(prev => prev.map(item => ({ ...item, quantity: item.quantity ?? 1 }))); // Just once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Just once on initial mount    
    return(
        <>
            <section className="flex flex-col h-full w-full  bg-background pt-10">
                <div className="flex flex-row w-full h-screen ">
                    <div className="flex-col w-1/2 h-full mb-10 p-10">
                        <div className="flex flex-col h-full w-full  items-center">
                            {Carts.map((item) => (
                                <div key={item.id} className="flex flex-row gap-4   border-b pb-4 mb-14 w-full">
                                    <div className="flex justify-center items-center bg-white w-45 h-45 rounded-md shadow-md">
                                        <img src={item.image} alt={item.title} className="w-33 h-33 object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-2xl font-bold text-text-color">{item.title}</h2>
                                        <p className="text-subtitles text-lg ">${item.price}</p>
                                        <div className="text-text-color mb-2">
                                            Quantity:
                                            <button className="ml-2 w-16 border border-gray-300 rounded-md p-1 hover:bg-gray-200 duration-500 transition hover:duration-500 cursor-pointer" disabled={item.quantity <= 1} onClick={() => handleDecreaseClick(item.id)}>    
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity === 0 ? 1 : item.quantity}</span>  
                                            <button
                                                id="quantity"
                                                name="quantity"
                                                onClick={() => handleIncreaseClick(item.id)}
                                                className="ml-2 w-16 border border-gray-300 rounded-md p-1 hover:bg-gray-200 duration-500 transition hover:duration-500 cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div >
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer" onClick={() => handleDeleteClick(item.id)}>Remove</button>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8">
                        <CartProductCalculation />
                    </div>
                </div>
            </section>
        </>
    )
}