import { createContext } from "react";

//=====================Types====================
import type { Product } from "../types/prodects";

export interface ShopContextType {
  favorite: Product[];
  setFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = createContext<ShopContextType | null>(null);
