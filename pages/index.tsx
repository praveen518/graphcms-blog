import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {PostCard, PostWidget, Categories, Category} from '../components'
import {getCategories} from '../services'
import { GetStaticProps } from 'next'
import {FeaturedPosts} from '../sections'

const Home: NextPage = ({categories}: any) => {
  console.log(categories)
  return (
    <div className="container mx-auto px-10 mb-8"> 
      <Head>
        <title>Noob In JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className='px-4 mb-8 mt-8 font-semibold text-gray-500 text-xl'>Featured Posts</h2>
      <FeaturedPosts />
      <hr className='border-solid border-1 border-black'/>
      <h2 className='px-4 mb-8 mt-8 font-semibold text-gray-500 text-xl'>Browse all the categories</h2>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:col-span-8 col-span-1'>
          
        {
          categories.map((category: any, index: any) => (
            <Category cat={category}/>
          ))
        }
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const categories = (await getCategories()) || [];

  return {
    props: { categories }
  }
}
