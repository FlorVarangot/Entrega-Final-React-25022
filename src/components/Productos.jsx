import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styleProductos.css'
import { toast } from 'react-toastify'
import { CartContext } from '../context/cartContext'
import useEsAdmin from '../auth/useEsAdmin'

const Productos = ({ producto, modoAdmin = false }) => {

    const [cantidad, setCantidad] = useState(1);
    const { handleAddToCart } = useContext(CartContext)
    const esAdmin = useEsAdmin() || modoAdmin
    const navigate = useNavigate()

    const increase = () => setCantidad(prev => (prev < producto.Stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : prev));

    const handleClick = () => {
        handleAddToCart(producto, cantidad);
        toast.success(
            <span><strong>{producto.Nombre}</strong> agregado al carrito!</span>,
        )
    }

    return (
        <section className={`product-card ${producto.Stock === 0 ? 'sin-stock' : ''}`}>
            <h3 className='nombre'>{producto.Nombre}</h3>

            <div className='imagen-container'>
                <img src={producto.Imagen} alt={producto.Nombre} className='imagen' />
            </div>

            {producto.Stock === 0 && (
                <div className="sin-stock-label">SIN STOCK</div>
            )}

            <p className='precio'>$ {producto.Precio}</p>

            {esAdmin && (
                <>
                    <p className='categoria'><strong>Categoría:</strong> {producto.Categoria || '—'}</p>
                    <p className='stock'><strong>Stock:</strong> {producto.Stock}</p>
                </>
            )}

            <div className='acciones-producto'>
                {esAdmin ? (
                    <button
                        onClick={() => navigate('/admin')}
                        className="editar-button"
                    >
                        🛠️ Gestionar producto
                    </button>
                ) : (
                    <>
                        <div className='cantidad-container'>
                            <button className="qty-button" onClick={decrease} disabled={cantidad <= 1}>−</button>
                            <span>{cantidad}</span>
                            <button className="qty-button" onClick={increase} disabled={cantidad >= producto.Stock}>+</button>
                        </div>

                        <button
                            onClick={producto.Stock > 0 ? handleClick : null}
                            disabled={producto.Stock === 0}
                            className={`wanted-button ${producto.Stock === 0 ? 'disabled' : 'activo'}`}
                        > ¡QueSea mío! </button>
                    </>
                )}

                <button className='button-ver-mas'>
                    <Link className="link-ver-mas" to={`/productos/${producto.id}`}>
                        {esAdmin ? 'Ver ficha técnica' : 'Ver más'}
                    </Link>
                </button>
            </div>
        </section>
    )

}

export default Productos
