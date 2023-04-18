import React from 'react'
import './worldstatistics.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import {geoData} from '../../dataTableSource'
import Geography from '../../components/geo/Geography'

const WorldStatistics = ({title}) => {
  return (
    <div className='world'>
      <Sidebar />
      <div className='worldContainer'>
        <Navbar />
        <div className='topWorld'>
          <h1>{title}</h1>
        </div>
        <div className='centerWorld'>
          <Geography data={geoData}/>
        </div>
      </div>
    </div>
  )
}

export default WorldStatistics