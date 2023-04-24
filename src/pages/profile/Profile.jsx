import React from 'react'
import './profile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import ResumePhoto from './Resume2.jpg'


const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar />
      <div className='profileContainer'>
        <img src={ResumePhoto} alt='' style={{display: 'flex', margin: '0 auto'}}/>
      </div>
    </div>
  )
}

export default Profile