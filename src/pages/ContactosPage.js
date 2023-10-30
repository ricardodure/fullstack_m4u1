import React from "react";

const ContactosPage = (props) => {
    return (
        <main className="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="email">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        <div className="datos">
            <h2>Otras vías de comunicación</h2>
            <p>También puede contactarse con nosotros usando los siguientes medios:</p>
            <ul>
                <li>Teléfono: 7894663</li>
                <li>Email: contactos@transportesx.com.ar</li>
                <li>Facebook: https://www.facebook.com/TransporteX</li>
                <li>Twiter: @TransporteX</li>
                <li>Skype: TransporteX_Skype</li>
            </ul>
        </div>
    </main>
    );
}

export default ContactosPage;