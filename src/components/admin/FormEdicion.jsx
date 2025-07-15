import { useState, useEffect } from 'react'
import './styleProductForm.css'
import Swal from 'sweetalert2'

const FormEdicion = ({ producto, actualizarProducto, cerrar }) => {
  const [formData, setFormData] = useState({ ...producto })

  useEffect(() => {
    if (producto) {
      const precioNumerico = Number(
        producto.Precio?.toString().replace(/\./g, '').replace(',', '.').replace('$', '')
      )
      setFormData({
        ...producto,
        Precio: isNaN(precioNumerico) ? '' : precioNumerico
      })
    }
  }, [producto])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const productoFormateado = {
      ...formData,
      Precio: Number(formData.Precio),
      Stock: Number(formData.Stock),
      Estado: Number(formData.Estado)
    }

    actualizarProducto(productoFormateado)
    Swal.fire({
      icon: 'success',
      title: 'Producto editado con éxito',
      confirmButtonColor: 'var(--third-color)'
    })
    cerrar()
  }


  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div>
        <h2 className='title'>Editar Producto:</h2>
        <h3 style={{ textAlign: 'center', color: 'var(--third-color)' }}>{formData.Nombre}</h3>
      </div>
      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea name="Descripcion" value={formData.Descripcion} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Imagen (URL):</label>
        <input type="text" name="Imagen" value={formData.Imagen} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Precio:</label>
        <input type="number" name="Precio" value={formData.Precio} onChange={handleChange} min="0" required />
      </div>
      <div className="form-group">
        <label>Categoría:</label>
        <select name="Categoria" value={formData.Categoria} onChange={handleChange}>
          <option value="">Seleccionar...</option>
          <option value="Utilitario">Utilitario</option>
          <option value="Joyería">Joyería</option>
          <option value="Gift">Gift</option>
          <option value="Taller">Taller</option>
          <option value="Insumo">Insumos</option>
        </select>
      </div>
      <div className="form-group">
        <label>Stock:</label>
        <input type="number" name="Stock" value={formData.Stock} onChange={handleChange} min="0" required />
      </div>
      <div className="form-group">
        <label>Estado:</label>
        <select name="Estado" value={formData.Estado} onChange={handleChange}>
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
      </div>
      <button type="submit">Guardar cambios</button>
      <button type="button" onClick={cerrar} style={{ marginLeft: '1rem' }}>Cancelar</button>
    </form>
  )
}

export default FormEdicion
