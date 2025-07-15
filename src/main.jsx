import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from './context/cartContext.jsx'
import { AuthProvider } from './context/authContext.jsx'
import { AdminProvider } from './context/adminContext.jsx'
import { SearchProvider } from './context/searchContext.jsx'
import { ProductosProvider } from './context/productsContext'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/static/scrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
        <AuthProvider>
          <CartProvider>
            <AdminProvider>
              <ProductosProvider>
                <SearchProvider>
                  <App />
                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    closeOnClick
                    draggable={false}
                    theme="light"
                    toastStyle={{ backgroundColor: "#ffe4c4", color: "#2f4f4f" }}
                  />
                </SearchProvider>
              </ProductosProvider>
            </AdminProvider>
          </CartProvider>
        </AuthProvider>
    </Router>
  </StrictMode>,
)
