import { NextResponse } from "next/server"
import prisma from "@/server/prisma"
import bcrypt from "bcrypt";
export async function POST(req: Request) {
    const {name , email , password,profession, docs} = await  req.json()
   
    try {
       
    
      const getUser = await prisma.user.findUnique({
        where:{
            email:email
        }
      })
      if(getUser){
        return NextResponse.json({ message:"Usuário já cadastrado no sistema" },{status:400})

      }
      else{
        const hash = await bcrypt.hashSync(password, Number(process.env.SALT));
        const create = await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:hash,
                profession:profession,
                docs:docs,
                image:"https://res.cloudinary.com/tiagobecker/image/upload/v1693489085/user_c2gvjz.png"
            }
         })
         return NextResponse.json({ message:"Cadastro realizado com sucesso!" },{status:200})
      }
     
   
     
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message:"Erro ao criar ao cadastrar a conta", error },{status:500})
    }
    

 
   

}