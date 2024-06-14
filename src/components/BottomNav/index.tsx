"use client"
import {useRouter } from "next/navigation"
import { useContext } from "react"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CartContext } from "@/Context";
const BottomNav = () => {
   
    const { data: session, status } = useSession();
    const { cart } = useContext(CartContext);
    const router = useRouter()
    const  goToCart =()=>{
        router.replace("/cart")
       }
    return ( 
        <section className="flex w-full h-14 z-50  bg-white  items-center justify-between px-4 fixed bottom-0 left-0 shadow-[0px_-4px_5px_0px_#00000024] md:hidden">
         <div className="flex gap-2 items-center">
          {status === "unauthenticated" && (
            <Link href={"/authentication/signin"}>
              <button className="btn-small px-6">Entrar</button>
            </Link>
          )}
          {status === "loading" && (
            <>
              <p className="w-8 h-8 rounded-full bg-gray-400 "></p>
              <p className="text-gray-400 text-lg">carregando</p>
            </>
          )}
          {status === "authenticated" && (
            <>
              <img
                src={session?.user.image as string}
                alt="Perfil"
                className="w-8 h-8 bg-transparent rounded-full "
              />
              <p className="text-gray-400 text-lg capitalize">{session?.user.name}</p>
            </>
          )}
        </div>
        <div className="relative">
        <button onClick={goToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <p className="flex items-center justify-center absolute -top-1 -right-1 w-4 rounded-full h-4 bg-[#072137] text-[10px] text-[#fff] ">
            {cart?.length}
          </p>
        </button>
      </div>
      </section>
     );
}
 
export default BottomNav;