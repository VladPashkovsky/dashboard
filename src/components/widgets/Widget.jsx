import React, { useEffect, useState } from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowUp'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

const Widget = ({ type, link }) => {
  const [amount, setAmount] = useState(null)
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState(null)
  const [orders, setOrders] = useState(null)
  const [diff, setDiff] = useState(null)
  let data

  //temporary
  // const amount = 100
  // const percentage = 20


  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        count: [users],
        link: 'See all users',
        query: 'users',
        icon: (
          <PeopleAltOutlinedIcon
            className='icon'
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }} />),
      }
      break
    case 'order':
      data = {
        title: 'ORDER',
        isMoney: false,
        count: [orders],
        link: 'View all orders',
        icon: (
          <CreditCardOutlinedIcon
            className='icon'
            style={{ color: 'goldenrod', backgroundColor: 'rgba(239,195,71,0.2)' }} />),
      }
      break
    case 'earning':
      data = {

        // title: 'EARNINGS',
        // isMoney: true,
        // link: 'View net earning',
        //   icon: (
        //     <MonetizationOnIcon
        //       className='icon'
        //       style={{ color: 'green', backgroundColor: 'rgba(29,234,86,0.2)' }} />),
      }
      break
    case 'product':
      data = {
        title: 'PRODUCTS',
        count: [products],
        query: 'products',
        link: 'See details',
        icon: (
          <StoreOutlinedIcon
            className='icon'
            style={{ color: 'purple', backgroundColor: 'rgba(188,95,234,0.2)' }} />),
      }
      break
    default:
      break
  }


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const today = new Date()
  //     const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
  //     const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))
  //
  //     const lastMonthQuery = query(collection(db, data.query),
  //       where('timeStamp', '<=', today),
  //       where('timeStamp', '>', lastMonth))
  //
  //     const prevMonthQuery = query(collection(db, data.query),
  //       where('timeStamp', '<=', lastMonth),
  //       where('timeStamp', '>', prevMonth))
  //
  //     const lastMonthData = await getDocs(lastMonthQuery)
  //     const prevMonthData = await getDocs(prevMonthQuery)
  //
  //     setAmount(lastMonthData.docs.length)
  //     setDiff(((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) * 100)
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshotUsers = await getDocs(collection(db, 'users'))
      const querySnapshotProducts = await getDocs(collection(db, 'products'))
      const querySnapshotOrders = await getDocs(collection(db, 'orders'))
      setUsers(querySnapshotUsers.docs.length)
      setProducts(querySnapshotProducts.docs.length)
      setOrders(querySnapshotOrders.docs.length)
    }
    fetchUsers()
  }, [])

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.count}</span>
        {/*<span className='counter'>{data.isMoney && '$'} {amount}</span>*/}
        <span className='link' onClick={link}>{data.link}</span>
        {/*<Link to={link} style={{textDecoration: 'none'}}>*/}
        {/*  <span className='link'>{data.link}</span>*/}
        {/*</Link>*/}
      </div>
      <div className='right'>
        {/*<div*/}
        {/*  className={`percentage ${diff < 0 ? 'negative' : 'positive'}`}>*/}
        {/*  {diff < 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}*/}
        {/*  {diff} %*/}
        {/*</div>*/}
        {data.icon}
      </div>
    </div>
  )
}

export default Widget