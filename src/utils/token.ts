'use server'
 import {randomUUID } from "crypto"
import { cookies } from 'next/headers'
 
export const  createCookies = async(name:any,) =>{
   const token = randomUUID()
  cookies().set({
    name: name,
    value: token,
    httpOnly: true,
    path: '/',
    maxAge:10000
  })
}