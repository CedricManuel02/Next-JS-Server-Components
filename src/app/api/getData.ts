"use server";
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'
import { Product } from '../interface/types';
const prisma = new PrismaClient()

export const getData = async () => {
    const product : Product[] = await prisma.product.findMany()
    return product
    redirect("/")
}
  