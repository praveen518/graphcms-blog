import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories, slug}: any) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(()=>{
        if(slug) {
            getSimilarPosts(categories, slug).then((result: any)=> setRelatedPosts(result))
        } else {
            getRecentPosts().then((result: any)=> setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts);
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h3 className='text-xl mb-8 dont-semibold border-b pb-4'>
            {slug?'Related Posts': 'Recent Posts'}
        </h3>
        {relatedPosts.map((post: any)=>(
            <Link href={`/post/${post.slug}`} key={post.title}>
            <div key={post.title} className="flex items-center w-full mb-4 bg-gray-100 hover:bg-gray-200 rounded-lg p-2 cursor-pointer">
                <div className="w-16 flex-none">
                    <img
                        alt={post.title}
                        height= "60px"
                        width="60px"
                        className='align-middle rounded-full'
                        src={post.featuredImage.url} 
                    />
                </div>
                <div className="flex-grow ml-4">
                    <p className='text-gray-500 font-xs'>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </p>
                        <p className='text-sm'>{post.title}</p>
                   
                </div>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default PostWidget