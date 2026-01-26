import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//======================Hooks=================
import useShop from '../../hooks/useShop';
import { useEffect } from 'react';

//=================Material UI=====================
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

//=====================Router=====================
import { Link } from 'react-router-dom';



export default function NavBar() {
    const CartBadge = styled(Badge)`
      & .${badgeClasses.badge} {
        top: -12px;
        right: -6px;
      }
    `;
    
    const {favorite, cart , setIsLoggedIn , isLoggedIn} = useShop(); //custom hook contain the context data
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
            <nav className="bg-white text-text-color flex flex-row justify-between items-center text-center  w-full h-18 sticky top-0 z-50">
                <div className="flex flex-row text-center justify-between gap-8  ml-12 w-full items-center">
                    <div className="flex flex-row w-full gap-6">
                        <Link to={'/'} className="text-3xl font-semibold text-text-color">Shoply</Link>
                        <span className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">New arrival</span>
                        <span className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">Most popular</span>
                        <span className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">About</span>
                        <span className="text-[16px] text-text-color relative xl:top-2 hover:text-main cursor-pointer duration-500 transition hover:duration-500">Support</span>
                    </div>
                    <div className="flex flex-row text-center gap-4 mr-12 justify-center items-center">
                        {isLoggedIn ? (
                            <button onClick={() => setIsLoggedIn(false)} className="cursor-pointer text-[16px] text-main bg-transparent duration-500 transition hover:duration-500 hover:bg-gray-200 hover:text-main hover:border-main border  w-18 h-9 text-center flex justify-center items-center rounded-md">LogOut</button>
                        ) : (
                            <Link to={'/LogIn'} className="cursor-pointer text-[16px] text-white bg-main duration-500 transition hover:duration-500 hover:bg-white hover:text-main hover:border-main border  w-18 h-9 text-center flex justify-center items-center rounded-md">LogIn</Link>
                        )}
                        <button className='text-gray-700 hover:text-main-color cursor-pointer'>
                            <FavoriteBorderIcon  />
                            <CartBadge badgeContent={favorite.length}  color="primary" overlap="circular" />
                        </button>
                        <button className='text-gray-700 hover:text-main-color cursor-pointer'>
                            <ShoppingBagIcon  />
                            <CartBadge badgeContent={cart.length}   color="primary" overlap="circular" /> {/*add .length to solve the error */}
                        </button>                                           
                    </div> 
                </div>
            </nav>
        </>
    )
}