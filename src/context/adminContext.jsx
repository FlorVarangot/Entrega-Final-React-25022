import { createContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)
    const [openEditor, setOpenEditor] = useState(null)
    const [seleccionado, setSeleccionado] = useState(null)
    const [error, setError] = useState(false)
    const productsUrl = 'https://68631fb088359a373e93f553.mockapi.io/productos'

    useEffect(() => {
        fetch(productsUrl)
            .then((response) => {
                if (!response.ok) throw new Error('Error al cargar productos')
                return response.json()
            })
            .then((data) => {
                const normalizados = data.map(p => ({
                    ...p,
                    id: p.Id || p.id
                }))
                setTimeout(() => {
                    setProductos(normalizados)
                    setLoading(false)
                }, 2000)
            })
            .catch((error) => {
                console.error('Error fetching data: ', error)
                setError(true)
                setLoading(false)
            })
    }, [])

    const cargarProductos = async () => {
        try {
            const res = await fetch(productsUrl)
            const data = await res.json()
            const normalizados = data.map(p => ({
                ...p,
                id: p.Id || p.id
            }))
            setProductos(normalizados)
        } catch (error) {
            console.log('Error al cargar productos.', error)
        }
    }

    const agregarProducto = async (producto) => {
        try {
            const res = await fetch(productsUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto)
            })
            const nuevo = await res.json()
            nuevo.id = nuevo.Id || nuevo.id
            setProductos(prev => [...prev, nuevo])
            setOpen(false)

            Swal.fire({
                title: '¡Producto agregado!',
                text: 'El nuevo producto ya está disponible en la tienda.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            })
        } catch (error) {
            console.log('Error al agregar producto.', error)
        }
    }

    const eliminarProducto = async (id) => {
        try {
            const res = await fetch(`${productsUrl}/${id}`, {
                method: 'DELETE'
            })
            if (!res.ok) throw new Error('Error al eliminar.')

            setProductos(prev => prev.filter(p => p.id !== id))

            Swal.fire({
                title: 'Eliminado',
                text: 'El producto fue eliminado correctamente.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            })
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al eliminar el producto.',
                icon: 'error'
            })
        }
    }

    const actualizarProducto = async (productoActualizado) => {
        try {
            const res = await fetch(`${productsUrl}/${productoActualizado.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productoActualizado)
            })
            const actualizado = await res.json()
            actualizado.id = actualizado.Id || actualizado.id
            setProductos(prev =>
                prev.map(p => (p.id === actualizado.id ? actualizado : p))
            )
        } catch (error) {
            console.error('Error al actualizar producto:', error)
        }
    }

    return (
        <AdminContext.Provider value={{
            productos, loading, open, setOpen, openEditor, setOpenEditor,
            seleccionado, setSeleccionado, agregarProducto, actualizarProducto,
            eliminarProducto, error, setError
        }}>
            {children}
        </AdminContext.Provider>
    )
}
