import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const isAuth = sessionStorage.getItem('isAuth') === 'true'
        const nombre = sessionStorage.getItem('userNombre')

        if (isAuth && nombre) {
            setIsAuthenticated(true)
            setUser(nombre)
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let validationError = {}
        if (!user) validationError.user = 'User es requerido'
        if (!password) validationError.password = 'Password es requerido'

        if (Object.keys(validationError).length > 0) {
            setError(validationError)
            return
        }

        try {
            const res = await fetch('/data/users.json')
            const users = await res.json()

            const foundUser = users.find(
                (u) => u.user === user && u.password === password
            )

            if (foundUser) {
                setIsAuthenticated(true)

                sessionStorage.setItem('isAuth', true)
                sessionStorage.setItem('userNombre', foundUser.user)
                sessionStorage.setItem('userRole', foundUser.role)

                if (foundUser.role === 'admin') {
                    navigate('/admin')
                } else {
                    navigate('/')
                }
            } else if (!foundUser) {
                const exists = users.find(u => u.user === user);
                if (!exists) {
                    setError(prev => ({ ...prev, user: 'El usuario no existe.' }))
                } else {
                    setError(prev => ({ ...prev, password: 'Contraseña incorrecta.' }))
                }
            }

        } catch (err) {
            console.error('Error fetching users: ', err)
            setError({ User: 'Algo salió mal. Por favor, intentalo de nuevo más tarde.' })
        }
    }

    const logout = () => {
        Swal.fire({
            title: '¿Cerrar sesión?',
            text: 'Tu sesión actual será cerrada. ¿Estás segura/o?',
            icon: 'warning',
            showCancelButton: true,
            background: '#f6eed4ff',
            confirmButtonColor: 'var(--third-color)',
            cancelButtonColor: 'var(--secondary-color)',
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.clear()
                setIsAuthenticated(false)
                setUser('')
                setPassword('')
                navigate('/', { replace: true })

                Swal.fire({
                    icon: 'success',
                    title: 'Sesión cerrada',
                    text: '¡Hasta luego!',
                    confirmButtonColor: 'var(--third-color)',
                    timer: 1500,
                    showConfirmButton: false
                })
            }
        })
    }

    return (
        <AuthContext.Provider value={{
            user, setUser, password, setPassword, handleSubmit, error, setError,
            isAuthenticated, setIsAuthenticated, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
