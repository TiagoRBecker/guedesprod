import { NextResponse } from "next/server";
import prisma from "@/server/prisma";

export async function POST(req: Request) {
  const data = await req.json()

  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Basic ${process.env.GAT_DEV}`,
      },
    };
    const request = await fetch(
      `https://api.pagar.me/core/v5/orders/${data.id}`,
      options
    );
    const response = await request.json();
    if(response.status === "paid"){
      return NextResponse.json({ message:response.customer.email},{status:200});
    }
    else{
      return NextResponse.json({ message:"Não foi possivel localizar seu pagamento entre em contato com a adminstraçao localizada no botao do whtassp para efetuar a compra manualmente."},{status:403});
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message:"Erro no sistema tente novamente mais tarde!"},{status:500});
  }


 
}
