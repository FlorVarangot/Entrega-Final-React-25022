import React, { useState } from 'react'
import './styleProductForm.css'

const ProductForm = ({ agregarProducto, cerrar }) => {
  const [producto, setProducto] = useState({
    Nombre: '',
    Descripcion: '',
    Imagen: '',
    Precio: '',
    Categoria: '',
    Stock: '',
    Estado: 'Activo'
  })

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (producto.Nombre && producto.Precio) {
      const nuevoProducto = {
        ...producto,
        Id: Date.now(),
        Precio: Number(producto.Precio),
        Stock: Number(producto.Stock)
      }

      agregarProducto(nuevoProducto)
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado con éxito',
        confirmButtonColor: 'var(--third-color)'
      })

      setProducto({
        Nombre: '',
        Descripcion: '',
        Imagen: '',
        Precio: '',
        Categoria: '',
        Stock: '',
        Estado: 'Activo'
      })
      cerrar()
    }
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div>
        <h2 className='title'>Agregar Producto</h2>
      </div>
      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" name="Nombre" value={producto.Nombre} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea name="Descripcion" value={producto.Descripcion} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Imagen (URL):</label>
        <input type="text" name="Imagen" value={producto.Imagen} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Precio:</label>
        <input type="number" name="Precio" value={producto.Precio} onChange={handleChange} min="0" required />
      </div>
      <div className="form-group">
        <label>Categoría:</label>
        <select name="Categoria" value={producto.Categoria} onChange={handleChange}>
          <option value="">Seleccionar...</option>
          <option value="Utilitario">Utilitarios</option>
          <option value="Joyería">Joyería</option>
          <option value="Gift">Giftcards</option>
          <option value="Taller">Cursos, Seminarios y talleres</option>
          <option value="Insumo">Insumos</option>
        </select>
      </div>
      <div className="form-group">
        <label>Stock:</label>
        <input type="number" name="Stock" value={producto.Stock} onChange={handleChange} min="0" required/>
      </div>
      <div className="form-group">
        <label>Estado:</label>
        <select name="Estado" value={producto.Estado} onChange={handleChange}>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
      </div>
      <button type="submit">Guardar cambios</button>
      <button type="button" onClick={cerrar} style={{ marginLeft: '1rem' }}>Cancelar</button>
    </form>
  )
}

export default ProductForm
