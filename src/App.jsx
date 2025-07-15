import { useState, useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './layout/Home'
import AcercaDe from './layout/AcercaDe'
import Productos from './layout/GaleriaProductos'
import Contacto from './layout/Contacto'
import NotFound from './layout/NotFound'
import DetalleProducto from './layout/DetalleProducto'
import Admin from './layout/Admin'
import Login from './layout/Login'
import Success from './layout/Success'
import Register from './layout/Register'
import Recover from './layout/Recover'
import RutasProtegidas from './auth/RutasProtegidas'
import { useAuth } from './context/authContext'

function App() {

  const { isAuthenticated } = useAuth()

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='acercade' element={<AcercaDe />} />
      <Route path='productos' element={<Productos />} />
      <Route path='productos/:id' element={<DetalleProducto />} />
      <Route path='contacto' element={<Contacto />} />
      <Route path="/admin" element={ <RutasProtegidas requiredRole="admin"> <Admin /> </RutasProtegidas>}/>
      <Route path='login' element={<Login />} />
      <Route path="success" element={<Success />} />
      <Route path='register' element={<Register />} />
      <Route path='recover' element={<Recover />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
