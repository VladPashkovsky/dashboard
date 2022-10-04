import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Dashboard</span>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <PeopleAltOutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <StoreOutlinedIcon className='icon'/>
            <span>Products</span>
          </li>
          <li>
            <CreditCardOutlinedIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <AssessmentOutlinedIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AssignmentIndOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOptions'></div>
        <div className='colorOptions'></div>
      </div>
    </div>
  )
}

export default Sidebar