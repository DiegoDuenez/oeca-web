<div class="contacto" id="contacto">

    <div class="contacto__formulario">
        <h2 class="title title--white">PONTE EN <br><span>CONTACTO</span></h2>

        <img src="resources/img/contacto-fondo.png" alt="Contacto" class="contacto__image">
        
        <form method="post" class="contacto__form">
            <div class="contacto__input-group">
                <label for="nombre" class="contacto__label">NOMBRE Y APELLIDO</label>
                <input type="text" class="contacto__input" id="nombre" autocomplete="off">
            </div>

            <div class="contacto__input-row">
                <div class="contacto__input-group contacto__input-group--md">
                    <label for="correo" class="contacto__label">CORREO ELECTRÓNICO</label>
                    <input type="email" class="contacto__input" id="correo" autocomplete="off">
                </div>
                <div class="contacto__input-group contacto__input-group--md">
                    <label for="telefono" class="contacto__label">TELÉFONO</label>
                    <input type="number" class="contacto__input" id="telefono" autocomplete="off">
                </div>
            </div>

            <div class="contacto__input-group">
                <label for="mensaje" class="contacto__label">MENSAJE</label>
                <textarea name="mensaje" class="contacto__textarea" id="mensaje"></textarea>
            </div>
            <div class="g-recaptcha" data-sitekey="6LflO-chAAAAAPrzKoI_CkWH0zQ9bA82H3Z1fUNf" style="margin-top: 2%; margin:0 auto;"></div>
            <p style="font-family: Exo2Regular; color: white !important; text-align: center" id="status"></p>
            <button type="button" class="button" onclick="mail()">ENVIAR</button>
        </form>

        <div class="contacto__informacion">

            <div class="contacto__dato">
                <div class="contacto__dato-icon">
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div class="contacto__dato-text">
                    <a href="https://api.whatsapp.com/send?phone=8717686693" target="blank">+52 (871) 768 6693</a> 
                </div>
            </div>

            <div class="contacto__dato">
                <div class="contacto__dato-icon">
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div class="contacto__dato-text">
                    <a href="mailto:proyectos@oeca.mx">proyectos@oeca.mx</a> 
                </div>
            </div>

            <div class="contacto__dato">
                <div class="contacto__dato-icon">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="contacto__dato-text">
                    <a href="https://goo.gl/maps/mMhwA8GAwyaBkLvK6" target="blank">Suchil No. 331, Parque Industrial Carlos A.
                    Herrera Araluce. C.P. 35078, <br> Gómez Palacio, Durango.</a> 
                </div>
            </div>

        </div>
    </div>

    <div class="contacto__mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14394.520718384423!2d-103.4699401!3d25.5839678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97e09339c6c83f0e!2sOeca!5e0!3m2!1sen!2smx!4v1662657735861!5m2!1sen!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

</div>