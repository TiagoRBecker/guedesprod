import { NextResponse } from "next/server"
import prisma from "@/server/prisma"
import nodemailer from "nodemailer";
export async function POST(req: any) {
 const {email} = await req.json()
 const transporter = await nodemailer.createTransport({
    service: "SMTP",
    host: "smtp.hostinger.com",
    port: 465,
    secure:true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
 try {
    const getEmail = await prisma?.user.findUnique({
        where:{
            email:email,
            

        },
        include:{
            sessions:true
        }
    })
     
    if(getEmail){
        const dynamicLink = `https://www.documentosparaharmonizacao.com.br/recovery?tk=${getEmail.id}`
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            replyTo: email,
            to: getEmail.email as string,
            subject: "RECUPERAÇAO DE SENHA! ",
            html: `
            Clique no link abaixo para prosseguir a sua recuperação de senha!<br/>
            <a href="${dynamicLink}">Clique Aqui</a> <br/>
           
            
            `,
         
          });
          
      
         
        return NextResponse.json({email:"Email enviado com sucesso! Verifique seu email e caixa da spam!"})
    }
    else{
        return NextResponse.json({message:"Email não cadastrado no sistema! "},{status:404})
    }
 } catch (error) {
    console.log(error)
    return NextResponse.json({message:"Erro no servidor tente novamente mais tarde!"},{status:500})
 }
 finally{
   await  prisma.$disconnect()
 }
  
 
}