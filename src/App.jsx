import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import { Provider } from 'react-redux'
import Login from './pages/login'

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login/>}/>
            <Route element={<MainLayout />}>
              <Route path='/' element={<ProductList />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
