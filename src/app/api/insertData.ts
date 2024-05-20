"use server";
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';
const prisma = new PrismaClient()

export const insertData = async (formData : FormData) => {
    const name = formData.get('name')
    const price = formData.get('price')
    await prisma.product.create({data: {name: name as string, price: parseInt(price as string)}})
    revalidatePath("/")
  }
  