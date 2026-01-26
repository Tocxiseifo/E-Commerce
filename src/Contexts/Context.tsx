import { createContext } from "react";
import type { Product } from "../types/prodects";

export interface ShopContextType {
  favorite: Product[];
  setFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ShopContextType | null>(null);
