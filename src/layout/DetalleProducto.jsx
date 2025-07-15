import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import Detalle from '../components/Detalle'
import loader from '../assets/loading.gif'
import '../components/styleDetalle.css'

const DetalleProducto = ({ loading }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Header />
            <main>
                {loading ? (
                    <div className="loader-container">
                        <img src={loader} alt="Loading..." className="loader-image" />
                    </div>
                ) : (
                    <Detalle />
                )}

                <div className='volver-container'>
                    <Link className="link-volver" to="/productos">
                        Volver a Productos
                    </Link>
                </div>
                <div className="contacto-container">
                    <div className="contacto-texto">
                        <p>¿Dudas? ¿Consultas? ¿Comentarios?</p>
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
