import React, { useState, useContext } from 'react'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import ProductList from '../components/ProductList'
import { ProductosContext } from '../context/productsContext'
import { CartContext } from '../context/cartContext'
import { SearchContext } from '../context/searchContext'
import loader from '../assets/loading.gif'
import './styleGaleria.css'


const GaleriaProductos = () => {
    const { productos, loading } = useContext(ProductosContext)
    const { borrar, vaciar } = useContext(CartContext)
    const { categoriaSeleccionada, setCategoriaSeleccionada } = useContext(SearchContext)


    const productosFiltrados = categoriaSeleccionada
        ? productos.filter(item => item.Categoria === categoriaSeleccionada)
        : productos

    return (
        <>
            <Header borrar={borrar} cartItems={[]} vaciar={vaciar} />
            <main>
                <h1 className='title'>PRODUCTOS</h1>
                <div className="filter-container">
                    <select
                        name="filter"
                        id="filter"
                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                        value={categoriaSeleccionada}
                        className="custom-select"
                    >
                        <option value="">Seleccionar...</option>
                        <option value="Utilitario">Utilitarios</option>
                        <option value="Joyeria">Joyería</option>
                        <option value="Gift">Giftcards</option>
                        <option value="Taller">Cursos, Seminarios y talleres</option>
                        <option value="Insumo">Insumos</option>
                    </select>

                    <button onClick={() => setCategoriaSeleccionada('')} className="clear-btn">
                        Limpiar filtros
                    </button>
                </div>

                {loading ? (
                    <div className="loader-container">
                        <img src={loader} alt="Loading..." className="loader-image" />
                    </div>
                ) : (
                    <ProductList productos={productosFiltrados} />
                )}
            </main>
            <Footer />
        </>
    )
}

export default GaleriaProductos
