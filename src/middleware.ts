import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Este segredo deve corresponder ao valor em seu arquivo .env
const secret = process.env.NEXTAUTH_SECRET

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret })

  // Se o usuário tiver um token válido, continue para a rota solicitada
  if (token) {
    return NextResponse.next()
  }

  // Se o usuário não estiver autenticado, redirecione para a página de login
  return NextResponse.redirect(new URL('/authentication/signin', request.url))
}

export const config = {
  matcher: ['/cart','/sucess']
}