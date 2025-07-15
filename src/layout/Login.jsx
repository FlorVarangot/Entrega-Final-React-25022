import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styleFormulario.css'
import { useAuth } from '../context/authContext'

const Login = () => {
    const { user, setUser, password, setPassword, handleSubmit, error, setError } = useAuth()

    useEffect(() => {
        setUser('');
        setPassword('');
    }, []);

    return (
        <main>
            <div className="login-container">
                <div className="formulario">
                    <h2>Iniciar sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nombre de usuario</label>
                            <input
                                required
                                type="text"
                                className="input-field"
                                value={user}
                                onChange={(e) => {
                                    setUser(e.target.value);
                                    if (error.user) {
                                        setError(prev => ({ ...prev, user: '' }));
                                    }
                                }}
                                placeholder="Ingrese su nombre de usuario"
                            />
                            {error.user && <p className="error-message">{error.user}</p>}
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input
                                required
                                type="password"
                                className="input-field"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error.password) {
                                        setError(prev => ({ ...prev, password: '' }));
                                    }
                                }}
                                placeholder="Ingrese su contraseña"
                            />
                            {error.password && <p className="error-message">{error.password}</p>}
                        </div>
                        <div className="button-group">
                            <button type="submit" className="button-send">
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                    <div className="register-link">
                        <div className="column">
                            <p>¿No tenés cuenta?</p>
                            <p><Link className="link-ver-mas" to="/Register">Registrate</Link></p>
                        </div>
                        <div className="column">
                            <p>¿Olvidaste tu contraseña?</p>
                            <p><Link className="link-ver-mas" to="/Recover">Recuperar</Link></p>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Link className="link-ver-mas" style={{ fontSize: 'large', borderRadius: '10px', boxShadow: '0 0 2px var(--primary-color)' }}
                        to="/">Salir</Link>
                </div>
            </div>
        </main>
    )
}

export default Login