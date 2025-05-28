import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './staticStyle.css'
import Cart from '../Cart'
import Logo from '../../assets/Logo Que Sea.png'

const Header = ({ cartItems, borrar, vaciar }) => {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <nav className="nav-top">
        <div className="logo-container">
          <Link to='/'>
            <img className="logo-nav" src={Logo} alt="Logo QueSea de Barro" style={{ cursor: 'pointer' }} />
          </Link>
        </div>
        <input type="text" placeholder="Buscar productos..." className="search-bar" />
        <button className="button-user">
          <Link to="/Login">
            <i className="fa-solid fa-user"></i> Ingresar
          </Link>
        </button>
        <button className="button-cart" onClick={() => setCartOpen(true)}>
          <i className="fa-solid fa-cart-shopping"></i> Carrito
        </button>
        <Cart borrar={borrar} vaciar={vaciar} cartItems={cartItems} isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </nav>

      <nav className="nav-down">
        <ul>
          <li><Link to='/' className='link'>Inicio</Link></li>
          <li><Link to='/acercade' className='link'>Sobre Mí</Link></li>
          <li><Link to='/productos' className='link'>Productos</Link></li>
          <li><Link to='/contacto' className='link'>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
