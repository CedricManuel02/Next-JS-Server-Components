import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'
const prisma = new PrismaClient()

export const insertData = async (formData : FormData) => {
    "use server";
    const name = formData.get('name')
    const price = formData.get('price')
  
    const insert = await prisma.product.create({data: {name: name as string, price: parseInt(price as string)}})
  
    console.log(insert)
    redirect("/")
  }
  