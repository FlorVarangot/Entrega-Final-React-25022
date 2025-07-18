import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import loader from '../assets/loading.gif'
import logo from '../assets/Logo Que Sea.png'
import './styleHome.css'
import { ProductosContext } from '../context/productsContext'
import Productos from '../components/Productos'

const Home = () => {

    const { productos, loading } = useContext(ProductosContext)
    const destacados = productos.filter(p => [7, 8, 9, 10, 11, 12].includes(Number(p.id)))

    return (
        <>
            <Header />
            <main>
                <section className='section-hero'>
                    <div className='home-hero'>
                        <img className="logo-quesea" src={logo} alt='Logo QueSea de Barro' />
                        <h1 className='title'>¡Hola!</h1>
                        <h3 className='title'>Qué bueno tenerte de vuelta.</h3>
                        <br />
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            <Link className="link-ver" to='/Productos'>Ver Productos</Link>
                        </div>
                    </div>
                </section>

                <section className='section-destacados'>
                    <div>
                        <h2 className='title' style={{ margin: "20px", textAlign: "center" }}>Productos destacados</h2>
                        {loading ? (
                            <div className="loader-container">
                                <img src={loader} alt="Loading..." className="loader-image" />
                            </div>
                        ) : (
                            <div className="productos-grid">
                                {destacados.map(producto => (
                                    <Productos key={producto.id} producto={producto} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Link className="link-ver" to='/Productos'>Ir a Productos</Link>
                    </div>
                </section>

                <section className='section-reviews'>
                    <h2 className='title' style={{ margin: "20px", textAlign: "center" }}>Opiniones</h2>
                    <div className="reviews-grid">
                        <div className="review">
                            <p className="review-nombre">Ludmila V</p>
                            <p className="review-estrellas">★★★★☆</p>
                            <p className="review-texto">Hermoso taller, las clases me encantan y la profe Majo una genia</p>
                        </div>
                        <div className="review">
                            <p className="review-nombre">Anónimo</p>
                            <p className="review-estrellas">★★★★★</p>
                            <p className="review-texto">Majo la mejor profe 💜...</p>
                        </div>
                        <div className="review">
                            <p className="review-nombre">Santiago</p>
                            <p className="review-estrellas">★★★★★</p>
                            <p className="review-texto">Increíble el taller, gracias !!</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Link to="/acercade" className="link-ver">Ver más opiniones</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home
