import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/charts/Chart'
import List from '../list/List'
import Datatable from '../../components/datatable/Datatable'
import MyTable from '../../components/table/MyTable'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src='https://www.soyuz.ru/public/uploads/files/2/7072143/20170617131019a15ce8dda0.png' alt=''
                   className='itemImg' />
              <div className='details'>
                <h1 className='itemTitle'>Jon Snow</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email: </span>
                  <span className='itemValue'>jonsnow@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone: </span>
                  <span className='itemValue'>+1 25544788566</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address: </span>
                  <span className='itemValue'>Elton st. 234 New York</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country: </span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User spending ( Last 6 month )' />
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <MyTable />
        </div>
      </div>
    </div>
  )
}

export default Single