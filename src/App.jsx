import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './layout/Home'
import AcercaDe from './layout/AcercaDe'
import Productos from './layout/GaleriaProductos'
import Contacto from './layout/Contacto'
import NotFound from './layout/NotFound'
import DetalleProducto from './layout/DetalleProducto'
import Admin from './layout/Admin'
import Login from './layout/Login'
import RutaProtegida from './auth/RutasProtegidas'


function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    fetch('/data/productos.json')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setProductos(data)
          setLoading(false)
        }, 3000)
      })
      .catch(error => {
        console.log('Error: ', error)
        setLoading(false)
        setError(true)
      })

  }, [])

  const handleAddToCart = (producto, cantidad) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.Id === producto.Id);

      if (existingItem) {
        const nuevaCantidad = existingItem.cantidad + cantidad;

        return nuevaCantidad <= producto.Stock
          ? prevCart.map(item => item.Id === producto.Id
            ? { ...item, cantidad: nuevaCantidad }
            : item)
          : prevCart;
      } else {
        return cantidad <= producto.Stock
          ? [...prevCart, { ...producto, cantidad }]
          : prevCart;
      }
    });
  };

  const handleRemoveFromCart = (producto) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.Id === producto.Id) {
          if (item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 };
          } else {
            return null;
          }
        } else {
          return item;
        }
      }).filter(item => item !== null);
    });
  };

  const handleClearCart = () => {
    // console.log('Carrito vaciando...');
    setCart([]);
  };


  return (
    <Router>
      <ToastContainer autoClose={3000} position="top-right" />
      <Routes>
        <Route path='/' element={<Home agregar={handleAddToCart} borrar={handleRemoveFromCart} vaciar={handleClearCart} cart={cart} productos={productos} loading={loading} />} />

        <Route path='acercade' element={<AcercaDe cart={cart} borrar={handleRemoveFromCart} vaciar={handleClearCart}  />} />

        <Route path='productos' element={<Productos agregar={handleAddToCart} borrar={handleRemoveFromCart} vaciar={handleClearCart} cart={cart} productos={productos} loading={loading} />} />

        <Route path='productos/:id' element={<DetalleProducto agregar={handleAddToCart} borrar={handleRemoveFromCart} vaciar={handleClearCart} cart={cart} productos={productos} loading={loading} />} />

        <Route path='contacto' element={<Contacto cart={cart} borrar={handleRemoveFromCart} vaciar={handleClearCart} />} />

        <Route path='admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida> } />

        <Route path='login' element={<Login/>} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </Router>
  )
}

export default App
