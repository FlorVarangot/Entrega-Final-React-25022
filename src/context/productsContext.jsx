import { createContext, useState, useEffect } from 'react'

export const ProductosContext = createContext()

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const productsUrl = 'https://68631fb088359a373e93f553.mockapi.io/productos'

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch(productsUrl)
        if (!res.ok) throw new Error('Error al cargar productos')
        const data = await res.json()
        setProductos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProductos()
  }, [])

  return (
    <ProductosContext.Provider value={{ productos, loading, error }}>
      {children}
    </ProductosContext.Provider>
  )
}
