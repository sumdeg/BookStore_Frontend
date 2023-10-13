import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const FavoriteBooks = () => {
    const [books,setBooks]=useState([])

    useEffect(()=>{
        fetch("https://localhost:7052/api/books?PageSize=10&PageNumber=1",{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }}).then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default FavoriteBooks