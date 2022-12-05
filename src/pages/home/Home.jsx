import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/charts/Chart'
import MyTable from '../../components/table/MyTable'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const goToUsers = () => navigate('/users')
  const goToProducts = () => navigate('/products')

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' link={goToUsers}/>
          <Widget type='product' link={goToProducts}/>
          <Widget type='order' link={goToProducts}/>
          <Widget type='earning' link={goToProducts}/>
        </div>
        <div className='charts'>
          <Featured />
          <Chart title='Last 6 months ( Revenue )' aspect={2 / 1} />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <MyTable />
        </div>
      </div>
    </div>
  )
}

export default Home