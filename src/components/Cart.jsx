import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import { useAuth } from '../context/authContext'
import Swal from 'sweetalert2'
import './styleCart.css'

const Cart = ({ isOpen, onClose }) => {

    const { cart, handleRemoveFromCart, handleClearCart, handleEndShop } = useContext(CartContext)
    const navigate = useNavigate()
    const { isAuthenticated } = useAuth()

    const totalCantidad = cart.reduce((acc, item) => acc + item.cantidad, 0)
    const totalPrecio = cart.reduce((acc, item) => {
        const precioNumerico = typeof item.Precio === 'string'
            ? Number(item.Precio.replace(/\./g, '').replace(',', '.'))
            : Number(item.Precio) || 0
        return acc + (item.cantidad * precioNumerico)
    }, 0)


    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2>Mi carrito</h2>
                <button onClick={onClose} className='close-button'> X </button>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <p style={{ color: 'red', fontStyle: 'italic' }}>¡Oops!</p>
                        <p style={{ color: 'red', fontStyle: 'italic' }}>Todavía no hay productos en el carrito.</p>
                    </div>
                ) : (
                    <>
                        <ul className='cart-item'>
                            {cart.map((item, index) => {
                                const precioNumerico = typeof item.Precio === 'string'
                                    ? Number(item.Precio.replace(/\./g, '').replace(',', '.'))
                                    : Number(item.Precio) || 0;
                                return (
                                    <li key={index} style={{ color: 'black' }}>
                                        {item.cantidad}X {item.Nombre} - ${precioNumerico * item.cantidad}
                                        <button className='trash-button' onClick={() => handleRemoveFromCart(item)}>
                                            <i className='fa-regular fa-trash-can'></i>
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                        <div>
                            <button className='empty-button' onClick={() => handleClearCart()}>Vaciar carrito</button>
                        </div>

                        <div className="cart-summary">
                            <p><strong>Cantidad total:</strong> {totalCantidad}</p>
                            <p><strong>Total a pagar:</strong> ${totalPrecio.toLocaleString()}</p>
                            <div style={{ marginTop: '10px' }} >
                                <button
                                    className='pay-link'
                                    onClick={() => {
                                        if (!isAuthenticated) {
                                            onClose()
                                            Swal.fire({
                                                title: 'Iniciá sesión para continuar',
                                                text: 'Para finalizar tu compra, primero ingresá a tu cuenta.',
                                                icon: 'info',
                                                confirmButtonText: 'Ingresar',
                                                confirmButtonColor: 'var(--third-color)',
                                                background: 'var(--background-alternativo)',
                                            }).then(() => {
                                                navigate('/login')
                                            })
                                            return
                                        }
                                        sessionStorage.setItem('ticketDetalle', JSON.stringify(cart))
                                        handleEndShop()
                                        onClose()
                                        navigate('/success', {
                                            state: {
                                                cantidad: totalCantidad,
                                                total: totalPrecio
                                            }
                                        })
                                    }}
                                >
                                    Ir a pagar
                                </button>

                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart

