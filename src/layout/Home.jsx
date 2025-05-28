import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import ProductList from '../components/ProductList'
import loader from '../assets/loading.gif'
import logo from '../assets/Logo Que Sea.png'
import './styleHome.css'

const Home = ({ cart, productos, loading, agregar, borrar, vaciar }) => {
    const destacados = productos.filter(producto => [1, 2, 3, 4].includes(Number(producto.Id)));

    return (
        <>
            <Header borrar={borrar} cartItems={cart} vaciar={vaciar} />

            <main>
                <section className='section-hero'>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
                        <img className="logo-quesea" src={logo} alt='Logo QueSea de Barro' />
                        <h1>¡Hola!</h1>
                        <h3>Qué bueno tenerte de vuelta</h3>
                        <br />
                        <Link className="link-ver" to='/Productos'>Ver productos</Link>
                    </div>
                </section>
                {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 10px' }}>
                    <p><strong>TAREAS PENDIENTES:</strong></p>
                    <p>Index: banner - productos destacados - reseñas</p>
                    <p>Productos: mejorar style cards</p>
                    <p>Sobre mí - Acerca de - completar info + galeria-fotos</p>
                    <p>Filtro para barra de busqueda</p>
                </div> */}

                <section className='section-destacados'>
                    <div>
                        <h2 style={{ margin: "20px", textAlign: "center" }}>Productos destacados</h2>
                        {loading ? (
                            <div className="loader-container">
                                <img src={loader} alt="Loading..." className="loader-image" />
                            </div>
                        ) : (
                            <ProductList productos={destacados} agregar={agregar} />
                        )}
                    </div>
                </section>

                <section className='section-reviews'>
                    <h2 style={{ margin: "20px", textAlign: "center" }}>Reseñas</h2>

                </section>

            </main>
            <Footer />
        </>
    )
}

export default Home
