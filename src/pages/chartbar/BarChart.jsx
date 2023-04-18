import React from 'react'
import './barchart.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import MyResponsiveBar from '../../components/bar/MyResponsiveBar'
import {chartBarData} from '../../dataTableSource'

const BarChart = ({title}) => {
  return (
    <div className='chartbar'>
      <Sidebar />
      <div className='chartbarContainer'>
        <Navbar />
        <div className='topChartBar'>
          <h1>{title}</h1>
        </div>
        <div className='centerChartBar'>
          <MyResponsiveBar data={chartBarData}/>
        </div>
      </div>
    </div>
  )
}

export default BarChart