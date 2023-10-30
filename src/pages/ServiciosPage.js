import React from "react";

const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="img/servicios/ferroviario.jpg" alt="Tren"/>
            <div className="info">
                <h4>Transporte Ferroviario</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, a nostrum. Sint tempore
                    perspiciatis reiciendis maxime temporibus cumque ipsa beatae quis ipsum laboriosam corporis
                    praesentium, reprehenderit ipsam eligendi blanditiis cupiditate?</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/maritimo.jpg" alt="Barco"/>
            <div className="info">
                <h4>Transporte Marítimo</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, a nostrum. Sint tempore
                    perspiciatis reiciendis maxime temporibus cumque ipsa beatae quis ipsum laboriosam corporis
                    praesentium, reprehenderit ipsam eligendi blanditiis cupiditate?</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/aereo.jpg" alt="Avion"/>
            <div className="info">
                <h4>Transporte Aereo</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, a nostrum. Sint tempore
                    perspiciatis reiciendis maxime temporibus cumque ipsa beatae quis ipsum laboriosam corporis
                    praesentium, reprehenderit ipsam eligendi blanditiis cupiditate?</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/terrestre.jpg" alt="Camion"/>
            <div className="info">
                <h4>Transporte Terreste</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, a nostrum. Sint tempore
                    perspiciatis reiciendis maxime temporibus cumque ipsa beatae quis ipsum laboriosam corporis
                    praesentium, reprehenderit ipsam eligendi blanditiis cupiditate?</p>
            </div>
        </div>

    </main>
    );
}

export default ServiciosPage;