import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './css/style.css'
import MainLayout from './Layout/MainLayout'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
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
