import React from 'react';
import '../styles/pages/Homepage.css'

const HomePage= (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Hemos desarrollado diversas soluciones que nos comprometen 
                        a entregar el mejor servicio a nuestros clientes, buscando 
                        generar una importante fidelización de la mano del servicio, 
                        transparencia y permanente preocupación por todo lo que hacemos.
                        Nos avalan más de 500 empresas de diversos rubros
                        y los más de 6000 envíos completados; cumpliendo así con nuestra 
                        visión: CALIDAD, PUNTUALIDAD y EFICIENCIA.</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Pedro Bastias Torresi</span>
                    </div>
                </div>
            </div>
        </main>
        
    );
}

export default HomePage;