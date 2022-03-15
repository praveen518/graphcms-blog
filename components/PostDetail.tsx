import React from 'react'
import moment from 'moment'

const PostDetail = ({post}: any) => {
    console.log('post ',post);
    const getContentFragment = (index: any, text: any, obj: any, type?: any) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
          if(obj.type === 'list-item') {
            modifiedText = [];
            modifiedText.push(obj.children[0].children[0].text);
          }
          if(obj.type === 'code-block'){
            modifiedText = obj.children[0].text.split('\r\n');

          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item: any, i: any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8 text-justify">{modifiedText.map((item: any, i: any) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'bulleted-list':
            console.log(modifiedText);
            return <ul className='list-disc ml-8 py-8'>{modifiedText.map((item: any, index: any) => <li key={item}>{item}</li>)} </ul>
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item: any, i: any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'code-block':
            return <div className='flex justify-center'><pre>{modifiedText.map((item: any, i: any) => <code className='block bg-gray-500 text-white max-w-md'>{item}</code>)}</pre></div>
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
                className='mr-auto ml-auto'
              />
            );
          default:
            return modifiedText;
        }
      };

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
        <div className="relative overflow-hidden shadow-md mb-6">
            <img 
                src={post.featuredImage.url} 
                alt={post.title}
                className= 'object-top h-full w-full rounded-t-lg' 
            />
        </div>
        <div className="px-4 lg:px-0">
            <div className="flex items-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img src={post.author.photo.url} 
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className='align-middle rounded-full' 
                    />
                    <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
            </div>
            <div className='flex flex-col'>
              <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
                {post.content.raw.children.map((typeObj: any, index: any) => {
                  const children = typeObj.children.map((item: any, itemindex: any) => getContentFragment(itemindex, item.text, item));
                  return getContentFragment(index, children, typeObj, typeObj.type);
                })}
            </div>
        </div>
    </div>
  )
}

export default PostDetail