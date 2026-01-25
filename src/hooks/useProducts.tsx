import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../types/prodects";

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [products3 , setProducts3] = useState<Product[]>([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").
        then(res => {
            setProducts(res.data)
            setLoading(false)
            setProducts3(res.data.slice(0,4)) //slice here mean take only from array from index 0 to index 3
            console.log(res.data.slice(0,3))
            console.log(products3)
        })
        .catch(err => {
            console.log(err)
            setError("Failed to fetch data")
            setLoading(false)
        })
    } ,[])
    return {
        products,
        loading,
        error,
        products3
    }
} 