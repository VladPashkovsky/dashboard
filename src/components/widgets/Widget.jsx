import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'

const Widget = ({ type }) => {
  let data

  //temporary
  const amount = 100
  const percentage = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineIcon
            className='icon'
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }} />),
      }
      break
    case 'order':
      data = {
        title: 'Orders',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{ color: 'goldenrod', backgroundColor: 'rgba(239,195,71,0.2)' }} />),
      }
      break
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earning',
        icon: (
          <MonetizationOnIcon
            className='icon'
            style={{ color: 'green', backgroundColor: 'rgba(29,234,86,0.2)' }} />),
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceIcon
            className='icon'
            style={{ color: 'purple', backgroundColor: 'rgba(188,95,234,0.2)' }} />),
      }
      break
    default:
      break
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && '$'} {amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'><KeyboardArrowUpIcon /> {percentage} %</div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget