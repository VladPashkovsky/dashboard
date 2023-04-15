import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import Products from './pages/products/Products'
import { userInputs, productInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModContext } from './context/darkModContext'
import { AuthContext } from './context/AuthContext'
import NewProduct from './pages/new/NewProduct'
import SingleProduct from './pages/single/SingleProduct'
import Edit from './pages/edit/Edit'
import Orders from './pages/orders/Orders'
import NewOrder from './pages/new/NewOrder'
import Calendar from './pages/calendar/Calendar'

function App() {
  const { darkMod } = useContext(DarkModContext)

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to='/login' />
  }

  return (
    <div className={darkMod ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />

            <Route path='users'>
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=':id' element={<RequireAuth><Single /></RequireAuth>} />
              <Route path='new' element={<RequireAuth><New inputs={userInputs} title='Add New User'/></RequireAuth>} />
            </Route>

            <Route path='edit'>
              <Route path=':id' element={<RequireAuth><Edit title='Edit User'/></RequireAuth>} />
            </Route>

            <Route path='products'>
              <Route index element={<RequireAuth><Products /></RequireAuth>} />
              <Route path=':id' element={<RequireAuth><SingleProduct /></RequireAuth>} />
              <Route path='new' element={<RequireAuth><NewProduct inputs={productInputs} title='Add New Product'/></RequireAuth>} />
            </Route>

            <Route path='orders'>
              <Route index element={<RequireAuth><Orders /></RequireAuth>}/>
              <Route path='neworder' element={<RequireAuth> <NewOrder title='Add New Order'/> </RequireAuth>} />
            </Route>

            <Route path='calendar'>
              <Route index element={<RequireAuth> <Calendar title='Calendar'/> </RequireAuth>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
