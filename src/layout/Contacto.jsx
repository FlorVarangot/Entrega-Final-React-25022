import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import '../layout/styleFormulario.css'

const Contacto = ({ cart, borrar, vaciar }) => {
    const formRef = useRef(null);
    const [errors, setErrors] = useState({})

    // const fecha = new Date().toLocaleString('es-AR', {
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // })

    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        mensaje: '',
        suscripcion: false
    })

    const validateForm = () => {
        const form = formRef.current;
        const newErrors = {};

        if (!form.name.value.trim()) {
            newErrors.name = 'Por favor, ingresá tu nombre.'
        }

        if (!form.mail.value.trim()) {
            newErrors.mail = 'El correo es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(form.mail.value)) {
            newErrors.mail = 'Ingresá un correo válido.'
        }

        if (!form.mensaje.value.trim()) {
            newErrors.mensaje = 'Escribí un mensaje antes de enviar.'
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        emailjs.sendForm('service_9niqfrd', 'template_ie6t8dk', formRef.current, '7DgCJCkh7EW_fOd13')
            .then(() => {
                const fecha = new Date().toLocaleString('es-AR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })

                emailjs.send(
                    'service_9niqfrd',
                    'template_yj6t84v',
                    {
                        to_email: 'florencia.rvarangot@gmail.com',
                        reply_to: formData.mail,
                        name: formData.name,
                        mail: formData.mail,
                        mensaje: formData.mensaje,
                        suscripcion: formData.suscripcion ? '✅ Quiero recibir info' : '❌ No quiero recibir info',
                        fecha
                    },
                    '7DgCJCkh7EW_fOd13'
                )

                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado',
                    text: 'Gracias por contactarte. Te responderemos pronto.',
                    confirmButtonColor: 'var(--third-color)'
                })

                setFormData({
                    name: '',
                    mail: '',
                    mensaje: '',
                    suscripcion: false
                })

                setErrors({})
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo enviar el mensaje. Intentalo más tarde.',
                    confirmButtonColor: 'var(--third-color)'
                })
            })
    }


    return (
        <>
            <Header cartItems={cart} borrar={borrar} vaciar={vaciar} />
            <main>
                <h1 className='title'>CONTACTO</h1>
                <section className="contacto-section">
                    <form className="formulario" ref={formRef} onSubmit={handleSubmit}>
                        <input type="hidden" name="to_email" value={formData.mail} />
                        <input type="hidden" name="cc_email" value="majoreyes87@gmail.com" />
                        <input type="hidden" name="reply_to" value="florencia.rvarangot@gmail.com" />

                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" name="name" id="nombre" value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="mail">Mail:</label>
                            <input type="email" name="mail" id="mail" value={formData.mail}
                                onChange={(e) => setFormData({ ...formData, mail: e.target.value })} />
                            {errors.mail && <span className="error-message">{errors.mail}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea name="mensaje" id="mensaje" value={formData.mensaje}
                                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} />
                            {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
                        </div>

                        <div className="checkbox-group">
                            <input type="checkbox" name="suscripcion" id="suscripcion" value="quiero" checked={formData.suscripcion}
                                onChange={(e) => setFormData({ ...formData, suscripcion: e.target.checked })} />
                            <label htmlFor="suscripcion">Quiero recibir información en mi correo.</label>
                        </div>

                        <input type="hidden" name="suscripcion" value={formData.suscripcion ? '✅ Quiero recibir info' : '❌ No quiero recibir info'} />

                        <div className="button-group">
                            <button type="submit" className='button-send'>Enviar</button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Contacto;
