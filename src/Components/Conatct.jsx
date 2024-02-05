'use client'
import { useAddProductMutation } from '@/app/Store/Middleware/addProductApi';
import { useGetAllproductQuery } from '@/app/Store/Middleware/getAllProductApi'
import React from 'react'

const Conatct = () => {
  const { data, refetch } = useGetAllproductQuery({});
  const [ addProduct ] = useAddProductMutation();
  const handleAddProduct = async() => {
    await addProduct({ 
      todo: 'amrresh new todos',
      completed: false,
      userId: 5
    })
    refetch();
    console.log("addProductApi", data)
  }
  return (
    <div>
      <h1>this is Contact page</h1>
      <button onClick={handleAddProduct}>
        Add Products
      </button>
    </div>
  )
}

export default Conatct