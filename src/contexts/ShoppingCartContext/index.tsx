import React, { useContext, useReducer } from "react";
import { Product } from "types";

type ShoppingCartContextType = {
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
};

const ShoppingCartContext = React.createContext<ShoppingCartContextType>({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export const useShoppingCartContext = (): ShoppingCartContextType =>
  useContext<ShoppingCartContextType>(ShoppingCartContext);

interface ShoppingCartContextProviderProps {
  children?: React.ReactNode;
}

export const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const products: Product[] = [];
};
