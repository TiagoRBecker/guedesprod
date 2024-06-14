import Link from "next/link";
import { Links} from "../Mocks";
const Footer = () => {
  return (
    <footer className=" bg-white pt-8 pb-6 shadow-[0px_-4px_5px_0px_#00000024] w-full h-full mb-10">
      <div className="w-[89%] mx-auto h-full grid-cols-1 gap-5 md:grid md:grid-cols-4 px-3">
        <div className="w-full h-full py-4 md:h-[250px]">
          <span className="block uppercase text-[#54595F]  text-lg font-bold mb-2">
            Institucional
          </span>
          <ul className="list-unstyled text-[#54595F] ">
            <Link href={"/"}>
              <li  className="text-[#54595F]  hover:text-black font-semibold block pb-2 text-sm">Home</li>
            </Link>
           
            <li>
              <Link href={"/privacy"}  className="text-[#54595F]  hover:text-black font-semibold block pb-2 text-sm">
              Políticas de Privacidade
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-full py-4 md:h-[250px]">
          <span className="block uppercase text-[#54595F]  text-lg font-bold mb-2">
            Contatos
          </span>
          <ul className="list-unstyled text-[#54595F] ">
            <li>
              <Link
                className="flex items-center gap-1 font-semibold  pb-2 text-sm "
                href="mailto:suporte@guedesbampipublicacoes.com.br
                "
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                suporte@guedesbampipublicacoes.com.br
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-1 font-semibold  pb-2 text-sm"
                href={
                  "https://api.whatsapp.com/send/?phone=555195391300&text=Ol%C3%A1%21+Gostaria+de+conversar+sobre+documentos+projetados+juridicamente+para+profissionais+da+harmoniza%C3%A7%C3%A3o.+Meu+nome+%C3%A9+%28insira+seu+nome%29&type=phone_number&app_absent=0"
                }
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                (51) 995391300
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-full py-4 md:h-[250px]">
        <h1 className="fonat-semibold uppercase text-[#54595F]  text-sm font-bold mb-2">
              Siga Nos!
            </h1>
          <div className="flex"> 
           
            <div className="flex mt-6 lg:mb-0 mb-6">
              <button className="bg-[#e8e8e8] border-2 border-[#25d366] text-[#c4302b] rounded-full flex items-center justify-center font-normal w-20 h-20   mr-2">
                <Link
                  href={
                    "https://www.instagram.com/guedesbampi.med"
                  }
                  target="_blank"
                >
                <img src="/insta.png" alt="Logo Insta" className=" w-16 h-16 object-fill" />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full py-4 md:h-[250px] ">
          <Link href={"/"}>
         <img src="/logo.svg" alt="Logo" className="w-full h-[200px] object-cover" />
         </Link>
        </div>
      </div>
      <div className="w-full h-full ">
       
        <div className=" flex flex-col w-full h-full">
          <h1 className="text-center text-xl  font-bold text-[#54595F] ">
            Formas de Pagamentos
          </h1>
          <div className="flex gap-5 justify-center items-center">
            <div className=" py-2 px-5flex items-center justify-center rounded-md">
              <img
                src="/payments/pix.png"
                alt="pix"
                className="w-[51px] h-[32px]"
              />
            </div>
            <div className=" py-2 px-5flex items-center justify-center rounded-md">
              <img
                src="/payments/visa.png"
                alt="visa"
                className="w-[51px] h-[32px]"
              />
            </div>
            <div className=" py-2 px-5flex items-center justify-center rounded-md">
              <img
                src="/payments/mastercard.png"
                alt="master"
                className="w-[51px] h-[32px]"
              />
            </div>
          </div>
        </div>
        <hr className="my-2 border-[#072137]" />
        <div className="w-full h-full flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-[#54595F]  font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <Link href="https://guedesbampi.com.br/" target="_blank">
                GuedesBampi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
