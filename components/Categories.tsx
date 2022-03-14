import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getCategories().then((newCategories: any) => setCategories(newCategories))
    }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
        <h3 className='text-xl mb-8 dont-semibold border-b pb-4'>
            Categories
        </h3>
        {categories.map((category: any)=> (
            <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='cursor-pointer block pb-3 mb-3'>
                    {category.name}
                </span>
            </Link>
        ))}
    </div>
  )
}

export default Categories