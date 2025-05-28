import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
// import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import './styleAdmin.css'

const Admin = () => {

  // const [modoAdmin, setModoAdmin] = useState(true)

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, { id: productos.length + 1, ...nuevoProducto }])
  }

  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id))
  }

  return (
    <>
      {/* PEND HEADER ADMIN */}
      {/* <HeaderAdmin /> */}

      <main>
        <h1>Panel Administrador</h1>
        <h2>Alta de productos:</h2>
        <div>
          <ProductForm agregarProducto={agregarProducto} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Link className="link-ver-mas" style={{fontSize: 'large', borderRadius: '10px', boxShadow: '0 0 2px var(--primary-color)' }} 
          to="/">Salir</Link>
        </div>
        <div>
          <h2> .. </h2>
          {/* //Productos Admin - PEND */}
          {/* <ProductList productos={productos} eliminarProducto={eliminarProducto} /> */}
          {/* Aquí podrías agregar más funcionalidades de administración, como editar productos, ver estadísticas, etc. */}
        </div>
      </main>
    </>
  )
}

export default Admin
