import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/static/Footer'
import loader from '../assets/Loading.gif'

const NotFound = () => {
    return (
        <>
            <main>
                <section className='success-section'>
                    <img className="loading" src={loader} alt='Gif-Ceramic-Loader' />
                <div className="success-page">
                    <h1 className='title'>404</h1>
                    <h2>NOT FOUND</h2>
                </div>
                <Link to="/" className='link-ver-mas'>Ir a Home</Link>
            </section>
        </main >
            <Footer />
        </>
    )
}

export default NotFound

