import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './css/style.css'
import MainLayout from './Layout/MainLayout'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import { Provider } from 'react-redux'
import Login from './pages/login'
import { Toaster } from 'react-hot-toast'
import Register from './pages/Register'
import Singleview from './pages/Singleview'

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path='/' element={<ProductList />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product-details/:productid' element={<Singleview/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
