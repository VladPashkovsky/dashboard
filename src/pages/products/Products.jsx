import React from 'react'
import './products.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ProductsDataFirebase from '../../components/datafirebase/ProductsDataFirebase'

const Products = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <ProductsDataFirebase />
      </div>
    </div>
  )
}

export default Products