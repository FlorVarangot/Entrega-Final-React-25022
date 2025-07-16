import React, { useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader'
import ProductForm from '../components/admin/ProductForm'
import FormEdicion from '../components/admin/FormEdicion'
import ProductList from '../components/ProductList'
import { AdminContext } from '../context/adminContext'
import loader from '../assets/loading.gif'
import './styleAdmin.css'

const Admin = () => {
  const formEditRef = useRef(null)
  const {
    productos,
    loading,
    open,
    setOpen,
    openEditor,
    setOpenEditor,
    seleccionado,
    setSeleccionado,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
  } = useContext(AdminContext)

  const location = useLocation();

  useEffect(() => {
    setOpenEditor(false);
    setOpen(false);
  }, [location.pathname]);

  if (loading) {
    return (
      <main className="admin-panel">
        <div className="loader-container">
          <img src={loader} alt="Loading..." className="loader-image" />
        </div>
      </main>
    )
  }

  return (
    <>
      <AdminHeader />
      <main className="admin-panel">
        <section>
          <h1 className='title'>Panel Administrador</h1>
          <div className="boton-alta">
            <button onClick={() => setOpen(true)}>+ Agregar nuevo producto</button>
          </div>
        </section>

        {open && (
          <section className="form-container">
            <button className="cerrar-btn" onClick={() => setOpen(false)}> ✕ </button>
            <ProductForm agregarProducto={agregarProducto} cerrar={() => setOpen(false)} />
          </section>
        )}

        {openEditor && (
          <section ref={formEditRef} className="form-container">
            <button className="cerrar-btn" onClick={() => setOpenEditor(false)}> ✕ </button>
            <FormEdicion producto={seleccionado} actualizarProducto={actualizarProducto} cerrar={() => setOpenEditor(false)} />
          </section>
        )}

        <section className="productos-admin">
          <h3 className='title'>Productos</h3>
          <ProductList
            productos={productos}
            eliminarProducto={eliminarProducto}
            setSeleccionado={setSeleccionado}
            setOpenEditor={setOpenEditor}
            formEditRef={formEditRef}
          />
        </section>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Link className="link-ver-mas" to="/">Ir al Inicio</Link>
        </div>
      </main>
    </>
  )
}


export default Admin
