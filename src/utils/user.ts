
import { getServerSession } from "next-auth/next"

import { redirect } from "next/navigation"
import { authOptions } from "./authOptions"


export default async function ServerPage() {
    const session = await getServerSession(authOptions)

    return session
}