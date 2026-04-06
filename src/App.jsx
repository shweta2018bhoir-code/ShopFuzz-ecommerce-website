import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import './App.css';
import Product from './pages/Product.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import BuyNowPage from './pages/BuyNowPage.jsx';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Orders from './pages/Orders.jsx';
import ProtectedRoute from './context/ProtectedRoute.jsx';

function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={< Home />}/>
        <Route path="/Register" element={< Register />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Product/:id' element={
          <ProtectedRoute>
            <ProductDetails/>
            </ProtectedRoute>
          } />
        <Route path='/BuyNow/:id' element={
          <ProtectedRoute>
            <BuyNowPage/>
          </ProtectedRoute>
          }/>
        <Route path='/Cart' element={
          <ProtectedRoute>
            <Cart/>
          </ProtectedRoute>
          }/>
        <Route path='/Wishlist' element={
          <ProtectedRoute>
            <Wishlist/>
          </ProtectedRoute>
          }/>
        <Route path='/Orders' element={
          <ProtectedRoute>
            <Orders/>
          </ProtectedRoute>
          }/>
      </Routes>       
    </BrowserRouter>
      
    </>
  )
}

export default App
