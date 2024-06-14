import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Whatsszapp = () => {
  return (
    <div className="fixed  bottom-24 left-6 md:bottom-4 md:left-8">
        <Link   href={
                  "https://api.whatsapp.com/send/?phone=555195391300&text=Ol%C3%A1%21+Gostaria+de+conversar+sobre+documentos+projetados+juridicamente+para+profissionais+da+harmoniza%C3%A7%C3%A3o.+Meu+nome+%C3%A9+%28insira+seu+nome%29&type=phone_number&app_absent=0"
                }
                target="_blank"
              >
      <div className="pulsar">
          <FaWhatsapp size={40} color="#fff" />
      </div>
        </Link>
    </div>
  );
};

export default Whatsszapp;
