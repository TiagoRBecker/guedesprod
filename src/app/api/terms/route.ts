import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/server/prisma";
import { authOptions } from "@/utils/authOptions";
export async function POST(req: Request) {
const session = await getServerSession(authOptions)
   
  const {accepted,notAccepted}= await req.json()
   if(accepted === true && notAccepted === true){
     const terms = await prisma.termsOfUse.create({
        data:{
            term_one:"Considerando que os documentos criados pela Contratada pertencem a propriedade intelectual da Contratada podendo ser cedido somentepara uso exclusivo da clinica, instituto ou profissional oracontratante, sendo vedado a sua divulgação, venda oucompartilhamento com terceiros DRM- Digital Rights Management). Ocomprador está ciente que lhe é vedado proibido o compartilhamento ou revenda dos documentos adquiridos:",
            value_one:accepted,
            term_two:"Considerando que os documentos modelos foram elaborados esugeridos por Advogados, em atividade meio, com o auxílio técnicode profissionais da área da saúde, sendo obrigação da contratanterevisar e alterar qualquer conteúdo que, sob a sua ótica, estejaem desacordo com as melhores práticas na área da saúde, bem comoeventual evolução das técnicas e recomendações clinicaspertinentes a área de conhecimento da Contratante. Desta forma, Acontratante ao utilizar os documentos modelos não promovendoalteração quanto ao conteúdo de saúde ou jurídico estará validandoo conteúdo dos modelos automaticamente.",
            value_two:notAccepted,
            userId:session?.user.id
        }
     })
    return NextResponse.json({message:"Ok"},{status:200})
   }
    
}
export async function GET(req: Request) {
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({message:"Não autorizado"},{status:403})
    }
    const privacy = await prisma.user.findUnique({
        where:{
            id:session.user.id
        },
        select:{
            terms:true
        }
        
       
    })
    return NextResponse.json({privacy},{status:200})
}