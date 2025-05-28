import React from 'react'
import './staticStyle.css'
import Logo from '../../assets/Logo Que Sea.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="section-footer">
                    <iframe
                        className="mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26287.452521096304!2d-58.72775549056413!3d-34.55528807015531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbda6990007db%3A0x600454389e2a89ad!2sMu%C3%B1iz%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1734375074560!5m2!1ses-419!2sar"
                        title="Mapa de Muñiz, Provincia de Buenos Aires"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="section-footer">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/queseadebarro/" target="_blank" rel="noopener noreferrer" title="QueSea Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            @queseadebarro
                        </li>
                        <li>
                            <a href="mailto:queseadebarro@gmail.com" title="QueSea Mail">
                                <i className="fas fa-envelope"></i>
                            </a>
                            queseadebarro@gmail.com
                        </li>
                        <li>
                            <a href="https://wa.me/1167206801" target="_blank" rel="noopener noreferrer" title="QueSea WhatsApp">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            +54 116 720 6801
                        </li>
                    </ul>
                </div>
                <div className="section-footer">
                    <a id="footer-logo-link" href="#">
                        <img src={Logo} alt="Logo Que Sea" className="logo-quesea" />
                    </a>
                </div>
            </div>
            <hr className="separador" />
            <div className="copyright">
                <p>© 2025 Copyright Que Sea de Barro. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;
