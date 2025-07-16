import { useEffect, useContext } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import { useAuth } from '../context/authContext'
import Footer from '../components/static/Footer'
import logo from '../assets/Logo Que Sea.png'

const Success = () => {
    const { setCart } = useContext(CartContext)
    const { user } = useAuth()

    const location = useLocation()
    const { cantidad = 0, total = 0 } = location.state || {}

    const detalleCompra = JSON.parse(sessionStorage.getItem('ticketDetalle')) || []

    const ahora = new Date()
    const fecha = ahora.toLocaleDateString('es-AR')
    const hora = ahora.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })

    if (cantidad === 0) {
        return <Navigate to="/" replace />
    }

    useEffect(() => {
        localStorage.removeItem('cart')
        sessionStorage.removeItem('ticketDetalle')
        setCart([])
    }, [])

    return (
        <>
            <main>
                <section className='success-section'>
                    <img className="logo-quesea" src={logo} alt='Logo QueSea de Barro' />
                    <div className="success-page">
                        <p>(1- Checkout para el pago - Y luego:)</p>
                        <br />
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
                                const precioNumerico = Number(
                                    typeof item.Precio === 'string'
                                        ? item.Precio.replace(/\./g, '').replace(',', '.')
                                        : item.Precio || 0
                                )

                                const subtotal = item.cantidad * precioNumerico;

                                return (
                                    <li key={idx}>
                                        {item.cantidad} x {item.Nombre} — ${subtotal.toLocaleString('es-AR')}
                                    </li>
                                )
                            })}
                        </ul>
                        <p><strong>Ítems:</strong> {cantidad}</p>
                        <p><strong>Total:</strong> ${total.toLocaleString('es-AR')}</p>
                    </div>

                    <Link to="/" className='qty-button'>Confirmar</Link>
                    <div className="acciones-postcompra">
                        <Link to="/productos" className='link-ver'>Ver más productos</Link>
                        <Link to="/contacto" className='link-ver'>Contactar por entrega</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Success
