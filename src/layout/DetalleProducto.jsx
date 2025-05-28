import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import Detalle from '../components/Detalle'
import loader from '../assets/loading.gif'
import '../components/styleDetalle.css'

const DetalleProducto = ({ cart, productos, loading, agregar, borrar, vaciar }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <>
            <Header borrar={borrar} cartItems={cart} vaciar={vaciar} />
            <main>
                {loading ? (
                    <div className="loader-container">
                        <img src={loader} alt="Loading..." className="loader-image" />
                    </div>
                ) : (
                    <Detalle productos={productos} agregar={agregar} />
                )}

                <div className="contacto-container">
                    <div className="contacto-texto">
                        <p>¿Dudas? ¿Consultas? ¿Comentarios?</p>
                        <p>¿Necesitas ayuda o asesoramiento?</p>
                    </div>
                    <div className="contacto-boton">
                        <p>¡Escribinos!</p>
                        <Link to="/contacto">Contacto</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default DetalleProducto;
