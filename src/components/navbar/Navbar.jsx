import React, { useContext } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import Tooltip from '@mui/material/Tooltip'
import { DarkModContext } from '../../context/darkModContext'

const Navbar = () => {
  const { dispatch, darkMod } = useContext(DarkModContext)

  const fullScreenElement = () => {
    return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
    || document.msFullscreenElement
  }

  const toggleFullScreen = () => {
    if (fullScreenElement()) {
      document.exitFullscreen().catch(console.log)
    } else {
        document.documentElement.requestFullscreen().catch(console.log)
    }
  }

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <Tooltip title='Dark / Light Mode' placement='bottom-start'>
            <div className='item' onClick={() => dispatch({ type: 'TOGGLE' })}>
              {darkMod ? <DarkModeOutlinedIcon className='icon' /> : <LightModeIcon className='icon'/>}
            </div>
          </Tooltip>
          <Tooltip title='Fullscreen' placement='bottom-start'>
            <div className='item' onClick={toggleFullScreen}>
              <FullscreenExitOutlinedIcon className='icon' />
            </div>
          </Tooltip>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <FormatListBulletedOutlinedIcon className='icon' />
          </div>
          <Tooltip title='Code' placement='bottom-start'>
            <div className='item'>
              <a href='https://github.com/VladPashkovsky/admin_dashboard' target='_blank'>
                <img
                  src='https://avatars.githubusercontent.com/u/91205543?s=400&u=f0a2f68b2ece2f8c41a3c3a4a3e89fae5659ed56&v=4'
                  className='avatar'
                />
              </a>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Navbar