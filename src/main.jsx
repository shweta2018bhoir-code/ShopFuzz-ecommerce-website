import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext.jsx';
import { StoreProvider } from './context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <StoreProvider>
    <App />
        </StoreProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>,
)
