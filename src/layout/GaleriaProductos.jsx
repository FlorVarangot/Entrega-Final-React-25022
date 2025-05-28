import React, { useState } from 'react'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import ProductList from '../components/ProductList'
import loader from '../assets/loading.gif'
import './styleGaleria.css'


const GaleriaProductos = ({ cart, productos, loading, agregar, borrar, vaciar }) => {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

    const productosFiltrados = categoriaSeleccionada
        ? productos.filter(item => item.Categoria && item.Categoria.toLowerCase() === categoriaSeleccionada)
        : productos;


    return (
        <>
            <Header borrar={borrar} cartItems={cart} vaciar={vaciar} />
            <h1>Productos</h1>
            <main>
                <div className="filter-container">
                    <select
                        name="filter"
                        id="filter"
                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                        value={categoriaSeleccionada}
                        className="custom-select"
                    >
                        <option value="">Seleccionar...</option>
                        <option value="utilitario">Utilitarios</option>
                        <option value="joyeria">Joyería</option>
                        <option value="gift">Giftcards</option>
                        <option value="taller">Cursos, Seminarios y talleres</option>
                        <option value="insumo">Insumos</option>
                    </select>

                    <button onClick={() => setCategoriaSeleccionada('')} className="clear-btn">Limpiar filtros</button>
                </div>

                {loading ? (
                    <div className="loader-container">
                        <img src={loader} alt="Loading..." className="loader-image" />
                    </div>
                ) : (
                    <ProductList productos={productosFiltrados} agregar={agregar} />
                )}

            </main>
            <Footer />
        </>
    )
}

export default GaleriaProductos
