import React from 'react'
import { Link } from 'react-router-dom'
import './styleCart.css'

const Cart = ({ cartItems, isOpen, onClose, borrar, vaciar }) => {

    const totalCantidad = cartItems.reduce((acc, item) => acc + item.cantidad, 0)
    const totalPrecio = cartItems.reduce((acc, item) => {
        const precioNumerico = Number(item.Precio.replace(/\./g, '').replace(',', '.'))
        return acc + (item.cantidad * precioNumerico)
    }, 0)


    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2>Mi carrito</h2>
                <button onClick={onClose} className='close-button'> X </button>
            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <p style={{ color: 'red', fontStyle: 'italic' }}>¡Oops!</p>
                        <p style={{ color: 'red', fontStyle: 'italic' }}>Todavía no hay productos en el carrito.</p>
                    </div>
                ) : (
                    <>
                        <ul className='cart-item'>
                            {cartItems.map((item, index) => {
                                const precioNumerico = Number(item.Precio.replace(/\./g, '').replace(',', '.'))
                                return (
                                    <li key={index} style={{ color: 'black' }}>
                                        {item.cantidad}X {item.Nombre} - ${precioNumerico * item.cantidad}
                                        <button className='trash-button' onClick={() => borrar(item)}>
                                            <i className='fa-regular fa-trash-can'></i>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        <div>
                            <button className='empty-button' onClick={() => vaciar()}>Vaciar carrito</button>
                        </div>


                        <div className="cart-summary">
                            <p><strong>Cantidad total:</strong> {totalCantidad}</p>
                            <p><strong>Total a pagar:</strong> ${totalPrecio.toLocaleString()}</p>
                            <div style={{ marginTop: '10px' }} >
                                <Link className='pay-link' to='#'> Ir a pagar </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default Cart

