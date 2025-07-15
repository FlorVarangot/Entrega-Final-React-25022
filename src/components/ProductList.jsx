import { useContext } from 'react'
import Productos from './Productos'
import { SearchContext } from '../context/searchContext'
import { AdminContext } from '../context/adminContext'
import { ProductosContext } from '../context/productsContext'
import AdminTable from './admin/AdminTable'

const ProductList = ({ formEditRef }) => {
  const { productos: productosAdmin, eliminarProducto, setSeleccionado, setOpenEditor } = useContext(AdminContext)
  const { productos: productosCliente } = useContext(ProductosContext)
  const { terminoBusqueda, categoriaSeleccionada } = useContext(SearchContext)

  const path = window.location.pathname
  const esVistaAdmin = path.startsWith('/admin')

  const productosFinales = esVistaAdmin ? productosAdmin : productosCliente

  const productosFiltrados = productosFinales.filter(p => {
    const nombre = p.Nombre?.toLowerCase() || ''
    const categoria = p.Categoria?.toLowerCase() || ''
    const termino = terminoBusqueda.toLowerCase()
    const filtroCategoria = categoriaSeleccionada.toLowerCase()

    const coincideBusqueda = nombre.includes(termino) || categoria.includes(termino)
    const coincideCategoria = !categoriaSeleccionada || categoria.includes(filtroCategoria)

    return coincideBusqueda && coincideCategoria
  })
    .filter(p => esVistaAdmin || p.Estado === 1 || p.Estado === '1')

  if (esVistaAdmin) {
    return <AdminTable
      productos={productosAdmin}
      eliminarProducto={eliminarProducto}
      setSeleccionado={setSeleccionado}
      setOpenEditor={setOpenEditor}
      formEditRef={formEditRef}
    />
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
      {productosFiltrados.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
          {productosFiltrados.map(producto => (
            <div key={producto.id}>
              <Productos producto={producto} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
