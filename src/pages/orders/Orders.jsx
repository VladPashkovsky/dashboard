import React from 'react'
import './orders.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataFirebase from '../../components/datafirebase/DataFirebase'
import OrdersDataFirebase from '../../components/datafirebase/OrdersDataFirebase'

const Orders = () => {
  return (
    <div className='orders'>
      <Sidebar />
      <div className='ordersContainer'>
        <Navbar />
        {/*<Datatable />*/}
        <OrdersDataFirebase />
      </div>
    </div>
  )
}

export default Orders