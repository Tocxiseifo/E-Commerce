import { useContext } from "react";
import { Context } from "../Contexts/Context";

export default function useShop() {
    const Contexts = useContext(Context) 
    if(!Contexts) {
        throw new Error('useShop must be used within ShopProvider')
    }
    return Contexts
}