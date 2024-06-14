"use client"
import { useRouter } from "next/navigation";
const NotFound = () => {
   const router = useRouter()
    const redirect = ()=>{
      router.push("/")
    }
  return (
    <div className="w-full h-screen flex flex-col items-center  justify-center">
      <div className="w-full h-[50%] bg-white">
        <h1 className="w-ffull h-full text-center flex items-center text-9xl font-bold text-gray-300 justify-center">404</h1>
      </div>
      <div className="w-full h-[50%] bg-gray-500">
         <h1 className="text-center font-bold text-white">Desculpe, página nao encontrada!</h1>
         <div className="w-[20%] mx-auto pt-4">
         <button onClick={redirect} className="btn-small">Voltar</button>
         </div>
         
      </div>
    </div>
  );
};

export default NotFound;
