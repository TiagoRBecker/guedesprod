"use client"

import "./global.css";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import  CartProvider  from "../Context/index";
const poppins = Poppins({
  subsets:['latin-ext'],
  weight:['400','500',"600","700"]
});
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function RootLayout({ children,}: { children: React.ReactNode;}) {
  useEffect(()=>{
    AOS.init({
      duration:800,
      once:false
    })
  },[])
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
      
      <SessionProvider>
      <CartProvider>
        
        

      { children }
   
      </CartProvider>
      </SessionProvider>
      <ToastContainer/>
      

      
     
      
    
</body>
    </html>
  );
}

