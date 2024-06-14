"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
export default function Modal({
  isOpen,
  setIsOpen,
  termsAccepted,
  setTermsAccepted,
}: any) {
  let [nextTerm, setNextTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [notAccepted, setNotAccepted] = useState(false);
  const [error, setError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const getLayout = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Dialog.Description className="h-full md:w-full flex items-center justify-center md:h-[180px]  text-justify text-base text-[#072137] px-5 py-2 ">
              Considerando que os documentos criados pela Contratada são de
              propriedade intelectual da Contratada e cedido somente para uso
              exclusivo do adquirente profissional ora contratante em seu
              restrito benefício privado e seu consultório ou instituto na qual
              atua localmente, é vedado a sua divulgação, venda ou
              compartilhamento para terceiros. Desta forma o adquirente desta
              cessão de uso , está plenamente ciente que lhe é vedado (proibido)
              o compartilhamento, cessão ou qualquer meio de transferência dos
              documentos adquiridos desta plataforma para terceiros.
            </Dialog.Description>

            <div className="flex flex-col gap-2 w-full py-5">
              <label className="flex w-full gap-3">
                <input
                  className="w-6 h-6"
                  type="checkbox"
                  name="accepted"
                  checked={accepted}
                  onChange={handleAccepted}
                />
                Sim, utilizarei apenas para minha atividade Profissional e de
                minha equipe.
              </label>
              <label className="flex w-full gap-3">
                <input
                  className="w-6 h-6"
                  type="checkbox"
                  name="notAccepted"
                  checked={!accepted}
                  onChange={handleAccepted}
                />
                Não concordo com os termos de uso.
              </label>
            </div>
            {error && (
              <p className="text-red-500">
                Necessário aceitar os termos de uso
              </p>
            )}
          </>
        );
      case 2:
        return (
          <>
            <Dialog.Description className="h-full md:w-full flex items-center justify-center md:h-[180px]  text-justify text-base text-[#072137] px-5 py-2 ">
              Considerando que os documentos modelos foram elaborados e
              sugeridos por Juristas e profissionais da área da saúde, em
              atividade meio, é obrigação da contratante revisar e alterar
              qualquer conteúdo que, sob a sua ótica, esteja em desacordo com as
              melhores práticas na área da saúde e demais assuntos pertinentes a
              área de conhecimento da Contratante. A contratante ao utilizar os
              documentos modelos não promovendo alteração no conteúdo de saúde
              ou jurídico valida o conteúdo dos modelos automaticamente, como
              adequados.
            </Dialog.Description>

            <div className="flex gap-2 w-full py-5">
              <div className="flex flex-col gap-2 w-full py-5">
                <label className="flex w-full gap-3">
                  <input
                    className="w-6 h-6"
                    type="checkbox"
                    name="accepted"
                    checked={notAccepted}
                    onChange={handleNotAccepted}
                  />
                  Sim, farei as alterações que julgar necessário.
                </label>
                <label className="flex w-full gap-3">
                  <input
                    className="w-6 h-6"
                    type="checkbox"
                    name="notAccepted"
                    checked={!notAccepted}
                    onChange={handleNotAccepted}
                  />
                  Não concordo com os termos de uso.
                </label>
              </div>
            </div>
            {error && (
              <p className="text-red-500">
                Necessario aceitar os termos de uso
              </p>
            )}
          </>
        );
      case 3:
        return (
          <div className="h-full md:w-full flex flex-col items-center justify-center md:h-[180px] text-justify text-base text-[#072137] px-5 py-2 mt-10 ">
            <p>
              Ao aceitar os termos de uso, você concorda em cumprir e respeitar
              integralmente as seguintes diretrizes e condições estabelecidas
              neste documento. Estes termos de uso formam um contrato legal
              entre você e GuedesBampi Publicações e regem o uso de nossos
              serviços e plataformas online.
            </p>
            <div className="flex-col py-4 md:flex md:flex-row gap-2 justify-center items-center w-full ">
              <button
                className=" w-[280px]  md:mt-4 mb-8  rounded-md bg-green-700 px-6 py-3 font-medium text-white"
                onClick={handleAcceptedTerms}
              >
                Aceito os termos de uso
              </button>

              <button
                className=" w-[280px]  md:mt-4 mb-8  rounded-md bg-red-700 px-6 py-3 font-medium text-white"
                onClick={handleCancel}
              >
                Não aceito os termos de uso
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  // Volta o modal
  const handleMenus = () => {
    setCurrentStep(currentStep - 1);
  };
  //Avança o modal
  const handlePlus = () => {
    if (
      (currentStep === 1 && !accepted) ||
      (currentStep === 2 && !notAccepted)
    ) {
      setError(true);
      return;
    }

    setCurrentStep(currentStep + 1);
  };
  const handleAccepted = () => {
    setAccepted(!accepted);
    setError(accepted);
  };
  const handleNotAccepted = () => {
    setNotAccepted(!notAccepted);
    setError(notAccepted);
  };
  const handleAcceptedTerms = async () => {
    if (accepted === true && notAccepted === true) {
      setTermsAccepted(true);
      const request = await fetch("/api/terms", {
        method: "POST",
        body: JSON.stringify({ accepted, notAccepted }),
      });
      const reponse = await request.json();

      setNextTerms(false);
      setIsOpen(false);
      setCurrentStep(1);
    } else {
      return alert("Error");
    }
  };
  const handleCancel = () => {
    setNextTerms(false);
    setIsOpen(false);
    setCurrentStep(1);
    setAccepted(false);
    setNotAccepted(false);
  };
  return (
    <Dialog
      className="  bg-opacity w-full h-full top-0 bottom-0 left-0 z-50  right-0 py-10 absolute "
      open={isOpen}
      onClose={handleCancel}
      style={{ overflowY: "scroll" }}
    >
      <Dialog.Panel className=" overflow-auto md:flex items-center justify-start flex-col w-full h-full  md:h-[500px] md:w-[50%] mx-auto  py-4  bg-white px-5  rounded-md  relative">
        <div className="w-full flex items-center justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8  rounded-full border-2 border-red-600"
          >
            X
          </button>
        </div>

        <Dialog.Title className="text-lg md:text-2xl text-[#072137] font-semibold">
          Termos e Condições de Uso{" "}
        </Dialog.Title>
        <div>{getLayout()}</div>
        <div className="w-full flex items-center justify-center gap-2">
          {
            currentStep === 1 ?
            <>
            
            </>
            :
            <button
            className="border-2 border-gray-400 py-1 px-4 bg-slate-400 rounded-md"
            onClick={handleMenus}
            disabled={currentStep === 1}
          >
            Voltar
          </button>
          }
        
          {currentStep === 3 ? (
            <></>
          ) : (
            <button
              className="border-2 border-gray-400 py-1 px-4 bg-slate-400 rounded-md"
              onClick={handlePlus}
              disabled={currentStep === 3}
            >
              Próximo
            </button>
          )}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
