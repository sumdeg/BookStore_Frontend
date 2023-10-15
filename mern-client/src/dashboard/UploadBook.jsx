import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
const UploadBook = () => {
  const [bookCategories,setBookCategories]=useState([])

    useEffect(()=>{
        fetch("https://localhost:7052/api/categories",{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }}).then(res=>res.json())
        .then(data=>setBookCategories(data))
    },[])

  const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0])
  const handleChangeSelectedValue=(event)=>{
     // console.log(event.target.value)
      setSelectedBookCategory(event.target.value.categoryName);
  }

  const handleBookSubmit=(event)=>{
      event.preventDefault();
      const form=event.target;

      const title=form.title.value;
      const price=form.price.value;
      const categoryId=form.categoryName.value;
      const authorName=form.authorName.value;
      const imageURL=form.imageURL.value;
      const description=form.description.value;

      const bookObj={
          title,
          price,
          categoryId
      }
     //console.log(bookObj)
      
     fetch("https://localhost:7052/api/books",{
            method:"POST",
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
             body:JSON.stringify(bookObj)
            }).then(res=>res.json()).then(data=>{
                alert("Book uploaded successfully!")
                form.reset();
             })

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[800px] flex-col flex-wrap gap-4">
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
              htmlFor="title"
              value="Book Title"
            />
          </div>
          <TextInput
            id="title"
            name='title'
            placeholder="Book Name"
            required
            type="text"
          />
        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
              htmlFor="authorName"
              value="Author Name"
            />
          </div>
          <TextInput
            id="authorName"
            name='authorName'
            placeholder="Author Name"
            required
            type="text"
          />
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
          <Label
              htmlFor="price"
              value="Price"
            />
          </div>
          <TextInput
            id="price"
            name='price'
            placeholder="Price"
            required
            type="text"
          />
            
        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
              htmlFor="inputState"
              value="Book Category"
            />
          </div>
          <Select id='inputState' name='categoryName' className='w-full rounded ' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option)=><option key={option.categoryId} value={option.categoryId}>{option.categoryName}</option>)
              }
          </Select>
        </div>
      </div>

      <div>
        <div className="mb-2 block">
          <Label
              htmlFor="imageURL"
              value="Book Image URL"
            />
          </div>
          <TextInput
            id="imageURL"
            name='imageURL'
            placeholder="Book Image URL"
            required
            type="text"
          />

      </div>
       <div>
        <div className="mb-2 block">
            <Label
              htmlFor="description"
              value="Book Description"
            />
          </div>
          <Textarea
            id="description"
            name='description'
            placeholder="Write book description..."
            required
            className='w-full'
            rows={6}
          />
          
      </div>
      <Button type="submit" className='mt-5'>
        Upload Book
      </Button>
     
    </form>
    </div>
  )
}

export default UploadBook