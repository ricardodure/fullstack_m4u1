import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeing">
                <img src="img/home/img01.jpg" alt="Avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, aliquam omnis. Exercitationem labore
                        illo itaque suscipit nulla et veritatis voluptatum voluptas nam corrupti beatae sit qui, autem iure
                        voluptatibus eos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero iure voluptatem ea voluptate
                        explicabo laboriosam, repellendus quis, iste in delectus ut adipisci at quidem et veritatis!
                        Officia, ducimus hic.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                    <div className="testimonio">
                        <span className="cita">Un lujo!!</span>
                        <span className="autor">Pedro Garcia - cualquiercosa.com</span>
                    </div>
                    <div className="testimonio">
                        <span className="cita">Sin problemas!!</span>
                        <span className="autor">José Gonzalez - losgonzalez.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;