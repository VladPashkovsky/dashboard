import React from 'react'
import './products.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import DataFirebase from '../../components/datafirebase/DataFirebase'
import { CircularProgress } from '@mui/material'
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