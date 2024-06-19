import prisma from "@/server/prisma";
import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
import { SendEmailDoc } from "@/utils/sendEmails";

export async function POST(req: Request, res: Response) {
  const { data } = await req.json();

  const aws = await new S3Client({
    region: "sa-east-1",
    credentials: {
      accessKeyId: process.env.AWSID,
      secretAccessKey: process.env.AWSKEY,
    },
  } as any);

  try {
    const items = data.items.map((id: any) => parseInt(id.code));
    const getDocs = await prisma.products.findMany({
      where: {
        id: {
          in: items,
        },
      },
    });

    let archives = [];
    for (const i of getDocs) {
      const id = `${i.id}.rar`;

      const getObjectCommand = new GetObjectCommand({
        Bucket: "guedesprontuarios",
        Key: id,
      });
      const url = await getSignedUrl(aws, getObjectCommand, {
        expiresIn: 3 * 60 * 60, 
    });

      archives.push({
        id: i.id,
        name: i.title,
        //@ts-ignor
        url: url,
        icon: "Baixar Arquivo!",
      });
    }
    //Hook para envio de emails 
    const sendEmail = await SendEmailDoc(data, archives);
   

    return NextResponse.json(
      { message: "E-mail e nota fiscal enviadas com sucesso !" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
