import * as React from 'react';

export default function Tailwind() {
  return (
<div className="h-screen bg-gray-200 py-16">
    <h1 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-gray-900">This is design by Tailwind CSS</h1>
    <p className="text-center">CardTailwind</p>
    <ul className="pt-10 text-center">
        <li className="mx-4 inline text-gray-500">Google</li>
        <li className="mx-4 inline text-gray-500">Apple</li>
        <li className="mx-4 inline text-gray-500">Meta</li>
    </ul>
    <button className="mx-auto mt-10 block bg-green-500 px-5 py-3 font-bold uppercase text-white">Find out more</button>
</div>
  )
}