import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useEsAdmin from '../../auth/useEsAdmin'
import { useAuth } from '../../context/authContext'
import { SearchContext } from '../../context/searchContext'
import { ProductosContext } from '../../context/productsContext'
import Cart from '../Cart'
import Logo from '../../assets/Logo Que Sea.png'
import './staticStyle.css'

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const { productos } = useContext(ProductosContext)
  const { terminoBusqueda, setTerminoBusqueda } = useContext(SearchContext)
  const sugerencias = productos.filter(p => p.Estado === 1 || p.Estado === '1')
    .filter(
      p => p.Nombre?.toLowerCase().includes(terminoBusqueda.toLowerCase()))
    .slice(0, 5)
  const navigate = useNavigate()
  const [mostrarDropdown, setMostrarDropdown] = useState(false)
  const nombreUsuario = sessionStorage.getItem('userNombre')
  const esAdmin = useEsAdmin()

  const handleSeleccion = (id) => {
    setTerminoBusqueda('')
    setMostrarDropdown(false)
    navigate(`/productos/${id}`)
  }

  return (
    <header>
      <nav className="nav-top">
        <div className="logo-container">
          <Link to='/'>
            <img className="logo-nav" src={Logo} alt="Logo QueSea de Barro" style={{ cursor: 'pointer' }} />
          </Link>
        </div>
        <div className='search-container'>
          <input
            type="text"
            placeholder="Buscar productos..."
            className="search-bar"
            onChange={(e) => {
              setTerminoBusqueda(e.target.value)
              setMostrarDropdown(true)
            }}
            onBlur={() => setTimeout(() => setMostrarDropdown(false), 150)}
            onFocus={() => setMostrarDropdown(true)}
          />

          {mostrarDropdown && terminoBusqueda && sugerencias.length > 0 && (
            <ul className="dropdown-sugerencias">
              {sugerencias.map(p => (
                <li key={p.id} onClick={() => handleSeleccion(p.id)} className="sugerencia-item">
                  <img src={p.Imagen} alt={p.Nombre} className="sugerencia-img" />
                  <span className="sugerencia-nombre">{p.Nombre}</span>
                  <span className="sugerencia-precio">
                    {Number(
                      typeof p.Precio === 'string'
                        ? p.Precio.replace(/\./g, '').replace(',', '.')
                        : p.Precio
                    ).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {mostrarDropdown && terminoBusqueda && sugerencias.length === 0 && (
          <ul className="dropdown-sugerencias">
            <li className="sugerencia-vacia">No se encontraron productos</li>
          </ul>
        )}

        {isAuthenticated && nombreUsuario && (
          <span>¡Hola, {nombreUsuario}!</span>
        )}
        {isAuthenticated ? (
          <button onClick={logout} className="button-user">
            <i className="fa-solid fa-right-from-bracket"></i> Salir
          </button>
        ) : (
          <button className="button-user">
            <Link to="/Login">
              <i className="fa-solid fa-user"></i> Ingresar
            </Link>
          </button>
        )}
        <button className="button-cart" onClick={() => setCartOpen(true)}>
          <i className="fa-solid fa-cart-shopping"></i> Carrito
        </button>

        <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </nav>

      <nav className="nav-down">
        <ul>
          <li><Link to='/' className='link'>Inicio</Link></li>
          <li><Link to='/acercade' className='link'>Sobre Mí</Link></li>
          <li><Link to='/productos' className='link'>Productos</Link></li>
          <li><Link to='/contacto' className='link'>Contacto</Link></li>
        </ul>

        {esAdmin && (
          <div className="admin-link-container">
            <Link to="/admin" className="boton-admin">
              Ir al panel admin
            </Link>
          </div>
        )}
      </nav>

    </header>
  )
}

export default Header
