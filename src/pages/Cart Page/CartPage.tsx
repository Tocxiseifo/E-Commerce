//===============Hooks=================
import { useEffect, useState } from "react";
import useShop from "../../hooks/useShop"

export default function CartPage() {
    //=====================Hook==================
    const {cart , setCart} = useShop() //custom hook contain the context data
    const [quantity , setQuantity] = useState<number>(0);
    

    //=====================Handlers==================
    function handleDeleteClick(Id:number | string){
        //delete item from cart
        setCart(prev => prev.filter(item => item.id !== Id));
    }

    function handleAddClick (Id :number | string) {
        const Increase = cart.find(item => item.id === Id);
        console.log(Increase);
        
        if(Increase) {
            setQuantity(P => P + 1);
        }
    }

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart));
    })
    return(
        <>
            <section className="flex flex-col h-1000 w-full">
                <div className="flex flex-row w-full h-screen items-center">
                    <div className="flex-col w-1/2 h-full p-10">
                        <div className="flex flex-col h-full w-full items-center">
                            {cart.map((item) => (
                                <div key={item.id} className="flex flex-row gap-4   border-b pb-4 mb-14 w-full">
                                    <div className="flex justify-center items-center bg-white w-45 h-45 rounded-md shadow-md">
                                        <img src={item.image} alt={item.title} className="w-33 h-33 object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-2xl font-bold text-text-color">{item.title}</h2>
                                        <p className="text-subtitles text-lg ">${item.price}</p>
                                        <label htmlFor="quantity" className="text-text-color mb-2">
                                            Quantity:
                                            <button
                                                id="quantity"
                                                name="quantity"
                                                value={quantity}
                                                onClick={() => handleAddClick(item.id)}
                                                className="ml-2 w-16 border border-gray-300 rounded-md p-1"
                                            >
                                                +
                                            </button>
                                            <span className="mx-2">{quantity}</span>  
                                        </label>
                                    </div>
                                    <div >
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer" onClick={() => handleDeleteClick(item.id)}>Remove</button>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}