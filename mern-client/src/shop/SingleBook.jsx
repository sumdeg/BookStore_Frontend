import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {id,title,imageURL} = useLoaderData();
 
  return (
    <div className='mt-28 px-4 lg:px-24'>
        {/* <img src={imageURL} alt="" className='h-96' /> */}
        <img src="/src/assets/banner-books/book5.jpg" alt="" className='h-96'/> 
        <h2>{title}</h2>
    </div>
  )
}

export default SingleBook