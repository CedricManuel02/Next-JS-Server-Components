import React from 'react'
import Button from './Button'
import { insertData } from "../api/insertData"
export default function Form() {
    return (
        <form className="flex flex-col gap-2" action={insertData}>
            <label htmlFor="name">Name</label>
            <input className="border p-2 rounded" type="text" id="name" name="name" placeholder="Enter name" required />
            <label htmlFor="price">Price</label>
            <input className="border p-2 rounded" type="number" id="price" name="price" placeholder="Enter price" required />
            <Button />
        </form>
    )
}
