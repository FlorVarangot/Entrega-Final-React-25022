import React from 'react'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import '../layout/styleFormulario.css'

const Contacto = ({ cart, borrar, vaciar }) => {
    return (
        <>
            <Header cartItems={cart} borrar={borrar} vaciar={vaciar} />
            <h1>Contacto</h1>
            <main>
                <section className="contacto-section">
                    <form className="formulario">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" name="nombre" id="nombre" />
                            <span className="error-message" id="error-nombre"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mail">Mail:</label>
                            <input type="email" name="mail" id="mail" />
                            <span className="error-message" id="error-mail"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea name="mensaje" id="mensaje"></textarea>
                            <span className="error-message" id="error-mensaje"></span>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" name="suscripcion" id="suscripcion" value="quiero" />
                            <label htmlFor="suscripcion">Quiero recibir información en mi correo.</label>
                        </div>
                        <div className="button-group">
                            <button type="submit" id="button" className='button-send'>Enviar</button>
                        </div>
                        <div id="mensaje-envio" className="mensaje-envio"></div>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Contacto
