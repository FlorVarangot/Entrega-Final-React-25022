import { createContext, useState, useEffect } from "react"
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart')
        return storedCart ? JSON.parse(storedCart) : []
    })

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => {
                if (!res.ok) throw new Error("Error al cargar el archivo JSON")
                return res.json()
            })
            .then(data => {
                setTimeout(() => {
                    setProductos(data)
                    setLoading(false)
                }, 3000)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(true);
                setLoading(false);
                toast.error("No se pudieron cargar los productos.")
            })
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const handleAddToCart = (producto, cantidad) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === producto.id)

            if (existingItem) {
                const nuevaCantidad = existingItem.cantidad + cantidad

                return nuevaCantidad <= producto.Stock
                    ? prevCart.map(item => item.id === producto.id
                        ? { ...item, cantidad: nuevaCantidad }
                        : item)
                    : prevCart
            } else {
                return cantidad <= producto.Stock
                    ? [...prevCart, { ...producto, cantidad }]
                    : prevCart
            }
        })
    }

    const handleRemoveFromCart = (producto) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === producto.id) {
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 }
                    } else {
                        return null;
                    }
                } else {
                    return item;
                }
            }).filter(item => item !== null)
        })
    }

    const handleClearCart = () => {
        Swal.fire({
            title: '¿Vaciar carrito?',
            text: 'Esta acción eliminará todos los productos del carrito.',
            icon: 'warning',
            showCancelButton: true,
            background: '#f6eed4ff',
            confirmButtonColor: 'var(--third-color)',
            cancelButtonColor: 'var(--secondary-color)',
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                localStorage.removeItem('cart')
                toast.error('Carrito vaciado correctamente')
            }
        })
    }

    const handleEndShop = () => {
        toast.success("Compra finalizada")
        localStorage.removeItem('cart')
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            productos, loading, error,
            cart,
            handleAddToCart, handleRemoveFromCart, handleClearCart, handleEndShop
        }}>
            {children}
        </CartContext.Provider>
    )
}