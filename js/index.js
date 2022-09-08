

$('#btn-leer').click(function(){
    if($('#servicios-hide').hasClass('servicios-hide')){
        $('#servicios-hide').removeClass('servicios-hide')
        $('#servicios-hide').addClass('servicios-show')
    }else{
        $('#servicios-hide').removeClass('servicios-show')
        $('#servicios-hide').addClass('servicios-hide')
    }
})

$('.nosotros__slider-dot').click(function(){
    dots = document.getElementsByClassName("nosotros__slider-dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" nosotros__slider-dot--active", "");
    }

    $(this).addClass('nosotros__slider-dot--active')

    var animation = 'fadeIn'

    if($(this).attr('id') == '1'){
        $('.nosotros__slider-text').html(`
            <span style="color: var(--color-green); font-weight: bold;">OECA</span> 
            es una empresa de ingenieria innovadora enfocada al diseño, ejecución, puesta en marcha y O&M de
            proyectos relacionados con las energias renovables,
            medio ambiente y la eficiencia energetica.
            El equipo humano que integra la empresa es multidisciplinario, por lo tanto, existe una versatilidad en la
            gama de servicios que se ofrecen.
        `)
        animateCSS('.nosotros__slider-text', animation );

    }
    else if($(this).attr('id') == '2'){
        $('.nosotros__slider-text').html(`
            La idea surgió de un grupo de profesionales en diferentes
            especialidades quienes durante la construcción de un parque solar de
            gran escala, identificaron la falta de personal nacional calificado en el
            área de energías renovables. 
        `).fadeIn('slow')
        animateCSS('.nosotros__slider-text', animation);

    }
    else if($(this).attr('id') == '3'){
        $('.nosotros__slider-text').html(`
            La ironía de estar en una zona privilegiada por el potencial solar y
            eólico para este tipo de proyectos, en conjunto con la experiencia
            obtenida a través de los años de trabajo en diversos proyectos de la
            misma naturaleza, consolidaron el sueño que ahora se llama <span style="color: var(--color-green); font-weight: bold;">OECA</span>.
        `)
        animateCSS('.nosotros__slider-text', animation);
    }

})


const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });



$('.sidebar__menu button').click(function(){

    if($(this).text().includes('MENÚ')){
        $(this).html(`
            <i class="fa-regular fa-circle-xmark" ></i>
            CERRAR
        `)
        $(this).css('background-color', 'white').css('color', 'var(--color-green)').css('height', '7rem')
        $('.sidebar').addClass('sidebar--open')
        $('.sidebar__social-media').hide()
        $('.sidebar').addClass('sidebar--fix')
        $('.sidebar').addClass('sidebar--transparent')
        $('body').css('overflow','hidden')


    }
    else{
        $(this).html(`
            <i class="fa-solid fa-bars"></i>
            MENÚ
        `)

        $('.sidebar').removeClass('sidebar--open')
        $('.sidebar__social-media').show()
        $(this).css('background-color', 'transparent').css('color', 'white').css('height', 'fit-content')
        $('.sidebar').removeClass('sidebar--fix')
        $('.sidebar').removeClass('sidebar--transparent')
        $('body').css('overflow','auto')

    }
    
})



$('.menu__link').click(function(){

    if( $('.menu').hasClass('open--right')){
        $('.menu').removeClass('open--right')

        $('.sidebar').removeClass('sidebar--open')
        $('.sidebar__menu button').html(`
        <i class="fa-solid fa-bars"></i>
            MENÚ
        `)

        $('.sidebar').removeClass('sidebar--open')
        $('.sidebar__social-media').show()
        $('.sidebar__menu button').css('background-color', 'transparent').css('color', 'white').css('height', 'fit-content')
        $('.sidebar').removeClass('sidebar--fix')
        $('.sidebar').removeClass('sidebar--transparent')

    }
  
})