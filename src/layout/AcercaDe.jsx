import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import loader from '../assets/loading.gif'
import img1 from '../assets/img/bio/taller_01.jpg'
import img2 from '../assets/img/bio/taller_10.jpg'
import img3 from '../assets/img/bio/taller_06.jpg'
import img4 from '../assets/img/bio/taller_02.jpg'
import img5 from '../assets/img/bio/taller_03.jpg'
import img6 from '../assets/img/bio/taller_07.jpg'
import img7 from '../assets/img/bio/taller_14.jpg'
import img8 from '../assets/img/bio/taller_08.jpg'
import img9 from '../assets/img/bio/taller_09.jpg'
import perfil from '../assets/img/bio/perfil-majo.jpg'
import logo from '../assets/Logo Que Sea.png'
import './styleAcercaDe.css'

const AcercaDe = ({ loading }) => {

    const [opiniones, setOpiniones] = useState([])

    useEffect(() => {
        fetch('/data/opiniones.json')
            .then(res => res.json())
            .then(data => setOpiniones(data))
    }, [])

    const imagenes = [
        { src: img1, clase: 'b-img1' },
        { src: img2, clase: 'b-img2' },
        { src: img3, clase: 'b-img3' },
        { src: img4, clase: 'b-img4' },
        { src: img5, clase: 'b-img5' },
        { src: img6, clase: 'b-img6' },
        { src: img7, clase: 'b-img7' }
    ]

    return (
        <>
            <Header />
            <main>
                {loading ? (
                    <div className="loader-container">
                        <img src={loader} alt="Loading..." className="loader-image" />
                    </div>
                ) : (
                    <section style={{ alignContent: 'center', textAlign: 'center', padding: '20px' }}>
                        <h1 className='title'>SOBRE MI</h1>
                        <br></br>
                        <div className='bio'>
                            <img src={perfil} alt="Foto de perfil" className="img-perfil"></img>
                            <h2 className='title'>Majo Reyes</h2>
                            <p> María José Reyes lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste accusantium
                                dolores accusamus dicta recusandae, magnam at culpa voluptatibus enim ad eos
                                molestias placeat provident alias consectetur reprehenderit tempora, repellat
                                blanditiis quia nemo! Quod pariatur saepe praesentium quis itaque laudantium
                                beatae est, mollitia officiis inventore vitae ea minima iure laborum? Dicta est
                                veniam, earum fuga doloribus deleniti sapiente voluptas. Ad, saepe labore corrupti
                                repellat libero.</p>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque
                                voluptatum. Doloribus, cumque voluptatum. Doloribus, cumque voluptatum.
                                Doloribus, cumque voluptatum. Doloribus, cumque voluptatum. Lorem ipsum dolor, sit.</p>
                        </div>
                        <div className='bio'>
                            <img src={img8} alt="Taller 1" title="Imagen del taller Que Sea de Barro" className="img-taller-1"></img>
                            <h2 className='title'>Nuestra Historia</h2>
                            <p> "Que Sea de Barro" es un emprendimiento familiar que comenzó con un taller regular destinado
                                a dos personas en el patio de una casa, y poco a poco fue creciendo hasta alcanzar lo que
                                somos hoy: Una tienda-taller con más de 40 alumnos y alumnas, con importante presencia y
                                participación en las ferias y eventos culturales del territorio del conurbano NorOeste Bonaerense.</p>

                            <p> Desde el 2020 hasta aquí, incorporamos talleres regulares, seminarios, producción de piezas utilitarias
                                y escultóricas, coordinación de quemas y construcción de hornos de barro, servicios de horneadas,
                                participación en investigaciones cerámicas, etc.</p>
                            <div>
                                <img className="img-perfil-2" src={img9} alt="Taller 2" title="Imagen del taller Que Sea de Barro"></img>
                                <p> Majo Reyes es el cerebro y las manos detrás de la marca, una ceramista de experiencia con muchos años
                                    de formación en diferentes áreas del mundo cerámico y -sobre todo- con una enorme pasión por el barro
                                    y la pedagogía.</p>
                                <p> Flor Varangot es quien acompaña desde el primer día dedicándose a las tareas de comunicación,
                                    organización, registro y administración. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corporis sapiente laudantium ullam quam
                                    modi, eaque aperiam aliquid debitis aspernatur suscipit expedita veritatis architecto totam excepturi
                                    dolorum placeat ad. Expedita, doloribus facilis non rerum atque itaque eligendi autem odio tempore enim
                                    rem, placeat voluptatum. Soluta hic quam amet officiis unde, ipsa architecto nisi blanditiis excepturi
                                    assumenda sit officia omnis, fugit quae eveniet. Laudantium, accusantium. Explicabo dolorem doloribus
                                    inventore laboriosam enim!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem illum nemo similique ratione ducimus
                                    et error. Ab minus commodi pariatur quisquam cupiditate, accusantium, ducimus quod laudantium tempore
                                    iste expedita.</p>
                            </div>
                        </div>

                        <br /><hr /><br />
                        <div className='bio'>
                            <h2 className='title'>El Taller: Clases, Seminarios, Producción, Horneadas...</h2>
                            <section className="imagenes-taller">
                                {imagenes.map((img, index) => (
                                    <div className={`bio-item ${img.clase}`} key={index}>
                                        <img src={img.src} alt={`Imagen del taller ${index + 1}`} />
                                    </div>
                                ))}
                            </section>
                            <p>La escencia y objetivos detrás de Que Sea se basan en la convicción de que el conocimiento se construye
                                siempre con otrxs. Creemos que los conocimientos -especialmente los oficios- no pertenecen a nadie más
                                que a la humanidad, y es por ello que deben compartirse. Además hacemos y promovemos un uso responsable
                                del material, entendiendo y transmitiendo que los recursos naturales deben cuidarse: En cerámica
                                trabajamos con tierra, y ésta no es infinita.</p>
                            <p style={{textAlign: 'center', paddingTop: '20px'}}>Si tenés una idea, Que Sea. ♡ </p>
                        </div>
                        <img src={logo} alt="Logo QueSea" className='logo-bio' />
                    </section>
                )}
                <section className='section-reviews'>
                    <h2 className="title">Opiniones ☆☆☆☆☆ </h2>
                    <div className="reviews-grid">
                        {opiniones.map((op, index) => (
                            <div className="review" key={index}>
                                <p className="review-nombre">{op.nombre}</p>
                                <p className="review-estrellas">{'★'.repeat(op.estrellas)}{'☆'.repeat(5 - op.estrellas)}</p>
                                {op.texto && <p className="review-texto">{op.texto}</p>}
                            </div>
                        ))}
                    </div>
                    <Link to="https://maps.app.goo.gl/R3aWGTRMoj574tF36" className="link-reviews" target="_blank">¡Dejanos tu opinión haciendo clic acá!</Link>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default AcercaDe
