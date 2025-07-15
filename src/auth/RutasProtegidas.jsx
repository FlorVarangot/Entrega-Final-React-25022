import React from 'react'
import { Navigate } from 'react-router-dom'

const RutasProtegidas = ({ children, requiredRole }) => {
  const isAuth = sessionStorage.getItem('isAuth') === 'true'
  const role = sessionStorage.getItem('userRole')

  if (!isAuth) return <Navigate to="/login" replace />
  if (requiredRole && role !== requiredRole) return <Navigate to="/" replace />

  return children
}

export default RutasProtegidas
