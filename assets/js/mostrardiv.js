function muestra_oculta(id){
if (document.getElementById){ //se obtiene el id
var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
}
}
window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
muestra_oculta('mostrar_div');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}

$(document).ready(function() {

	$("a.topLink").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
          easing: "easeOutBounce"
		});
		return false;
	});

});


$(document).ready(function(){
    //vamos al principio o al final de la página
    $('a.arriba').click(function(e){
    e.preventDefault();
    volver  = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(volver).offset().top
    }, 2000);
    });
});