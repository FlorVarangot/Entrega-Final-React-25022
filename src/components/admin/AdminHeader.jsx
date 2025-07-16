import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import Logo from '../../assets/Logo Que Sea.png'
import './styleAdminHeader.css'

const AdminHeader = () => {
    const { isAuthenticated, logout } = useAuth()
    const nombreUsuario = sessionStorage.getItem('userNombre')
    const navigate = useNavigate()

    return (
        <header className="admin-header">
            <nav className="admin-nav">
                <div className="admin-logo">
                    <img
                        src={Logo}
                        alt="Logo QueSea de Barro"
                        className="logo-nav"
                        onClick={() => navigate('/')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>

                <ul className="admin-links">
                    <li> <NavLink to="/admin" className={({ isActive }) => isActive ? "admin-link active" : "admin-link"}> Productos </NavLink></li>
                    <li className='pending' title='¡Proximamente!'><NavLink to="#">Categorías</NavLink></li>
                    <li className='pending' title='¡Proximamente!'><NavLink to="#">Usuarios</NavLink></li>
                    <li className='pending' title='¡Proximamente!'><NavLink to="#">Pedidos</NavLink></li>
                    <li className='pending' title='¡Proximamente!'><NavLink to="#">Mensajes</NavLink></li>
                </ul>

                <div className="admin-user-info">
                    {isAuthenticated && nombreUsuario && (
                        <span>¡Hola, {nombreUsuario}!</span>
                    )}
                    {isAuthenticated && (
                        <button onClick={logout} className="button-user">
                            <i className="fa-solid fa-right-from-bracket"></i> Salir
                        </button>
                    )}
                </div>
            </nav>
        </header>

    )
}

export default AdminHeader
