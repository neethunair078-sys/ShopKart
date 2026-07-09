import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import ProductList from './pages/ProductList'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<ProductList/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
