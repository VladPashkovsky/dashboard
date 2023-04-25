import React from 'react'
import './profile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Resume from '../../components/resume/Resume'


const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar />
      <div className='profileContainer'>
          <Resume />
      </div>
    </div>
  )
}

export default Profile