import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './css/style.css'
import MainLayout from './Layout/MainLayout'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import { Provider } from 'react-redux'
import Login from './pages/login'
import { Toaster } from 'react-hot-toast'
import Checkout from './pages/Checkout' 
import Register from './pages/Register'
import Singleview from './pages/Singleview'
import Orderhistory from './pages/Orderhistory'

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ProductList />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/Orderhistory' element={<Orderhistory/>}/>
            <Route path='/product-details/:productid' element={<Singleview/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
