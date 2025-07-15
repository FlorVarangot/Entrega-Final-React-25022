import { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './styleDetalle.css'
import { toast } from 'react-toastify'
import { ProductosContext } from '../context/productsContext'
import { CartContext } from '../context/cartContext'
import useEsAdmin from '../auth/useEsAdmin'

const Detalle = () => {
  const { handleAddToCart } = useContext(CartContext)
  const { productos } = useContext(ProductosContext)
  const { id } = useParams()
  const producto = productos.find(prod => prod.id == id)
  const [cantidad, setCantidad] = useState(1)
  const esAdmin = useEsAdmin()
  const navigate = useNavigate()

  const handleClick = () => {
    handleAddToCart(producto, cantidad);
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
    )
  }

  return (
    <div className="detalle-container">
      {producto ? (
        <section className="detalle-producto">
          <h2>{producto.Nombre}</h2>
          <img src={producto.Imagen} alt={producto.Nombre} />
          <p>{producto.Descripcion}</p>
          <p>Categoría: {producto.Categoria}</p>
          <p className='producto-precio'>$ {Number(producto.Precio).toLocaleString('es-AR')}</p>

          {esAdmin ? (
            <button
              className="editar-button"
              onClick={() => navigate('/admin')}
            >
              🛠️ Gestionar producto
            </button>
          ) : (
            <>
              <div className="cantidad-container">
                <button className="qty-button" onClick={() => setCantidad(c => Math.max(1, c - 1))} disabled={cantidad <= 1}>−</button>
                <span>{cantidad}</span>
                <button className="qty-button" onClick={() => setCantidad(c => Math.min(producto.Stock, c + 1))} disabled={cantidad >= producto.Stock}>+</button>
              </div>

              {producto.Stock > 0 ? (
                <button className="wanted-button" onClick={handleClick}>
                  ¡QueSea mío!
                </button>
              ) : (
                <p className="mensaje-stock">Este producto está agotado.</p>
              )}
            </>
          )}

        </section>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  )
}

export default Detalle
