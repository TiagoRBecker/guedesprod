"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import Nav from "@/components/Nav/index";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from 'react-toastify';
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
     
          <Nav />
          
          {children}

          <Footer />
        
       
    </>
  );
}
