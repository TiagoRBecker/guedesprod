import { NextResponse } from "next/server";
import prisma from "@/server/prisma";

export async function GET(req: Request) {
  const products = await prisma.products.findMany({
    orderBy:{
      updateAt:"asc"
    },
    select:{
      id:true,
      title:true,
      price:true,
      img:true,
    
    }
    
    
  });
  return NextResponse.json({ products });
}


