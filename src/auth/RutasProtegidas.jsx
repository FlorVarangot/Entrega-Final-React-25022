import { Navigate, useLocation } from 'react-router-dom'

const RutasProtegidas = ({ children, requiredRole }) => {
  const isAuth = sessionStorage.getItem('isAuth') === 'true'
  const role = sessionStorage.getItem('userRole')
  const { pathname, state } = useLocation()

  if (!isAuth) return <Navigate to="/login" replace />
  if (requiredRole && role !== requiredRole) return <Navigate to="/" replace />
   if (
    pathname === "/success" &&
    !(state && state.cantidad > 0 && state.total >= 0)
  ) {
    return <Navigate to="/" replace />
  }

  return children
}

export default RutasProtegidas
