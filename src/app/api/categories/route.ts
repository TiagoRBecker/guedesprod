import { NextResponse } from 'next/server';
import prisma from '@/server/prisma';

export async function GET(request: Request) {
  
   
   const categories = await prisma.categories.findMany({
      orderBy:{
         updateAt:"desc"

      },
      include:{
         products:{
            select:{
               id:true,
               title:true,
               img:true,
               price:true,
            }
         }
      }
   
   })
   return NextResponse.json({categories},{status:200})
}



