import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/server/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },

  pages: {
    signOut: "/",
    signIn:"/authentication/signin"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req): Promise<any> {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (user && !user.password) {
          throw new Error("Usuário cadastrado via google");
        
        }
        const hash = await bcrypt.compare(
          credentials.password,
          user?.password as string
        );
        if (!hash) {
          throw new Error("E-mail ou senha  inválido");
        }
        return {
          id: user?.id,
          name: user?.name,
          email: user?.email,
          image: user?.image,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }): Promise<any> => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }): Promise<any> => {
      if (token) {
        session.user = token.user as any;
      }
      return session;
    },
  },
};
