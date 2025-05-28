import React from 'react'
import Productos from './Productos'

const ProductList = ({ productos, agregar, modoAdmin, eliminarProducto }) => {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
        {
          productos.map(producto => (
            <div key={producto.Id}>
              <Productos producto={producto} agregar={agregar} />
              
              {modoAdmin && (
                <div className="admin-actions">
                  <button className="edit-btn">✏️ Editar</button>
                  <button className="delete-btn" onClick={() => eliminarProducto(producto.Id)}>🗑️ Eliminar</button>
                </div>
              )}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ProductList
