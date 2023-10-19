import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageCategories = () => {
    const [allCategories,setAllCategories]=useState([])
    useEffect(() => {
        fetch("https://localhost:7052/api/categories",{           
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }}).then(res=>res.json())
            .then(data=>setAllCategories(data))
      }, [])

      const handleDelete=(id)=>{
        console.log(id)
        fetch(`https://localhost:7052/api/categories/${categoryId}`, {
          method:"DELETE",
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
           }
        }).then(res=>res.json()).then(data =>
          alert("Category is deleted succesfully!")
        )}

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage categories</h2>

      <Table className='lg:w-[1180px]'>
      <Table.Head>
        <Table.HeadCell>
          No
        </Table.HeadCell>
        <Table.HeadCell>
          Category Name
        </Table.HeadCell>      
        <Table.HeadCell>
          <span >
            Edit or Manage
          </span>
        </Table.HeadCell>
      </Table.Head>
      {
        allCategories.map((category,index)=> <Table.Body className="divide-y" key={category.categoryId}>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index+1}
                </Table.Cell>
                <Table.Cell>
                  {category.categoryName}
                </Table.Cell>
                         
                <Table.Cell>
                  <Link 
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    // to={`/admin/dashboard/edit-books/${book.id}`}
                  >
                      Edit
                  </Link>
                  <button onClick={()=>handleDelete(category.categoryId)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                </Table.Cell>
              </Table.Row>
        </Table.Body> )
      }

    </Table>

    </div>
  )
}

export default ManageCategories   