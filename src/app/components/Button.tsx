"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function Button() {
    const { pending } = useFormStatus()
    return (
        <button className="bg-slate-900 text-white font-medium p-2 rounded" disabled={pending}>
            {pending ? "Adding..." : "Add"}
        </button>
    )
}
