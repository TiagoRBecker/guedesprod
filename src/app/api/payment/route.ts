import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import prisma from "@/server/prisma";

export async function POST(req: Request, res: Response) {
  const { data, cart} = await req.json();

 const  ids = cart.map((id:any)=> {return id.id})
 const session = await getServerSession(authOptions)
 
 
 
 
  try {
   const products = await prisma.products.findMany({
    where:{
      id:{
        in:ids
      }
    }
  })
    const items = products.map((item: any) => {
      return {
        code: item.id,
        quantity: 1,
        amount: item.price ,
        description: item.title,
      };
    });
    const totalAmount = items.reduce((accumulator:any, currentValue:any) => {
      return accumulator + currentValue.amount;
    }, 0);
   
  
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization:`Basic ${process.env.GAT_DEV}`,
      },
      body: JSON.stringify({
        customer: {
      
            name: session?.user.name,
            email: session?.user.email,
  
          
          metadata:{ id: session?.user.id}
        },
        items: items,
      
        payments: [
          {
            payment_method: "checkout",
            
            checkout: {
              expires_in: 108000,
              default_payment_method: "pix",
              accepted_payment_methods: ["pix", "credit_card"],
              success_url: "http://localhost:3000/sucess",
              skip_checkout_success_page: true,
              customer_editable: true,
              billing_address_editable: true,
              Pix: {
                expires_in: 108000,
              },
              credit_card: {
                installments: [
                  {
                    number: 1,
                    total: totalAmount + 10,
                  },
                  {
                    number: 2,
                    total: totalAmount  ,
                  },
                  {
                    number: 3,
                    total: totalAmount  ,
                  },
                  {
                    number: 4,
                    total: totalAmount  ,
                  },
                  {
                    number: 5,
                    total: totalAmount  ,
                  },
                ],
                statement_descriptor: "GuedesBampi",
              },
            },
  
           
          },
        ],
        
       
         closed: true,
      }),
     
    }
    const request = await fetch("https://api.pagar.me/core/v5/orders", options);

    const response = await request.json();
  
    if (response.checkouts[0].payment_url) {
      

      return NextResponse.json({ data: response.checkouts[0].payment_url, status:200 },{status:200});
    }
    else{
      return NextResponse.json({message:response.message})
    }
  } catch (error) {
    console.log(error);
    
   return  NextResponse.json({error:error})
  }
  
  

 
}
