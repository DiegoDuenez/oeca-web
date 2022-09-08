

$('#btn-leer').click(function(){
    if($('#servicios-hide').hasClass('servicios-hide')){
        $('#servicios-hide').removeClass('servicios-hide')
        $('#servicios-hide').addClass('servicios-show')
    }else{
        $('#servicios-hide').removeClass('servicios-show')
        $('#servicios-hide').addClass('servicios-hide')
    }
})