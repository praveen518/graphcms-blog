import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Category = ({cat}: any) => {
    console.log('category',cat)
  return (
    <div className="relative h-72 hover:scale-110 transition duration-700 ease-in-out">
        <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${cat.image.url}')` }} />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
            <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{cat.name}</p>
        </div>
        <Link href={`/category/${cat.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
  )
}

export default Category