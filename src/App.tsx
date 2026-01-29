import './App.css'
import NavBar from './components/Nav/NavBar'
import { Context } from './Contexts/Context'
import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import type { Product } from './types/prodects'



function App() {
  //=====================States + Storage Data==================  
  const [favorite, setFavorite] = useState<Product[]>(() => {
    const storedFav = localStorage.getItem("favoriteItems");
    return storedFav ? JSON.parse(storedFav) : [];
  });

  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("cart");
    if (!storedCart) return [];
    const parsed = JSON.parse(storedCart);
    return parsed.map((item: Product) => ({ ...item, quantity: item.quantity ?? 1 })); // Ensure quantity property by using nullish coalescing operator
  });
  
  //=====================Quantity State==================
  const [quantity , setQuantity] = useState<number>(1);

  //=====================Login State==================
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() =>{
    const storedLogin = localStorage.getItem("isLoggedIn");
    return storedLogin ? JSON.parse(storedLogin) : false;
  });

  //=====================Derived State==================
  const Carts = cart.map((item) => ({...item , quantity:1}));
  
  return (
    <>
      <div className="w-full font-semibold h-full bg-background">
        <Context.Provider value={{ favorite, setFavorite , cart ,Carts , setCart , isLoggedIn, setIsLoggedIn , quantity , setQuantity}}>
          <NavBar />
          <AppRoutes />
        </Context.Provider>
      </div>
    </>
  )
}

export default App