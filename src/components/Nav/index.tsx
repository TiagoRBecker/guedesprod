/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CartContext } from "../../Context";
import { signOut, useSession } from "next-auth/react";



const Nav = () => {
  const path = usePathname();
 const router = useRouter()
  const [showMenu, setShowMenu] = useState(false);

  const [showSideCart, setShowSideCart] = useState(false);
  const { cart } = useContext(CartContext);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  const handleShowSideCart = () => {
    setShowSideCart(!showSideCart);
  };
  const { data: session, status } = useSession();
  const totalPrice = cart?.reduce((acc: any, item: any) => {
    return acc + item.price * 1;
  }, 0) as any;
   const handleGoToCart =()=>{
    if(!session){
      setShowSideCart(false)
      return  router.push("/authentication/signin")
      
     
    }else{
      setShowSideCart(false)
      router.push("/cart")
    }
   }
  return (
    <header className="px-4 w-full h-32 flex items-center justify-around bg-white relative  border-b-[1px] border-gray-400 z-50 ">
      <div className="w-[40%]  flex items-center justify-center py-4 px-4 md:w-[20%] h-full  ">
        <Link href={"/"}>
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-52 h-full object-cover"
          />
        </Link>
      </div>
      <nav className="md:flex items-center justify-start w-[60%] h-full ">
        <ul className="hidden  md:flex gap-4">
          <li
            className={
              path === "/"
                ? "uppercase text-[#54595F] border-b-2 border-[#329f83] hover:text-black "
                : "uppercase text-[#54595F] border-b-2 border-white"
            }
            onClick={() => setShowMenu(false)}
          >
            <Link href={"/"}>Home</Link>
          </li>
          
          {status === "authenticated" && (
            <li
              onClick={() => signOut({ callbackUrl: "/" })}
              className="uppercase text-[#54595F] cursor-pointer "
            >
              Sair
            </li>
          )}
        </ul>
        <ul
          className={
            showMenu
              ? "bg-white pt-10 absolute top-28 bottom-0 left-0 right-0 z-50 flex flex-col gap-4 w-[100%] h-screen md:hidden"
              : "hidden"
          }
        >
          <Link href={"/"}>
            <li
              onClick={() => setShowMenu(false)}
              className="w-full cursor-pointer  flex items-center justify-center uppercase text-gray-400 hover:text-black hover:bg-gray-300"
            >
              Home
            </li>
          </Link>
         

          {status === "authenticated" && (
            <li
              onClick={() => signOut({ callbackUrl: "/" })}
              className="cursor-pointer w-full  flex items-center justify-center uppercase text-gray-400 hover:text-black hover:bg-gray-300"
            >
              Sair
            </li>
          )}
        </ul>
      </nav>
      <div className="hidden md:w-[20%] md:flex items-center justify-center h-full gap-1 relative">
        {status === "unauthenticated" && (
          <Link href={"/authentication/signin"}>
            <button className="btn px-2 py-1 text-white rounded-sm">Entrar</button>
          </Link>
        )}
        {status === "loading" && (
          <div className="w-full flex gap-2 items-center justify-end px-4">
            <p className="w-8 h-8 rounded-full bg-gray-400"></p>
            <p className="text-gray-400 text-lg">carregando</p>
          </div>
        )}
        {status === "authenticated" && (
          <div className="w-full flex gap-2 items-center justify-end px-4">
            <img
              src={session?.user.image as string}
              alt="Perfil"
              className="w-8 h-8 bg-transparent  rounded-full"
            />
            <p className="text-[#54595F]  text-lg  text-end capitalize truncate font-bold">
              {session?.user.name}
            </p>
          </div>
        )}
       
      </div>

 

      <div
        onClick={handleShow}
        className="w-[20%] flex items-center justify-end  md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </header>
  );
};

export default Nav;
