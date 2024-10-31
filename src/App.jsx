import './App.css'
import { Header } from './components/HeaderComponent/Header'
import { HomePage } from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { UsersPage } from './pages/UsersPage/UsersPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<ProductPage />} />
          <Route path='/users' element={<UsersPage />} />
        </Routes>
    </>
  )
}

export default App
