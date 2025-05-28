import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './styleDetalle.css'
import { toast } from 'react-toastify';


const Detalle = ({ productos, agregar }) => {
  const { id } = useParams();
  const producto = productos.find(prod => prod.Id == id);
  const handleClick = () => {
    agregar(producto, 1);
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
    <main className="detalle-container">
      {producto ? (
        <section className="detalle-producto">
          <h2>{producto.Nombre}</h2>
          <img src={producto.Imagen} alt={producto.Nombre} />
          <p>{producto.Descripcion}</p>
          <p>Categoría: {producto.Categoria}</p>
          <p className='producto-precio'>$ {producto.Precio}</p>

          {producto.Stock > 0 ? (
            <button className="wanted-button" onClick={handleClick}>
              ¡QueSea mío!
            </button>
          ) : (
            <p className="mensaje-stock">Este producto está agotado.</p>
          )}


        </section>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </main>
  )
}

export default Detalle
