"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CartContext } from "@/Context";
import { Checkout } from "@/utils/types";
import { checkout } from "@/utils/validation";
import { useSession } from "next-auth/react";
import Modal from "@/components/modal";
import Head from "./head";
import BottomNav from "@/components/BottomNav";
import { useRouter } from "next/navigation";

const Cart = () => {
   const router = useRouter()
  const [isOpen, setIsOpen] = useState(false); //state para abrir o modal de termos de uso
  const [termsAccepted, setTermsAccepted] = useState(false); //state para aceitar os termos
  const [error, setError] = useState(false); //state para setar erro
  const { removeToCart, clearCart, cart } = useContext(CartContext); // contextpai , remove itens , adiciona, lista e limpa o cart
  const [loading, setLoading] = useState(false); // loading da tela
  //calcula o total dos produtos
  const totalPrice = cart?.reduce((acc: any, item: any) => {
    return acc + item.price * 1;
  }, 0) as any;

  //  React hook forms  para checkout
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all"
    
  });

  // FUnçao para enviar os dados para o gatway
  const formData = handleSubmit(async (data) => {
  
    if(termsAccepted === false){
      setError(true)
      return
    }
    try {
      const payment = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart, data }),
      });

      const response = await payment.json();
     
      if (response.data) {
        setLoading(true);
        await setTimeout(() => {
          window.location.href = response.data;
        }, 3000);
        clearCart();

        return;
      }
    } catch (error) {
      console.log(error);
        
    }
    
  });
  //Funçao para abrir e fechar o modal
  const handleShowModal = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-checkout">
          Por favor, aguarde. Em breve, você será direcionado para um ambiente
          seguro.
        </p>
      </div>
    );
  }
  
  return (
    <>
      <Head />
      <section className="w-full h-full relative py-[4rem]">
        {cart.length <= 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <h3 className="text-lg font-semibold text-[#072137]">
              Seu carrinho está vazio no momento
            </h3>
          </div>
        ) : (
          <div className="w-[80%]  grid-cols-1 md:grid md:grid-cols-2 mx-auto">
            <div className="w-full max-h-[90vh] overflow-auto px-4 ">
              <p className="text-xl font-medium">Lista de Produtos</p>
              {cart?.map((items: any, index: any) => (
                <div
                  className="w-full relative  space-y-3 rounded-lg  bg-white px-2  sm:px-6"
                  key={index}
                >
                  <p
                    className=" absolute top-2 right-2 text-red-500 cursor-pointer"
                    onClick={() => removeToCart(items)}
                  >
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </p>
                  <div className="w-full flex-col md:flex md:flex-row items-center justify-center gap-2  ">
                    <div className="w-full md:w-[30%]">
                    <img
                      className="m-2  h-20 rounded-md object-cover object-center"
                      src="/logo.svg"
                      alt={items.title}
                    />
                    </div>
                    <div className="w-full md:w-[70%] flex  flex-col px-1 py-4">
                    <span className="text-black text-base ">
                        {items.title}
                      </span>

                      <p className="text-color w-[40%]">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(items?.price / 100)}
                      </p>
                    </div>

                    
                   
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full pt-10  p-4 ">
              <p className="text-xl font-medium">Detalhes do Pagamento</p>
              
              
              <div className="flex flex-col">
                <div className="flex  items-center gap-3 py-2" onClick={handleShowModal}>
                    <input type="checkbox"  readOnly  checked={termsAccepted}/>
                    <p>Termos de Contrato</p>
                  
                 
              </div>
              {error && (
                    <p className="text-red-600 text-sm">
                      Necessário aceitar os termos do contrato.
                    </p>
                  )}
              <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>

                    <p className="text-2xl font-semibold text-gray-900">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(totalPrice / 100)}
                    </p>
                  </div>
              
              <div className="py-4">
                  <button onClick={formData} type="submit" className="btn-small">
                    Confirmar
                  </button>
                </div>
              </div>
                 
            </div>
          </div>
        )}
        <Modal  isOpen={isOpen} setIsOpen={setIsOpen} termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted}/>
      </section>
      <BottomNav />
    </>
  );
};

export default Cart;
