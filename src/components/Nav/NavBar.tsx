//======================Hooks=================
import useShop from '../../hooks/useShop';
import { useEffect } from 'react';

//=================Material UI=====================
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//=====================Router=====================
import { Link } from 'react-router-dom';

//=====================Motion=====================
import { motion } from 'framer-motion';

export default function NavBar() {
    const CartBadge = styled(Badge)`
      & .${badgeClasses.badge} {
        top: -12px;
        right: -6px;
      }
    `;
    
    const {favorite, cart , setIsLoggedIn , isLoggedIn} = useShop(); //custom hook contain the context data
    
    //=====================Effects + Storage Data==================
    useEffect(() =>{
        localStorage.setItem('favoriteItems', JSON.stringify(favorite));
    }, [favorite])

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    useEffect(() =>{
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    },[isLoggedIn])

    return(
        <>
            <motion.nav initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className="bg-white text-text-color flex flex-row justify-between items-center text-center  w-full h-18 sticky top-0 z-50">
                <div className="flex flex-row text-center justify-between gap-8  ml-12 w-full items-center">
                    <div className="flex flex-row w-full gap-6">
                        <Link to={'/'} className="text-3xl font-semibold text-text-color">Shoply</Link>
                        <Link to={'/NewArrival'} className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">New arrival</Link>
                        <a href='#Most-popular' className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">Most popular</a>
                        <span className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">About</span>
                        <a href="#Support" className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">Support</a>
                    </div>
                    <div className="flex flex-row text-center gap-4 mr-12 justify-center items-center">
                        <button className='text-gray-700 hover:text-main-color cursor-pointer'>
                            <FavoriteBorderIcon  />
                            <CartBadge badgeContent={favorite.length}  color="primary" overlap="circular" />
                        </button>
                        <Link to={'/Cart'} className='text-gray-700 hover:text-main-color cursor-pointer mr-4'>
                            <ShoppingBagIcon  />
                            <CartBadge badgeContent={cart.length}   color="primary" overlap="circular" /> {/*add .length to solve the error */}
                        </Link>                                           
                        {isLoggedIn ? (
                            <button onClick={() => setIsLoggedIn(false)} className="cursor-pointer text-[16px] text-main bg-transparent duration-500 transition hover:duration-500 hover:bg-gray-200 hover:text-main hover:border-main border  w-18 h-9 text-center flex justify-center items-center rounded-md">LogOut</button>
                        ) : (
                            <Link to={'/LogIn'} className="cursor-pointer text-[16px] text-white bg-main duration-500 transition hover:duration-500 hover:bg-white hover:text-main hover:border-main border  w-18 h-9 text-center flex justify-center items-center rounded-md">LogIn</Link>
                        )}
                    </div> 
                </div>
            </motion.nav>
        </>
    )
}