"use client";

import { createContext, useState, SetStateAction, Dispatch, useEffect } from "react";
type Product = {
  id?: string;
  name?: string;
  price?: {
    plane: string;
    qtd: number;
    price: number;
  }[];
};
type CartContext = {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeToCart: (product: Product) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContext>({} as CartContext);
import { toast } from "react-toastify";

export default function CartProvider({ children }: any) {
  const [cart, setCart] = useState<Product[]>([]);
  useEffect(()=>{
    const cartStorage = JSON.parse(localStorage.getItem("cart") as any) || [];
    if(cartStorage){
      setCart(cartStorage)
    }
  },[])
  const addToCart = (product: any) => {
   
    setCart((prev: any) => {
      const isProductAlreadyInCart = prev.some(
        (item: any) => item.id === product.id
      );

      if (!isProductAlreadyInCart) {
        toast.success("Produto adicionado ao carrinho com sucesso!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const newCart = [...prev, product];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      } else {
        toast.warn("O item já foi adicionado ao carrinho!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return prev;
      }
    });
  };
  const removeToCart = (product: Product) => {
    setCart((prev) => {
      const pos = prev.findIndex((item) => item.id === product.id);
      const newCart = prev.filter((value, index) => index !== pos);

      // Atualize o localStorage após a remoção
      localStorage.setItem("cart", JSON.stringify(newCart));

      return newCart;
    });
  };
  const clearCart = () => {
    const newCart = [] as any;

    // Atualize o localStorage para refletir o carrinho vazio
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart)
    return newCart;
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, removeToCart, addToCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
