//=====================Hooks====================
import useProducts from "../../hooks/useProducts"
import useShop from "../../hooks/useShop"

//=====================Types====================
import type { Product } from "../../types/prodects";

//==================Material UI=====================
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

//=====================Router=====================
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    //=====================Hooks====================
    const { products , loading , error} = useProducts() //Custom hook contain the data of the api
    const { cart, setCart , favorite , setFavorite} = useShop() //custom hook contain the context data
    
    //====================Router Hooks====================
    const param = useParams()
    const productId = param.productId
    
    console.log(products);
    //=====================Handlers==================
    function handleAddToCart(Id: number | string) {
      if (cart.some(item => item.id === Id)) {
        setCart(prev => prev.filter(item => item.id !== Id));
        }else {
        const product = products.find(product => product.id === Id);
        if (!product) return;  
        setCart(prev => [...prev, product]);
      }
    }

    function handleAddClick (Id :number | string) {
        if (favorite.some((itemId : Product) => itemId.id === Id)){
            setFavorite((prev) => prev.filter((itemId) => itemId.id !== Id));
        } else {
            const product = products.find((product) => product.id === Id);
            if(!product) return
            setFavorite(prev => [...prev, product]);    
        }
    }

    //=====================Render====================
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return(
        <>
            <section className="flex flex-col h-screen w-full">
                {/* Product Details Section */}
                {products.filter(product => product.id === Number(productId)).map((product) => (
                    <div className="flex flex-row items-center w-full h-180 mt-10 gap-10 " key={product.id}>
                        <div className="flex flex-col ml-26 gap-4 w-160  h-170 justify-center group relative items-center bg-white rounded-md shadow-lg ">
                            <img src={product.image} alt={product.title} className="w-88 h-88 object-contain" />
                            <button onClick={(e) =>{
                                e.stopPropagation()
                                handleAddClick(product.id)
                                }}  className="absolute top-4 right-4 w-10 h-10 bg-red rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg cursor-pointer">
                                {favorite.some(item => item.id === product.id)? (
                                <FavoriteIcon className="text-red-600" />
                                ) : (
                                <FavoriteBorderIcon className="text-gray-700" />
                                )}
                            </button> 
                        </div>
                        <div className="flex flex-col ml-10 gap-6 w-160 h-170 justify-between ">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-3xl font-bold text-text-color">{product.title}</h1>
                                <p className="text-subtitles">{product.description}</p>
                                <p className="text-subtitles">{product.category}</p>
                                <div className="flex gap-4">
                                    <span className="text-yellow-500 font-semibold">Rating: {product.rating.rate} ★</span>
                                    <span className="text-gray-500">({product.rating.count} reviews)</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-2xl font-semibold text-text-color">${product.price}</span>
                                <button className="bg-main text-white py-2 rounded-md hover:bg-main-color transition duration-300 cursor-pointer hover:duration-300 hover:bg-yellow-600" onClick={() => handleAddToCart(product.id)}>Add to cart</button>   
                            </div>
                        </div>
                    </div>    
                ))
                }
                
            </section>
        </>
    )
}