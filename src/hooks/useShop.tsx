//=====================Hooks====================
import { useContext } from "react";
import { Context } from "../Contexts/Context"; //importing the context

export default function useShop() {
    const Contexts = useContext(Context) //using the context
    if(!Contexts) {
        throw new Error('useShop must be used within ShopProvider')
    }
    return Contexts
}