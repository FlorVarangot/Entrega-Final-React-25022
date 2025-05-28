import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleProductos.css'
import { toast } from 'react-toastify'

const Productos = ({ producto, agregar }) => {

    const [cantidad, setCantidad] = useState(1);

    const increase = () => setCantidad(prev => (prev < producto.Stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : prev));

    const handleClick = () => {
        agregar(producto, cantidad);
        toast.success(
            <span><strong>{producto.Nombre}</strong> agregado al carrito!</span>,
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: false,
                theme: "light",
                style: { backgroundColor: "#ffe4c4", color: "#2f4f4f" }
            }
        );
    };

    return (
        <section className='card'>
            <div className='imagen-container'>
                <img src={producto.Imagen} alt={producto.Nombre} className='imagen' />
            </div>

            <h3 className='nombre'>{producto.Nombre}</h3>
            <p className='descripcion'>{producto.Descripcion}</p>
            <p className='categoria'>{producto.Categoría}</p>
            <p className='precio'>$ {producto.Precio}</p>
            <p className='stock'>{producto.Stock ? 'Hay stock' : 'No hay stock'}</p>

            <div className='cantidad-container'>
                <button
                    className='qty-button'
                    onClick={decrease}
                    disabled={cantidad === 1}
                >
                    -
                </button>
                <span>{cantidad}</span>
                <button className='qty-button' onClick={increase}> + </button>
            </div>


            <button
                onClick={producto.Stock > 0 ? handleClick : null}
                disabled={producto.Stock === 0}
                className={`wanted-button ${producto.Stock === 0 ? 'disabled' : 'activo'}`}
            >
                ¡QueSea mio!
            </button>

            <button className='button-ver-mas'>
                <Link className="link-ver-mas" to={`/productos/${producto.Id}`}>Ver más</Link>
            </button>

        </section>
    )
}
export default Productos
