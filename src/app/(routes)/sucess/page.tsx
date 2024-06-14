"use client";
import Head from "./head";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createCookies } from "@/utils/token";
import Loading from "@/components/Loading";
import Link from "next/link";
import Whatsszapp from "@/components/WhatssappButtom"
import { FaWhatsapp } from "react-icons/fa";
const Sucess = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("order_id");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Funçao que recebe a order do gatway
    async function order() {
   
      const request = await fetch("api/statusOrder", {
        method: "POST",
        body: JSON.stringify({ id}),
      });
      const response = await request.json();
    
      if (response.message) {
       
        setMessage(response.message);
        setLoading(false);
      }
      return;
    }
    if (id) {
      order();
    }
  }, []);

  return (
    <>
      <Head />
      <section className="flex flex-col container h-screen  items-center mx-auto  ">
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col container mx-auto">
            <div className="w-full flex items-center justify-center">
            <img src="/logo.svg" alt="Logo" className="w-96 h-72" />
            </div>
        
          <p className="text-center w-[80%] mx-auto text-xl text-gray-500">
            Temos o prazer de informar que sua transação foi concluída com
            sucesso. Os documentos relacionados à sua compra serão enviados para
            o seu e-mail <strong>{message}</strong> dentro de até 5 minutos. Por favor, verifique tanto a
            sua caixa de entrada quanto a pasta de spam para garantir que você
            receba os documentos sem problemas. Caso tenha alguma dúvida ou
            necessite de assistência adicional, não hesite em nos contatar.
            Atenciosamente, Guedes Bampi Publicações 
          </p>
          <div className="w-full  flex items-center gap-3 justify-center mt-10">
          <div className="">
        <Link   href={
                  "https://api.whatsapp.com/send/?phone=555195391300&text=Olá preciso de ajuda em relação aos documentos após a compra.&type=phone_number&app_absent=0"
                }
                target="_blank"
              >
      <div className="pulsar">
          <FaWhatsapp size={40} color="#fff" />
      </div>
        </Link>
    </div>
          </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Sucess;
