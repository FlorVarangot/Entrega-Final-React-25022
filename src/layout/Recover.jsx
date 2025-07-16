import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/static/Footer'
import loader from '../assets/loading.gif'

const Recover = () => {
    return (
        <>
            <main>
                <section className='success-section'>
                    <img className="loading" src={loader} alt='Gif-Ceramic-Loader' />
                <div className="success-page">
                    <p>¡Lo sentimos!</p>
                    <p>Página aún en construcción...</p>
                </div>
                <Link to="/" className='link-ver-mas'>Ir a Home</Link>
            </section>
        </main >
            <Footer />
        </>
    )
}

export default Recover
