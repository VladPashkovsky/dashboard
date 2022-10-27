import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { Link } from 'react-router-dom'
import { DarkModContext } from '../../context/darkModContext'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModContext)

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Dashboard</span>
        </Link>
      </div>

      <hr />

      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PeopleAltOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>

          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <StoreOutlinedIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <CreditCardOutlinedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <AssessmentOutlinedIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AssignmentIndOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOptions'
             onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className='colorOptions'
             onClick={() => dispatch({ type: 'DARK' })}></div>
      </div>
    </div>
  )
}

export default Sidebar