import React from 'react'
import Form from './components/Form'
import { getData } from './api/getData'
import { Product } from './interface/types'

export default async function page() {
    const product : Product[] = await getData() 
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-100">
          <div className="bg-white p-5 rounded-md shadow">
          <h1>Insert Data into mysql railway using SSR approach</h1>
            <Form/>
          </div>
            <ul>
                {product.map((product, index) => (
                    <li key={product.id}>{index}.{product.name}</li>
                ))}
            </ul>
        </div>
    )
}
