import React from 'react'
import './profile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Resume from '../../components/resume/Resume'
import Navbar from '../../components/navbar/Navbar'


const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar />
      <div className='profileContainer'>
          {/*<Resume />*/}
      </div>
    </div>
  )
}

export default Profile