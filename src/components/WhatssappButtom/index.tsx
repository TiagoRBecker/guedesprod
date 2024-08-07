"use client"
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Whatsszapp = () => {
 
  return (
    <div className="fixed  bottom-24 left-6 md:bottom-4 md:left-8 ">
        <Link   href={
                  `https://api.whatsapp.com/send/?phone=555195391300&text=Olá gostaria+de+conversar+sobre+os+documentos+projetados+juridicamente+para+profissionais+da+harmoniza%C3%A7%C3%A3o.+Meu+nome+%C3%A9+%28insira+seu+nome%29&type=phone_number&app_absent=0`
                }
                target="_blank"
              >
      <div className="w-full flex items-center gap-4">
      <div className="pulsar">
          <FaWhatsapp size={40} color="#fff" />
      </div>
      <div className="w-36 bg-[#329f83] text-white rounded-md relative :hover bg">
         <p className="pl-2 ">Suporte Online</p>
         <p className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></p>
      </div>
      </div>
        </Link>
    </div>
  );
};

export default Whatsszapp;
