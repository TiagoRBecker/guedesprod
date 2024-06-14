"use client";

import Head from "./head";
import "aos/dist/aos.css";
import BottomNav from "@/components/BottomNav";
import { useEffect, useState } from "react";
import Whatsszapp from "@/components/WhatssappButtom";
import Products from "@/components/Products";
import Cart from "@/components/Cart";

const Home = () => {


  return (
    <>
      <Head />

      {/*Banner*/}

      <section className="w-full h-full gap-1 py-[0rem]  md:w-full    items-center flex  flex-col md:gap-10 md:py-[1.5rem]">
        <h1 className="text-2xl w-full text-[#3b8e7d]  px-1 text-left md:text-3xl font-bold md:w-[80%]  md:text-center  py-[3rem] ">
          Responsabilidade Protegida, Atuação Harmoniosa. Documentos inovadores
          para uma Comunicação segura com seus Pacientes.
        </h1>
        <div className="w-full   grid-cols-1 md:grid md:grid-cols-2">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/banner.svg"
              alt="banner"
              className="w-[60%] h-full object-fill"
            />
          </div>
          <div className="w-full h-full px-2 md:flex  flex-col gap-3">
            <h2>Como funciona?</h2>
            <div className="w-full mb-6">
              <div className="flex gap-2">
                <p className="btn text-white rounded-full w-6 h-6 flex items-center justify-center">
                  1
                </p>
                <p>Selecione os documentos que seu instituto ofererece</p>
              </div>
              <p className="mt-4 font-bold w-full  md:w-[70%]">
                Selecione individualmente e adicione ao carrinho os (TCLE’s+
                Contratos) disponíveis abaixo,de acordo comos procedimentos que
                deseja receberem seu e-mail.
              </p>
            </div>
            <div className="w-full mb-6">
              <div className="flex gap-2">
                <p className="btn text-white rounded-full w-6 h-6 flex items-center justify-center">
                  2
                </p>
                <p>Selecione outros documentos fundamentais</p>
              </div>
              <p className="mt-4 font-bold md:w-[70%]">
                Selecione outros documentos como Anamnese para harmonização,
                Termos acessórios fundamentais, Ficha clínica + Plano de
                tratamento e adicione ao carrinho
              </p>
            </div>

            <div className="">
              <div className="flex gap-2">
                <p className="btn text-white rounded-full w-6 h-6 flex items-center justify-center">
                  3
                </p>
                <p>Faça seu cadastro e receba imediatamente seus documentos</p>
              </div>
              <p className="mt-4 font-bold md:w-[70%]">
                Faça o seu cadastro, realize ocheckout de pagamento e receba
                agora seus documentos editáveis e personalizáveis direto em seu
                e-mail.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-xl w-full text-blue-900    px-1 text-left md:text-xl font-bold md:w-[80%]  md:text-center  py-[3rem] ">
          PRONTUÁRIOS EDITÁVEIS E PERSONALIZÁVEIS DESENVOLVIDOS POR
          ESPECIALISTAS DE DIVERSAS ÁREAS DA SAÚDE E ADVOGADOS RENOMADOS NO
          SEGMENTO DE HARMONIZAÇÃO.
        </h1>
        <div className="w-full bg-gray-100 py-10">
          <div className="max-w-[1240px] mx-auto gap-10 grid-cols-1 md:grid md:grid-cols-4 ">
            <div className="bg-white py-10 px-2 flex items-center justify-center flex-col">
              <img src="/5.svg" alt="Icon" className="h-32" />
              <div className="mt-2 w-full h-44">
                <p className="text-justify mt-4">
                  Evite problemas com a subjetividade da{" "}
                  <strong>percepção de resultados por parte do paciente</strong>{" "}
                  através de documentos compreensíveis e detalhados
                </p>
              </div>
            </div>
            <div className="bg-white py-10 px-2 flex items-center justify-center flex-col">
              <img src="/3.svg" alt="Icon" className="h-32" />
              <div className="mt-2 w-full h-44">
                <p className="text-justify mt-4">
                  Utilize prontuários pautados em{" "}
                  <strong>princípios bioéticos</strong> que descrevam com
                  clareza os riscos, a responsabilidade conjunta, a autonomia e{" "}
                  <strong>aspectos clínicos dermatológicos</strong> dos paciente
                </p>
              </div>
            </div>
            <div className="bg-white py-10 px-2 flex items-center justify-center flex-col">
              <img src="/1.svg" alt="Icon" className="h-32" />
              <div className="mt-2 w-full h-44">
                <p className="text-justify mt-4">
                  Use o seu prontuário como principal meio de defesa da sua
                  atividade profissional, através do conhecimento jurídico de
                  quem defende médicos, dentistas, biomédicos e demais
                  profissionais da saúde a mais de 10 anos.
                </p>
              </div>
            </div>

            <div className="bg-white py-10 px-2 flex items-center justify-center flex-col">
              <img src="/6.svg" alt="Icon" className="h-32" />
              <div className="mt-2 w-full h-44">
                <p className="text-justify mt-4">
                  Contratos e termos editáveis e personalizáveis - Específicos
                  para cada procedimento e{" "}
                  <strong>
                    projetados para descrever todo o plano de tratamento
                    indicado{" "}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-xl w-full text-blue-900    px-1 text-left md:text-xl font-bold md:w-[80%]  md:text-center  py-[1rem] ">
          SELECIONE ABAIXO OS DOCUMENTOS QUE VOCÊ PRECISA PARA TRABALHAR COM
          MAIS SEGURANÇA JURÍDICA EM SEUS PROCEDIMENTOS
        </h1>
      </section>
      <Products />
      <section className="w-full h-full  md:w-full  bg-[#d3ebe2] items-center flex  flex-col md:gap-10 md:py-[1.5rem]">
        <div className="w-full md:w-[70%] mx-auto py-10 flex flex-col gap-3">
          <h1 className="text-center font-bold ">QUEM SOMOS?</h1>
          <h2 className="text-justify px-2">
            Somos uma Editora com foco em soluções digitais, publicações e
            capacitação multidisciplinar. Publicamos trabalhos técnicos e
            ferramentas digitais relevantes para aprimoramento profissional.
            Nossas publicações são produzidos por professores, juristas ,
            profissionais da saúde e de diversas áreas de conhecimento. Cada
            modelo é cuidadosamente elaborado por especialistas, garantindo
            atender aos padrões profissionais mais exigentes. Além disso, todos
            os nossos modelos são totalmente editáveis, permitindo que os
            usuários personalize cada documento de acordo com suas necessidades
            específicas
          </h2>
        </div>
      </section>
      <Cart/>
      <Whatsszapp />
      <BottomNav />
    </>
  );
};

export default Home;
