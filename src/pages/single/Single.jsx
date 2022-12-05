import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/charts/Chart'
import MyTable from '../../components/table/MyTable'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'


const Single = () => {
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    const newData = onSnapshot(doc(db, 'users', id), (doc) => {
      setData({...doc.data()})
    })
    return () => newData()
  }, [id])


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
              <img src={data.img} alt=''
                   className='itemImg' />
              <div className='details'>
                <h1 className='itemTitle'>{data.displayName}</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email: </span>
                  <span className='itemValue'>{data.email}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone: </span>
                  <span className='itemValue'>{data.phone}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address: </span>
                  <span className='itemValue'>{data.address}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country: </span>
                  <span className='itemValue'>{data.country}</span>
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