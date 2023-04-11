import React from 'react'
import './orders.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataFirebase from '../../components/datafirebase/DataFirebase'

const Orders = () => {
  return (
    <div className='orders'>
      <Sidebar />
      <div className='ordersContainer'>
        <Navbar />
        {/*<Datatable />*/}
        <DataFirebase />
      </div>
    </div>
  )
}

export default Orders