import prisma from "@/server/prisma";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  try {
    const items = {
      code: "2617",
      unitAmount: 9.98,
      quantity: 5,
      cfop: 5102,
      ncm: "47079000",
      codeGTIN: "SEM GTIN",
      codeTaxGTIN: "SEM GTIN",
      tax: {
        totalTax: 6,
        icms: {
          amount: 0,
          rate: 0,
          baseTax: 0,
          baseTaxSTReduction: "33.33",
          baseTaxModality: "3",
          csosn: "102",
          origin: "0",
        },
        pis: {
          amount: 0,
          rate: 0,
          baseTax: 0,
          cst: "09",
        },
        cofins: {
          amount: 0,
          rate: 0,
          baseTax: 0,
          cst: "09",
        },
      },
      cest: "",
      description: "FEIJAO BOLINHA CAMIL 500G NF ENTRADA 1030099 14/05/2018",
    };

    const nfeResponse = await fetch(
      `https://api.nfse.io/v2/companies/cb64373f935c452fa54be2222a58458e/productinvoices`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization:
            "fLUTQ963opclUK0tlQjyP1Mmk28qft9ntQNDuhhzh6SvtvFrAguBLiuaQWbTKB4LZBO",
        },
        body: JSON.stringify({
          buyer: {
            name: "teste",
            email: "beckertiago09@gmail.com",
            address: {
              city: {
                code: "3550308",
                name: "jundiai",
              },
              state: "SP",
              district: "centro",
              street: "rua petronilha antunes",
              postalCode: "13207760",
              number: "204",
              country: "BRA",
            },
            federalTaxNumber: 8662968678,
          },
          items: [items],
        }),
      }
    );

    const response = await nfeResponse.json();
    return NextResponse.json({ response }, { status: 200 });
  } catch (error: any) {
    console.error("Erro na função POST:", error.message);
    return NextResponse.json(
      { message: "Erro no processamento.", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, res: Response) {
  let data;
  try {
    data = await req.json();
  } catch (error: any) {
    console.error("Erro ao analisar JSON:", error);
    return NextResponse.json(
      { message: "Erro ao analisar JSON", error: error.message },
      { status: 400 }
    );
  }

  console.log(data);

  return NextResponse.json(
    { message: "E-mail enviado com sucesso" },
    { status: 200 }
  );
}
