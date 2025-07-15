import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/static/Footer'
import logo from '../assets/Logo Que Sea.png'
import { useAuth } from '../context/authContext'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { useLocation } from 'react-router-dom'

const Success = () => {
    const { user } = useAuth()
    const { cart } = useContext(CartContext)
    const location = useLocation()
    const cantidad = location.state?.cantidad || 0
    const total = location.state?.total || 0
    const detalleCompra = JSON.parse(sessionStorage.getItem('ticketDetalle')) || []
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-AR')
    const hora = ahora.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })

    return (
        <>
            <main>
                <section className='success-section'>
                    <img className="logo-quesea" src={logo} alt='Logo QueSea de Barro' />
                    <div className="success-page">
                        <h1 className='title'>¡Gracias por tu compra!</h1>
                        <p>Te contactaremos pronto con los detalles del envío.</p>
                    </div>
                    <div className="resumen-ticket">
                        <h3>Resumen de tu compra</h3>
                        {user && <p><strong>Comprador:</strong> {user}</p>}
                        <p><strong>Fecha:</strong> {fecha}</p>
                        <p><strong>Hora:</strong> {hora}</p>
                        <hr />
                        <ul className="lista-ticket">
                            {detalleCompra.map((item, idx) => {
                                const precioNumerico = typeof item.Precio === 'string'
                                    ? Number(item.Precio.replace(/\./g, '').replace(',', '.'))
                                    : Number(item.Precio) || 0;

                                const subtotal = item.cantidad * precioNumerico;

                                return (
                                    <li key={idx}>
                                        {item.cantidad} × {item.Nombre} — ${subtotal.toLocaleString('es-AR')}
                                    </li>
                                );
                            })}
                        </ul>
                        <p><strong>Ítems:</strong> {cantidad}</p>
                        <p><strong>Total estimado:</strong> ${total.toLocaleString('es-AR')}</p>
                    </div>
                    <Link to="/" className='qty-button'>Ir a Home</Link>
                    <div className="acciones-postcompra">
                        <Link to="/productos" className='link-ver'>Ver más productos</Link>
                        <Link to="/contacto" className='link-ver'>Contactar por entrega</Link>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default Success
