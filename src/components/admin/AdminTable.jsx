import { useContext, useState, useMemo, useEffect } from 'react'
import { AdminContext } from '../../context/adminContext'
import './styleTable.css'
import Swal from 'sweetalert2'

const AdminTable = ({ productos, formEditRef }) => {

  const { setOpenEditor, setSeleccionado, actualizarProducto } = useContext(AdminContext);

  const [pagina, setPagina] = useState(1)
  const [itemsPorPagina, setItemsPorPagina] = useState(5)
  const [orden, setOrden] = useState({ campo: 'id', asc: true })
  const [filtroCategoria, setFiltroCategoria] = useState('')
  const [soloSinStock, setSoloSinStock] = useState(false)
  const [soloInactivos, setSoloInactivos] = useState(false);

  useEffect(() => {
    setPagina(1);
  }, [filtroCategoria, soloSinStock, soloInactivos])

  const columnas = [
    { key: 'Id', label: 'ID' },
    { key: 'Nombre', label: 'Nombre' },
    { key: 'Precio', label: 'Precio' },
    { key: 'Stock', label: 'Stock' },
    { key: 'Categoria', label: 'Categoría' },
    { key: 'Estado', label: 'Estado' }
  ]

  const categoriasUnicas = useMemo(() => {
    return [...new Set(productos.map(p => p.Categoria))].filter(Boolean)
  }, [productos]);

  const productosFiltrados = useMemo(() => {
    return productos.filter(p => {
      const categoria = p.Categoria
      const coincideCategoria = filtroCategoria ? categoria === filtroCategoria : true
      const coincideStock = soloSinStock ? p.Stock === 0 : true
      const coincideInactivos = soloInactivos ? p.Estado === 0 || p.Estado === '0' || p.Estado === 'Inactivo' : true
      return coincideCategoria && coincideStock && coincideInactivos
    })
  }, [productos, filtroCategoria, soloSinStock, soloInactivos])


  const ordenarPor = (campo) => {
    setOrden(prev => ({
      campo,
      asc: prev.campo === campo ? !prev.asc : true
    }))
    setPagina(1)
  }

  const productosOrdenados = useMemo(() => {
    return [...productosFiltrados].sort((a, b) => {
      const campo = orden.campo
      const aVal = a[campo]
      const bVal = b[campo]

      const esNumero = typeof aVal === 'number' || !isNaN(Number(aVal))

      if (esNumero) {
        return orden.asc ? aVal - bVal : bVal - aVal
      } else {
        const aStr = (aVal ?? '').toString().toLowerCase()
        const bStr = (bVal ?? '').toString().toLowerCase()
        return orden.asc ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr)
      }
    })
  }, [productosFiltrados, orden])

  const totalPaginas = Math.ceil(productosOrdenados.length / itemsPorPagina)

  const productosPaginados = useMemo(() => {
    return productosOrdenados.slice(
      (pagina - 1) * itemsPorPagina,
      pagina * itemsPorPagina
    )
  }, [productosOrdenados, pagina, itemsPorPagina])

  return (
    <>
      <div className="filtros-admin">
        <select value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)}>
          <option value="">Todas las categorías</option>
          {categoriasUnicas.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <label>
          <input
            type="checkbox"
            checked={soloSinStock}
            onChange={e => setSoloSinStock(e.target.checked)}
          />
          Sólo sin stock
        </label>

        <label>
          <input
            type="checkbox"
            checked={soloInactivos}
            onChange={e => setSoloInactivos(e.target.checked)}
          />
          Sólo inactivos
        </label>

        <button onClick={() => {
          setFiltroCategoria('')
          setSoloSinStock(false)
          setSoloInactivos(false)
          setItemsPorPagina(5)
          setPagina(1)
        }}>
          Limpiar filtros
        </button>

      </div>

      {productosFiltrados.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          No hay productos que coincidan con los filtros seleccionados.
        </p>
      ) : (
        <>
          <table className="tabla-admin">
            <thead>
              <tr>
                {columnas.map(col => (
                  <th key={col.key} onClick={() => ordenarPor(col.key)}>
                    {col.label}
                    <i
                      className={`fa-regular fa-circle-up ${orden.campo === col.key && orden.asc ? 'activo' : ''}`}
                      style={{ marginLeft: '6px' }}
                    ></i>
                    <i
                      className={`fa-regular fa-circle-down ${orden.campo === col.key && !orden.asc ? 'activo' : ''}`}
                      style={{ marginLeft: '2px' }}
                    ></i>
                  </th>

                ))}
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {productosPaginados.map(prod => (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.Nombre}</td>
                  <td>{Number(prod.Precio).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</td>
                  <td>{prod.Stock}</td>
                  <td>{prod.Categoria || '—'}</td>
                  <td>{prod.Estado === 1 || prod.Estado === '1' || prod.Estado === 'Activo' ? 'Activo' : 'Inactivo'}</td>
                  <td>
                    <button onClick={() => {
                      setSeleccionado(prod);
                      setOpenEditor(true);
                      setTimeout(() => {
                        formEditRef.current?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}>
                      <i className="fas fa-edit"></i>
                    </button>
                    {prod.Estado === 1 || prod.Estado === '1' || prod.Estado === 'Activo' ? (
                      <button onClick={() => {
                        Swal.fire({
                          title: 'Eliminar producto',
                          text: `¿Segura/o que desea eliminar "${prod.Nombre}"?`,
                          icon: 'warning',
                          showCancelButton: true,
                          background: '#f6eed4ff',
                          confirmButtonColor: 'var(--third-color)',
                          cancelButtonColor: 'var(--secondary-color)',
                          confirmButtonText: 'Sí, eliminar',
                          cancelButtonText: 'Cancelar'
                        }).then(result => {
                          if (result.isConfirmed) {
                            const productoActualizado = { ...prod, Estado: 0 };
                            actualizarProducto(productoActualizado)
                            Swal.fire({
                              icon: 'success',
                              title: 'Producto eliminado con éxito',
                              confirmButtonColor: 'var(--third-color)'
                            })
                          }
                        })
                      }}>
                        <i className="fas fa-trash"></i>
                      </button>
                    ) : (
                      <button disabled title="Producto inactivo" style={{ opacity: 0.3, cursor: "default" }}>
                        <i className="fas fa-trash" ></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="paginado-admin">
            <button onClick={() => setPagina(p => Math.max(p - 1, 1))} disabled={pagina === 1}><i className="fa-regular fa-circle-left"></i></button>
            <span>Página {pagina} de {totalPaginas}</span>
            <button onClick={() => setPagina(p => Math.min(p + 1, totalPaginas))} disabled={pagina === totalPaginas}><i className="fa-regular fa-circle-right"></i></button>

            <select
              onChange={e => {
                setItemsPorPagina(Number(e.target.value))
                setPagina(1)
              }}
              value={itemsPorPagina}
            >
              {[5, 10, 15, 20].map(op => (
                <option key={op} value={op}>{op} por página</option>
              ))}
            </select>

          </div>
        </>
      )
      }
    </>
  )
}

export default AdminTable
