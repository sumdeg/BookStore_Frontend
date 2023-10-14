import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const BestSellerBooks = () => {
    const [books,setBooks]=useState([])

    useEffect(()=>{
        fetch("https://localhost:7052/api/books",{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }}).then(res=>res.json())
        .then(data=>setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks