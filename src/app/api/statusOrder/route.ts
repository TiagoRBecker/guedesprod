import { NextResponse } from "next/server";
import prisma from "@/server/prisma";

export async function POST(req: Request) {
  const data = await req.json()
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
  console.log(response.customer.email)
  return NextResponse.json({ message:response.customer.email});
}
