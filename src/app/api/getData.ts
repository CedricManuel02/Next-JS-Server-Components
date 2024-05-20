"use server";
import { PrismaClient } from '@prisma/client'
import { Product } from '../interface/types';
const prisma = new PrismaClient()

export const getData = async () => {
  try{
    const product : Product[] = await prisma.product.findMany()
    return product
  }catch(err){
    return err
  }
}
  