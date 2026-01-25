import './App.css'
import NavBar from './components/Nav/NavBar'
import { Context} from './Contexts/Context'
import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import type { Product } from './types/prodects'



function App() {
  //=====================Storage Data==================  
  const [favorite, setFavorite] = useState<Product[]>(() => {
    const storedFav = localStorage.getItem("favoriteItems");
    return storedFav ? JSON.parse(storedFav) : [];
  });

  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  return (
    <>
      <div className="w-full font-semibold h-screen bg-background">
        <Context.Provider value={{ favorite, setFavorite , cart , setCart}}>
          <NavBar />
          <AppRoutes />
        </Context.Provider>
      </div>
    </>
  )
}

export default App