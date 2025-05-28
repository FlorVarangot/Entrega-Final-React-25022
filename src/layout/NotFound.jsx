import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main>
            <div>
                <h1>404</h1>
                <Link className='link' to='/'>Volver al inicio</Link>
            </div>
        </main>
    )
}

export default NotFound
