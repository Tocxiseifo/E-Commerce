//=====================Hooks====================
import useProducts from "../../hooks/useProducts";
import useShop from "../../hooks/useShop";

//==================Material UI=====================
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


//=====================Types============
import type { Product } from "../../types/prodects";

//=====================Motion=====================
import { motion } from "framer-motion";

//=====================Router=====================
import { Link, useParams } from "react-router-dom";

export default function ProductCard() {
    const {products, loading, error} = useProducts() //Custom hook contain the data of the api
    const {favorite, setFavorite , cart , setCart} = useShop() //custom hook contain the context data
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
        <section className="w-full h-210 bg-white justify-center mt-120 ">
                <motion.div initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.2}} className="flex flex-col items-center  mt-10">
                    <motion.h1 initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className="text-3xl text-center font-bold text-text-color">Most Popular Products</motion.h1>
                    <motion.p initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="text-subtitles">Discover our most popular products</motion.p>
                </motion.div>
            <div className="flex flex-row flex-wrap lg:flex-nowrap lg:w-300 xl:w-full overflow-hidden  justify-center items-center lg:gap-3 xl:gap-41">
                {products.slice(0,4).map((product ,index) =>{
                    return(
                        <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:index * 0.4}} key={product.id} className="flex  flex-col mb-6  h-90 lg:h-150 w-60   text-left group  mt-40  [@media(min-width:1024px)_and_(max-width:1440px)]:-mr-14   ">
                            <div className="items-center hover:shadow-lg hover:-translate-y-1 duration-500 transition hover:duration-500   gap-2 bg-background h-70 w-65 flex mb-3 rounded-md justify-center cursor-pointer relative lg:w-55 lg:h-65 ">
                                <img src={product.image} alt={product.title} loading="lazy" className="w-45 h-45 lg:h-35 lg:w-35 object-contain  duration-500 transition-all hover:scale-110 hover:duration-500" />
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
                            <h3 className="text-sm h-12 w-45 text-text-color">
                                {product.title}
                            </h3>
                            <p>{product.category}</p>
                            <p className="text-subtitles">${product.price}</p>
                            <div className="flex gap-4 mt-7">
                                <button className="text-main border border-main bg-transparent w-25 h-10 rounded-md hover:bg-gray-100 duration-500 transition hover:duration-500 cursor-pointer" onClick={(e) => {e.stopPropagation() 
                                    handleAddToCart(product.id)}}>Add to cart</button>
                                <Link to={`/product/${product.id}`} className="bg-main text-center flex justify-center items-center  w-25 h-10 rounded-md hover:bg-yellow-600 duration-500 transition hover:duration-500 cursor-pointer">View</Link> 
                                {/* link to product details page */}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}