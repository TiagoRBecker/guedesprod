"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactType } from "@/utils/types";
import { contact } from "@/utils/validation";
import Link from "next/link";
const Contact = ({color}:any) => {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<contactType>({
    mode: "all",
    resolver: zodResolver(contact),
  });
  const onSubmit = handleSubmit((data) => {
    const response = fetch("/api/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        //SetshowMessage(true);
      });
  });
  return (
    
    <section  className="w-full h-full bg-white pb-[1.5rem]">
    <div className="parallax">
          <h1 className="text-white text-2xl w-full md:text-4xl font-bold md:w-[80%]  text-center  py-[3rem] ">
            A Primeira Plataforma jurídica com foco na responsabilidade civil
            dos <span className="text-color"> profissionais da saúde</span>
          </h1>
        </div>

    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full h-full "
    >
      <div className="grid grid-cols-1 justify-items-center w-full h-full pt-10  lg:grid-cols-3 text-[#54595F]">
        <div className="contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <Link href={"https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Gostaria+de+conversar+sobre+documentos+projetados+juridicamente+para+profissionais+da+harmoniza%C3%A7%C3%A3o.+Meu+nome+%C3%A9+%28insira+seu+nome%29&type=phone_number&app_absent=0"} target="_blank">
            <p className="text-[#072137] pt-2">( 51 )98051-9018</p>
          </Link>
         
        </div>
        <div className="borderl  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-[#072137] pt-2">
            Avenida Borges de Medeiros, N°343
          </p>
          <p className="text-[#072137] pt-2">Porto Alegre,Rs / Brasil</p>
        </div>
        <div className="contact ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          
          <p className="text-[#072137] pt-2">
            <Link href={"mailto:contato@guedesbampi.com.br"}>
              contato@guedesbampi.com.br
            </Link>
          </p>
          
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
      <h2 className="text-center font-bold text-2xl py-[2rem]">
      Envie sua Mensagem!
      
      </h2>
      <span className="text-color text-lg text-center font-bold "> Em breve, um membro denossa equipe de suporte entrará em contato</span>
      </div>
     

      <div className="w-full h-full"> 
       
          <form
            className="mx-auto py-5 px-5  max-w-xl  rounded-md"
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Nome completo"
                    className="block w-full  outline-none rounded-md border-[1px] border-gray-400 px-3.5 py-2   placeholder:text-[#54595F]  font-bold   sm:text-sm sm:leading-6"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm pl-1">
                      {errors?.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="seuemail@gmail.com"
                    className="block w-full  outline-none rounded-md border-[1px] border-gray-400 px-3.5 py-2   placeholder:text-[#54595F]   font-bold sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm pl-1">
                      {errors?.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="Telefone"
                  className="block w-full  outline-none rounded-md border-[1px] border-gray-400 px-3.5 py-2   placeholder:text-[#54595F]  font-bold  sm:text-sm sm:leading-6"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm pl-1">
                    {errors?.phone.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <textarea
                    {...register("message")}
                    placeholder="Mensagem"
                    rows={8}
                    className="resize-none block w-full outline-none   rounded-md border-[1px] border-gray-400 px-3.5 py-2   placeholder:text-[#54595F]  font-bold  sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm pl-1">
                      {errors?.message.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="btn-small"
              >
                Enviar
              </button>
            </div>
          </form>
      
      </div>
    </div>
  </section>
  );
};

export default Contact;
