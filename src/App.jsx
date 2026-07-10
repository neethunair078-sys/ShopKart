import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
