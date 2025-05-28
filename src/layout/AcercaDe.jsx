import React from 'react'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'
import loader from '../assets/loading.gif'

const AcercaDe = ({ cart, borrar, vaciar, loading }) => {
    return (
        <>
            <Header borrar={borrar} cartItems={cart} vaciar={vaciar} />
            <main>
                {loading ? (
                    <div className="loader-container">
                        <img src={loader} alt="Loading..." className="loader-image" />
                    </div>
                ) : (
                    <section style={{ alignContent: 'center', textAlign: 'center', padding: '20px' }}>
                        <h1>Acerca de QueSea de Barro</h1>
                        <p>Historia, valores y más información sobre nuestro proyecto.</p>
                        <br /><hr /><br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste accusantium
                            dolores accusamus dicta recusandae, magnam at culpa voluptatibus enim ad eos
                            molestias placeat provident alias consectetur reprehenderit tempora, repellat
                            blanditiis quia nemo! Quod pariatur saepe praesentium quis itaque laudantium
                            beatae est, mollitia officiis inventore vitae ea minima iure laborum? Dicta est
                            veniam, earum fuga doloribus deleniti sapiente voluptas. Ad, saepe labore corrupti
                            repellat libero rerum natus distinctio eveniet enim sequi eaque impedit quam quasi
                            ea quisquam error at est quidem earum accusamus suscipit laborum nam fugiat
                            perspiciatis. Ipsum rem, voluptate veritatis et nisi itaque repellat iusto voluptatum
                            facere error incidunt doloremque, dolor eaque excepturi autem molestias quod sapiente
                            optio quas. Aliquam, quasi? Deleniti quo voluptatem modi explicabo est voluptatum molestiae
                            animi veniam perspiciatis quis consequatur architecto, eveniet facere sit exercitationem
                            natus dolorem debitis consectetur! Aliquid labore a aliquam laudantium possimus vitae
                            commodi minus amet. Ratione ipsam nulla blanditiis ducimus dolore sunt ut fugiat cupiditate
                            neque optio nam possimus, exercitationem minus earum unde fugit eaque rerum error asperiores
                            doloribus voluptate praesentium. Perferendis consequuntur laborum repudiandae, sequi
                            exercitationem, iste suscipit sit maxime ullam repellat at veritatis? A maxime quod atque
                            repudiandae ducimus veritatis, nesciunt quaerat vel quisquam! Labore sequi soluta nihil quam,
                            dolorum perspiciatis accusamus iusto amet, est illo libero illum mollitia veniam porro optio
                            aspernatur sed eaque quod. Rem molestiae ea obcaecati voluptatum assumenda tempore voluptate
                            perspiciatis adipisci odit magni quia corrupti, architecto nihil temporibus ab error minima.
                            Sequi culpa natus ad quia, omnis nulla unde doloremque ab, totam rem debitis? Minima maxime
                            deserunt facilis doloremque quasi commodi consequuntur distinctio voluptatibus, quidem temporibus
                            animi ab debitis est asperiores rerum earum enim aspernatur sint sapiente nihil tempora adipisci
                            praesentium. Error autem quae enim nihil quisquam quibusdam sed aut quaerat. Pariatur perferendis 
                            quia voluptatum, ad iste mollitia quod neque distinctio vitae rerums nihil?</p>
                            <br /><hr /><br />
                    </section>
                )}
            </main>
            <Footer />
        </>
    )
}

export default AcercaDe
