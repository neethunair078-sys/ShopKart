import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './css/style.css'
import MainLayout from './Layout/MainLayout'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import Singleview from './pages/Singleview'

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<ProductList />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product-details' element={<Singleview/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
