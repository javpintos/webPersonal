$(document).ready(function(){

	//slider
	if (window.location.href.indexOf('index') > -1) {//solo se cargara si esta en el index
		$('.bxslider').bxSlider({
		mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    responsive: true
		});
	}
	

	//Posts

	if (window.location.href.indexOf('index') > -1) {
		var posts = [
		{
			title: "Prueba de titulo 1",
			date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			title: "Prueba de titulo 2",
			date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			title: "Prueba de titulo 3",
			date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		];

		posts.forEach((item, index) => {
			var post = `
			<article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>
							${item.content}
						</p>
						<a href="#" class="button-more">Leer mas</a>
					</article>
			`;
			$("#posts").append(post);//al div posts le agrego los post que recorro en el array de jsons
		});
	}

	//selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	//scroll arriba de la web
	$('.subir').click(function(e){//le paso un parametro e
		e.preventDefault();//para que no me redirija a ningun otra pagina

		$('html, body').animate({//hacemos uso de animate el body y el html de la pagina
			scrollTop: 0//me hace un scroll a pixel 0 de la pantalla
		}, 500);

		return false;
	});

	//login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if (form_name != null && form_name != "undefined") {
		var about_parrafo = $('#about p');

		about_parrafo.html('Bienvenido, ' + form_name);
		about_parrafo.append('<a href="#" id="logout">Cerrar sesión</a>');
		$('#login').hide();

		$('#logout').click(function(){
			localStorage.clear();
			location.reload();
		});
	}

	// Acordeon

	if (window.location.href.indexOf('about') > -1) {//comprueba si en la url existe la palabra about
		$("#acordeon").accordion();
	}

	//Reloj

	if (window.location.href.indexOf('reloj') > -1) {
		setInterval(function(){
			var reloj = moment().format('hh:mm:ss');
			$("#reloj").html(reloj);
		},1000);
	}

	//validacion de formulario

	if (window.location.href.indexOf('contacto') > -1) {
		$("form input[name= 'date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		/*$.validate({
	    	lang: 'es'
	  	});*/

	  	$.validate({
	    	lang: 'es',
	    	errorMessagePosition: 'top',
	    	scrollToTopOnError: true
	  	});
	}

});