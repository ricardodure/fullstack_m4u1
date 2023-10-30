import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae corrupti eum velit similique labore
                    recusandae blanditiis facilis provident quo tempore! Fuga dignissimos nesciunt recusandae cumque minima
                    dolorum dolore veniam aliquid.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, inventore harum voluptates ab dolores
                    earum ullam blanditiis pariatur beatae, expedita, odit porro ad sint ratione nulla exercitationem
                    accusamus. Soluta, tenetur</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab iure itaque molestiae deleniti.
                            Officiis eligendi repudiandae, ab modi libero vel nulla, fugiat omnis cum nesciunt quasi,
                            adipisci saepe repellat nisi!</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros2.jpg" alt="Diana Reyes" />
                        <h5>Diana Reyes</h5>
                        <h6>Gerente Comercial</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab iure itaque molestiae deleniti.
                            Officiis eligendi repudiandae, ab modi libero vel nulla, fugiat omnis cum nesciunt quasi,
                            adipisci saepe repellat nisi!</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros3.jpg" alt="Roberto Zaptos" />
                        <h5>Roberto Zaptos</h5>
                        <h6>Gerente de Sistemas</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab iure itaque molestiae deleniti.
                            Officiis eligendi repudiandae, ab modi libero vel nulla, fugiat omnis cum nesciunt quasi,
                            adipisci saepe repellat nisi!</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros4.jpg" alt="Sandra Mastropiero" />
                        <h5>Sandra Mastropiero</h5>
                        <h6>Gerente de Marketing</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab iure itaque molestiae deleniti.
                            Officiis eligendi repudiandae, ab modi libero vel nulla, fugiat omnis cum nesciunt quasi,
                            adipisci saepe repellat nisi!</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros5.jpg" alt="Luciano Figuero" />
                        <h5>Luciano Figuero</h5>
                        <h6>Gerente de Logística</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab iure itaque molestiae deleniti.
                            Officiis eligendi repudiandae, ab modi libero vel nulla, fugiat omnis cum nesciunt quasi,
                            adipisci saepe repellat nisi!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;