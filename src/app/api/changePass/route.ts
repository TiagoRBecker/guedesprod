import { NextResponse } from "next/server"
import prisma from "@/server/prisma"
import bcrypt from "bcrypt"
export async function POST(req: any) {
 const {tk , pass} = await req.json()
 
 try {
    if(tk){
        const hash = await bcrypt.hashSync(pass, Number(process.env.SALT));
        const changePass = await prisma.user.update({
            where:{
                id:tk
            },
            data:{
                password:hash
            }
        })
        return NextResponse.json({message:"Senha alterada com sucesso !"})
    }
   
 } catch (error) {
    console.log(error)
    return NextResponse.json({message:"Erro no servidor tente novamente mais tarde!"})
    }
    finally{
        await  prisma.$disconnect()
    }
 }
 
  

