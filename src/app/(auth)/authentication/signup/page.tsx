"use client";

import Head from "./head";
import Link from "next/link";
import { Create } from "@/utils/types";
import { create } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
const SignUp = () => {
  const regex = /^(?:(?![a-zA-Z]{2,}|\\d{2,}).)*$/;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Create>({
    mode: "all",
    resolver: zodResolver(create),
  });

  const onSubmit = handleSubmit(async (data) => {
    if (regex.test(data.password)) {
      setError(true);
      return;
    }
    setLoading(true);
    const req = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });
    const res = await req.json();
    if (req.ok) {
      setLoading(false);
      reset();

      toast.success(`${res.message}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/authentication/signin");
    } else {
      setLoading(false);
      reset();

      toast.error(`${res.message}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  });
  if (loading) {
    return (
      <section className=" w-full h-screen flex items-center justify-center">
        <Loading />
      </section>
    );
  }

  return (
    <>
      <Head />
      <section className="w-full h-full  ">
        <div className="w-full h-full  grid-cols-1 md:grid md:grid-cols-2 ">
          <div className="bg-[url('/on.png')] bg-cover bg-center w-full h-screen  brightness-50 hidden  md:block"></div>
          <div className="w-full h-full flex flex-col items-center justify-center  px-6 mx-auto md:h-full lg:py-0">
            <h1 className="text-color font-bold text-2xl w-full text-left py-4 uppercase">
              Criar Conta
            </h1>
            <form className="w-full flex flex-col gap-1 " onSubmit={onSubmit}>
              <div className="w-full mb-3 flex-col md:flex md:flex-row gap-1">
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nome
                  </label>
                  <input
                    type="name"
                    {...register("name")}
                    className="w-full border-b-[1px] border-gray-500 outline-none pb-2"
                    placeholder="Nome completo"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm">
                      {errors?.name.message}
                    </p>
                  )}
                </div>
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full border-b-[1px] border-gray-500 outline-none pb-2"
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm">
                      {errors?.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full mb-3 flex-col md:flex md:flex-row gap-1">
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Área de Atuaçao
                  </label>
                  <input
                    type="name"
                    {...register("profession")}
                    className="w-full border-b-[1px] border-gray-500 outline-none pb-2"
                    placeholder="Digite sua área de atuação..."
                  />
                  {errors.profession && (
                    <p className="text-red-600 text-sm">
                      {errors?.profession.message}
                    </p>
                  )}
                </div>
                <div className="w-full md:w-[50%]">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    CRO ou CRBM
                  </label>
                  <input
                    type="name"
                    {...register("docs")}
                    className="w-full border-b-[1px] border-gray-500 outline-none pb-2"
                    placeholder="CRO ou CRBM"
                  />
                  {errors.docs && (
                    <p className="text-red-600 text-sm">
                      {errors?.docs.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full mb-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Senha
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className="w-full border-b-[1px] border-gray-500 outline-none pb-2"
                />
                {errors.password && (
                  <p className="text-red-600 text-sm">
                    {errors?.password.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirmar senha
                </label>
                <input
                  type="password"
                  {...register("confirm")}
                  className="w-full border-b-[1px] border-gray-500 outline-none pb-2"
                  placeholder="••••••••"
                />
                {errors.confirm && (
                  <p className="text-red-600 text-sm">
                    {errors?.confirm.message}
                  </p>
                )}
                 {error && (
                  <p className="text-red-600 text-sm">
                    Por razões de segurança, não são permitidas senhas que contenham sequências consecutivas
                  </p>
                )}
              </div>
              <div className="w-full flex flex-col gap-2 items-center justify-center pt-4">
                <button type="submit" className="btn">
                  Criar conta
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Já tem cadastro?{" "}
                  <Link
                    href={"/authentication/signin"}
                    className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default SignUp;
