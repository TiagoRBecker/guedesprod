"use client";
import { api } from "@/utils/api";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import Link from "next/link";
const Revory = () => {
  const searchParams = useSearchParams();
  const tk = searchParams.get("tk");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [pass, setPass] = useState("");
  const [passVerify, setPassVerify] = useState("");
  const [loading, setLoading] = useState(false);
  const recoveryPass = async (e: any) => {
    e.preventDefault();
    if (!email) {
      alert("Preencha o campo email");
      return;
    }

    const request = await api.verifyUser(email);
    if (request.email) {
      setError(false);
      setMessage(
        "Email enviado com sucesso! Verifque seu email e caixa de spam!"
      );
      return;
    } else {
      setError(true);
      setMessage(request.message);
      return;
    }
  };
  const changePass = async (e: any) => {
    e.preventDefault();
    if (pass != passVerify) {
      alert("As senhas nao combinam!");
      return;
    }
    const request = await api.recoveryPass(tk as string, pass);
    if (request.message) {
      setLoading(true);
      setError(true);
      setMessage(request.message);
      return;
    }
  };
  if (tk) {
    return (
      <section className="w-full h-screen flex flex-col items-center mt-10">
        {loading ? (
          <div className=" ">
            {message && (
              <div>
                <p className="text-green-400">{message}</p>
                <Link href={"/authentication/signin"} className="btn small">
                  <button className="btn-small">Login</button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <form
            action=""
            className="max-w-md  flex flex-col  gap-2"
            onSubmit={changePass}
          >
            <h1>Cadastrar nova senha!</h1>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Nova Senha"
              className="outline-none my-2 border-[1px] border-gray-400 rounded-md pl-3 w-full h-8"
            />
            <input
              value={passVerify}
              onChange={(e) => setPassVerify(e.target.value)}
              type="password"
              placeholder="Repita Nova Senha"
              className="outline-none my-2 border-[1px] border-gray-400 rounded-md pl-3 w-full h-8"
            />

            <button type="submit" className="btn-small">
              Enviar
            </button>
          </form>
        )}
      </section>
    );
  }
  return (
    <section className="w-full h-screen flex flex-col items-center mt-10">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-[45%] h-[50%] object-cover"
      />
      <form
        action=""
        className="max-w-md  flex flex-col  gap-2"
        onSubmit={recoveryPass}
      >
        <h1>Insira o E-mail cadastrado no sistema</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Insira o email"
          className="outline-none my-2 border-[1px] border-gray-400 rounded-md pl-3 w-full h-8"
        />
        {error ? (
          <p className="text-red-600">{message}</p>
        ) : (
          <p className="text-green-400">{message}</p>
        )}
        <button type="submit" className="btn-small">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Revory;
