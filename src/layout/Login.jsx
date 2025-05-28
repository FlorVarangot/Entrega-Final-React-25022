import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleFormulario.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
            <div className="formulario">
                <h2>Iniciar sesión</h2>
                <form>
                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingrese su email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingrese su contraseña"
                        />
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
                        <p><Link className="link-ver-mas" to="#">Registrate</Link></p>
                    </div>
                    <div className="column">
                        <p>¿Olvidaste tu contraseña?</p>
                        <p><Link className="link-ver-mas" to="#">Recuperar</Link></p>
                    </div>
                </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Link className="link-ver-mas" style={{ fontSize: 'large', borderRadius: '10px', boxShadow: '0 0 2px var(--primary-color)' }}
                    to="/">Salir</Link>
            </div>
        </div>
    )
}

export default Login