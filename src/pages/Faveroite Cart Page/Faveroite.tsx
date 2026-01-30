//=====================Hooks===================
import useProducts from "../../hooks/useProducts";
import useShop from "../../hooks/useShop"

//=====================Types======================
import type { Product } from "../../types/prodects";


//==================Material UI=====================
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


//========================Router==================
import { Link, useParams } from "react-router-dom";

export default function Favorite() {
    const {favorite ,setFavorite, cart,setCart} = useShop() //Hook to Get The From Context Api
    const {products, loading, error} = useProducts() //Custom hook contain the data of the api
    const {productId}  = useParams() //to get the product id from the url

    console.log(productId);

    //=====================Conditional Rendering==================
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    //=====================Handlers==================
        function handleAddClick (Id :number | string) {
            if (favorite.some((itemId : Product) => itemId.id === Id)){
                setFavorite((prev) => prev.filter((itemId) => itemId.id !== Id));
            } else {
                const product = products.find((product) => product.id === Id);
                if(!product) return
                setFavorite(prev => [...prev, product]);
            }
        }
    
        function handleAddToCart(Id: number | string) {
          if (cart.some(item => item.id === Id)) {
            setCart(prev => prev.filter(item => item.id !== Id));
          } else {
            const product = products.find(product => product.id === Id);
            if (!product) return;
            setCart(prev => [...prev, product]);
          }
        }

    return(
        <>
            <section className="flex flex-row  justify-center  items-start gap-41 flex-wrap w-full mb-12 h-fit">
                {favorite.map((item) => (
                    <div className="flex flex-row gap-4   pb-4 mb-14 relative" key={item.id}>
                        <div className="h-65 w-65 flex flex-col ml-5">
                            <div className="flex bg-white flex-col justify-center items-center w-45 h-45 relative group">
                                <div className="items-center hover:shadow-lg hover:-translate-y-1 duration-500 transition hover:duration-500   gap-2 bg-background h-70 w-65 flex mb-3 rounded-md justify-center cursor-pointer relative lg:w-55 lg:h-65 ">
                                <img src={item.image} alt={item.title} loading="lazy" className="w-45 h-45 lg:h-35 lg:w-35 object-contain  duration-500 transition-all hover:scale-110 hover:duration-500" />
                                <button onClick={(e) =>{
                                    e.stopPropagation()
                                    handleAddClick(item.id)
                                    }}  className="absolute top-4 right-4 w-10 h-10 bg-red rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg cursor-pointer">
                                    {favorite.some(item => item.id === item.id)? (
                                      <FavoriteIcon className="text-red-600" />
                                    ) : (
                                      <FavoriteBorderIcon className="text-gray-700" />
                                    )}
                                </button> 
                            </div>
                            </div>
                            <h2 className="text-lg font-bold text-text-color">{item.title}</h2>
                            <p className="text-subtitles =">{item.category}</p>
                            <p className="text-subtitles text-lg ">${item.price}</p>
                            <div className="flex gap-4 mt-7">
                                <button className="text-main border border-main bg-transparent w-25 h-10 rounded-md hover:bg-gray-100 duration-500 transition hover:duration-500 cursor-pointer" onClick={(e) => {e.stopPropagation() 
                                    handleAddToCart(item.id)}}>Add to cart</button>
                                <Link to={`/product/${item.id}`} className="bg-main text-center flex justify-center items-center  w-25 h-10 rounded-md hover:bg-yellow-600 duration-500 transition hover:duration-500 cursor-pointer">View</Link> 
                                {/* link to product details page */}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}