import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks,setAllBooks]=useState([])

  useEffect(() => {
    fetch("https://localhost:7052/api/books/details",{           
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }}).then(res=>res.json())
        .then(data=>setAllBooks(data))
  }, [])

  const handleDelete=(id)=>{
    console.log(id)
    fetch(`https://localhost:7052/api/books/${id}`, {
      method:"DELETE",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
       }
    }).then(res=>res.json()).then(data =>
      alert("Book is deleted succesfully!")
    )
    
  }
  
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage books</h2>

      <Table className='lg:w-[1180px]'>
      <Table.Head>
        <Table.HeadCell>
          No
        </Table.HeadCell>
        <Table.HeadCell>
          Book Name
        </Table.HeadCell>
        <Table.HeadCell>
          Author Name
        </Table.HeadCell>
        <Table.HeadCell>
          Category
        </Table.HeadCell>
        <Table.HeadCell>
          Price
        </Table.HeadCell>
        <Table.HeadCell>
          <span >
            Edit or Manage
          </span>
        </Table.HeadCell>
      </Table.Head>
      {
        allBooks.map((book,index)=> <Table.Body className="divide-y" key={book.id}>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index+1}
                </Table.Cell>
                <Table.Cell>
                  {book.title}
                </Table.Cell>
                <Table.Cell>
                  Author Name
                </Table.Cell>
                <Table.Cell>
                  {book.category.categoryName}
                </Table.Cell>
                <Table.Cell>
                  {book.price}
                </Table.Cell>
                <Table.Cell>
                  <Link 
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    to={`/admin/dashboard/edit-books/${book.id}`}
                  >
                      Edit
                  </Link>
                  <button onClick={()=>handleDelete(book.id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                </Table.Cell>
              </Table.Row>
        </Table.Body> )
      }

    </Table>

    </div>
  )
}

export default ManageBooks