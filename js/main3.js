var userLang = navigator.language || navigator.userLanguage;



function myspanish() {
	Cookies.set("idiom", "es");
	document.getElementById( 'flageng' ).style.display = 'block';
	document.getElementById( 'flagspa' ).style.display = 'none';
	$('.curriculumesp').css('display','block');
	$('.curriculumeng').css('display','none');
	$("#histoli2").text("Inicio");
	$("#histoli3").text("Portafolio");
	$("#introhead").text("Portafolio");
	$("#tellmore").text("Dime Más");
	$("#portfolioset1").text("Portafolio");
	$("#portfolioset2").text("Mis Proyectos");
	$("#portfolioset3").text("Desarrollo Web Con Wordpress");
	$("#portfolioset4").text("Desarrollo Web Con Wordpress");
	$("#portfolioset5").text("Desarrollo Web Con HTML5 y JavaScript");
	$("#portfolioset6").text("Desarrollo Web Con Wordpress");
	$("#portfolioset7").text("Desarrollo Web Con Wordpress");
	$("#portfolioset8").text("Desarrollo Web Con HTML5 y JavaScript");
	$("#portfolioset9").text("Desarrollo Web Con Wordpress");
	$("#portfolioset10").text("Ciencia de Datos");
	$("#portfolioset11").text("Aplicación de escritorio realizado con Java");
	$("#portfolioset12").text("Aplicación de escritorio realizado con  Velneo");
	$("#portfolioset13").text("Aplicación de escritorio realizado con  Velneo");
	
	$("#textmodal1").text("Desarrollo Web Con Wordpress");
	$("#textmodal2").text("Desarrollo de una pagina para la empresa 2waysport realizada en Wordpres y con contenido dinamico.");
	$("#textmodal3").text("Año: 2019");
	$("#textmodal4").text("Cliente: 2waySport");
	$("#textmodal5").text("Categoria: Desarrollo Web");
	$(".camcerrar").text("Cerrar");
	$("#textmodal6").text("Desarrollo Web Con Wordpress");
	$("#textmodal8").text("Año: 2019");
	$("#textmodal9").text("Cliente: Evolve Miami Beach");
	
	$("#textmodal10").text("Desarrollo Web Con Wordpress");
	$("#textmodal11").text("Desarrollo Web Con HTML5 y JavaScript");
	$("#textmodal12").text("Desarrollo de una pagina web comercial para la empresa Possible.  Pagina multi-lenguaje y responsive.");
	$("#textmodal13").text("Año: 2019");
	$("#textmodal14").text("Cliente: Possible");
	$("#textmodal15").text("Categoria: Desarrollo Web");
	$("#textmodal16").text("Desarrollo Web Con Wordpress");
	$("#textmodal17").text("Desarrollo web con gestión de usuarios,   hay dos tipos de usuarios: tarotistas y clientes.    Los clientes pueden solicitar sesiones de videochat y/o enviar preguntas via formulario para recibir respuestas via correo electronico.");
	$("#textmodal18").text("Año: 2018");
	$("#textmodal19").text("Cliente: Univero de Tarot");
	$("#textmodal20").text("Categoria: Desarrollo Web");
	$("#textmodal21").text("Desarrollo Web Con Wordpress");
	$("#textmodal22").text("Año: 2018");
	$("#textmodal23").text("Cliente: Stripperjobs");
	$("#textmodal25").text("Pagina de contactos entre clubes y bailarinas.  Cada bailarina tiene su perfil y puede seleccionar los clubes con los cuales quiere contactar.  Optimizado para todo tipo de dispositivos");
	
	$("#textmodal26").text("Desarrollo Web Con HTML5 y JavaScript");
	$("#textmodal27").text("Año: 2016");
	$("#textmodal28").text("Cliente: Agropezim/Ubiot");
	$("#textmodal29").text("Categoria: Desarrollo Web");
	$("#textmodal30").text("Pagina web de presentacion sencilla para la empresa Agropezim.   Dando informacion relevante de la empresa y como contactarla");
	$("#textmodal31").text("Desarrollo Web Con Wordpress");
	$("#textmodal32").text("Desarrollo con Wordpres para un sitio web de alquiler inmuebles y con gestion de usuario.   Hay gestion de pago e intregacion con redes sociales");
	$("#textmodal33").text("Año:  2016");
	$("#textmodal34").text("Cliente: Rentadvisor");	
	$("#textmodal35").text("Categoria: Desarrollo Web");
	$("#textmodal36").text("Ciencia y analisis de datos");
	$("#textmodal37").text("Proyecto de tesis universitario.   Utilice Python para realizar un estudio de data criminal de Gran Bretaña usando algoritmos y tecnicas de mineria de datos para crear modelos de predicción de comportamiento");
	
	$("#textmodal38").text("Año: 2018");
	$("#textmodal39").text("Cliente: UNET");
	$("#textmodal40").text("Categoria: Ciencia y analisis de datos");
	$("#textmodal41").text("Desarrollo de aplicación de escritorio con Java");
	$("#textmodal42").text("Aplicación de escritorio  para la gestion de inventarios, ordenes de venta y compras de materiales ganaderos para una cooperativa de campesinos.");
	$("#textmodal43").text("Año: 2016");
	$("#textmodal44").text("Cliente: Coproince");
	$("#textmodal45").text("Categoria: Aplicación de escritorio");
	$("#textmodal46").text("Aplicación de escritorio usando Velneo");
	$("#textmodal47").text("Fui parte del equipo de desarrollo del software ERP para getion y administracion de empresas.");
	$("#textmodal48").text("Año: 2012 - 2014");
	$("#textmodal49").text("Cliente: ERPcontable");
	$("#textmodal50").text("Categoria: Aplicación de escritorio");
	$("#textmodal51").text("Aplicación de escritorio usando Velneo");
	$("#textmodal52").text("Desarrollador lider y responsable de modulo de gestion del cliente CRM pertenciente del ERP de ERPcontable");
	$("#textmodal53").text("Año: 2012 - 2014");
	$("#textmodal54").text("Cliente: ERPcontable");
	
	$("#textmodal55").text("Categoria: Aplicación de escritorio");
	$("#textmodal56").text("Desarrollador principal de la pagina para Shokworks. Se hizo un diseño responsive utilizando, bootstrap, css y jquery ");
	$("#textmodal57").text("Año: 2019");
	$("#textmodal58").text("Cliente: Shokworks");
	
	$("#textmodal59").text("Categoria: Desarrollo Web");
	$("#textmodal60").text("Desarrollo Web Con HTML5 y JavaScript");
	
	$("#portfolioset62").text("Desarrollo Web Con Wordpress");
	
	$("#portfolioset63").text("Desarrollo Web Con Wordpress");
	$("#portfolioset64").text("Desarrollo Web Con Java y Spring Tools Suite");
	
	$("#textmodal66").text("Desarrollo Web Con Wordpress");
	$("#textmodal67").text("Parte del grupo de desarrollo encargo en la modificación y actualizacion de contenido de la pagina.  Se actualizaron los datos y se agrego propiedades responsive");
	$("#textmodal68").text("Año: 2019");
	$("#textmodal69").text("Cliente: BarcelonaUS");
	$("#textmodal70").text("Categoria: Desarrollo Web");
	
	}

function myenglish() {
    Cookies.set("idiom", "en");
	document.getElementById( 'flageng' ).style.display = 'none';
	document.getElementById( 'flagspa' ).style.display = 'block';
	$('.curriculumesp').css('display','none');
	$('.curriculumeng').css('display','block');
	$("#histoli2").text("Home");
	$("#histoli3").text("Portfolio");
	$("#introhead").text("Portfolio");
	$("#tellmore").text("Tell me more");
	$("#portfolioset1").text("Portfolio");
	$("#portfolioset2").text("My Projects");
	$("#portfolioset3").text("Web Development with Wordpress");
	$("#portfolioset4").text("Web Development with Wordpress");
	$("#portfolioset5").text("Web Development With HTML5 and JavaScript");
	$("#portfolioset6").text("Web Development with Wordpress");
	$("#portfolioset7").text("Web Development with Wordpress");
	$("#portfolioset8").text("Web Development With HTML5 and JavaScript");
	$("#portfolioset9").text("Web Development with Wordpress");
	$("#portfolioset10").text("Data Science");
	$("#portfolioset11").text("Desktop Application with Java");	
	$("#portfolioset12").text("Desktop Application with Velneo");
	$("#portfolioset13").text("Desktop Application with Velneo");
	
	$("#portfolioset62").text("Web Development with Wordpress");
	$("#portfolioset63").text("Web Development with Wordpress");
	$("#portfolioset64").text("Web Development with Java and Spring Tools Suite");
	
	$("#textmodal1").text("Web Development with Wordpress");
	
	$("#textmodal2").text("Development of a website made in Wordpress for  2waysport company");
	$("#textmodal3").text("Year: 2019");
	$("#textmodal4").text("Client: 2waySport");
	$("#textmodal5").text("Category: Web Development");
	$(".camcerrar").text("Close");
	$("#textmodal6").text("Web Development with Wordpress");
	$("#textmodal7").text("The wordpress theme were updated, it was made desing changes and the site was optimized in order to be responsive.");
	$("#textmodal8").text("Year: 2019");
	$("#textmodal9").text("Client: Evolve Miami Beach");
	$("#textmodal10").text("Category: Web Development");
	$("#textmodal1").text("Category: Web Development");
	$("#textmodal11").text("Web Development With HTML5 and JavaScript");
	$("#textmodal12").text("Web project for Possible.  A Costa Rica insurance company. Multi-language website and responsive");
	$("#textmodal13").text("Year: 2019");
	$("#textmodal14").text("Client: Possible");
	$("#textmodal15").text("Category: Web Development");
	$("#textmodal16").text("Web Development with Wordpress");
	$("#textmodal18").text("Year: 2018");
	$("#textmodal19").text("Client: Univero de Tarot");
	$("#textmodal20").text("Category: Web Development");
	$("#textmodal17").text("Web development with user management, there are two types of users: tarotistas and customers. Clients can request videochat sessions and / or send questions via form to receive answers via email.");
	
	$("#textmodal21").text("Web Development with Wordpress");
	$("#textmodal22").text("Year: 2018");
	$("#textmodal23").text("Client: Stripperjobs");
	$("#textmodal24").text("Web Development with Wordpress");
	$("#textmodal25").text("Contacts page between clubs and dancers. Each dancer has her profile and can select the clubs she wants to contact. Optimized for all types of devices");
	
	
	$("#textmodal26").text("Web Development With HTML5 and JavaScript");
	$("#textmodal27").text("Year: 2016");
	$("#textmodal28").text("Client: Agropezim/Ubiot");
	$("#textmodal29").text("Category: Web Development");
	
	$("#textmodal30").text("Simple web page for the company Agropezim. Giving relevant information about the company and how to contact it");
	$("#textmodal31").text("Web Development with Wordpress");
	$("#textmodal32").text("Development with Wordpres for a real estate rental website with user management. There is payment management and integration with social networks");
	$("#textmodal33").text("Year:  2016");
	$("#textmodal34").text("Client: Rentadvisor");
	$("#textmodal35").text("Category: Web Development");
	$("#textmodal36").text("Data Science and data analysis");
	$("#textmodal37").text("University thesis project. Use Python to conduct a criminal data survey of Great Britain using algorithms and data mining techniques to create behavior prediction models");
	
	$("#textmodal38").text("year: 2018");
	$("#textmodal39").text("Client: UNET");
	$("#textmodal40").text("Category: Data Science");
	$("#textmodal41").text("Desktop development application with Java");
	$("#textmodal42").text("Desktop application for the management of inventories, orders of sale and purchases of livestock materials for a peasant cooperative.");
	$("#textmodal43").text("year: 2016");
	$("#textmodal44").text("Client: Coproince");
	$("#textmodal45").text("Category: Desktop Application");
	$("#textmodal46").text("Desktop Application with Velneo");
	$("#textmodal47").text("I was part of the ERP software development team for management and business administration");
	$("#textmodal48").text("Year: 2012 - 2014");
	$("#textmodal49").text("Client: ERPcontable");
	$("#textmodal50").text("Category: Desktop Application");
	$("#textmodal51").text("Desktop Application with Velneo");
	$("#textmodal52").text("Lead developer and responsible for the CRM module for client management as part of the ERP software from ERPcontable company ");
	$("#textmodal53").text("Year: 2012 - 2014");
	$("#textmodal54").text("Client: ERPcontable");
	$("#textmodal55").text("Category: Desktop Application");
	$("#textmodal56").text("Main developer of the page for Shokworks. A responsive design was made using, bootstrap, css and jquery");
	$("#textmodal57").text("Year: 2019");
	$("#textmodal58").text("Client: Shokworks");
	
	$("#textmodal59").text("Category: Web Development");
	$("#textmodal60").text("Web Development With HTML5 and JavaScript");
	
	$("#textmodal66").text("Web Development with Wordpress");
	$("#textmodal67").text("Part of the development group commissioned in the modification and updating of the content of the page. The data was updated and responsive properties were added");
	$("#textmodal68").text("Year: 2019");
	$("#textmodal69").text("Client: BarcelonaUS");
	$("#textmodal70").text("Category: Web Development");
	
	
	
	
	
	}






$(document).ready(function() {
	
   console.log(Cookies.get("idiom"));
   
   if(Cookies.get("idiom")){
		if(Cookies.get("idiom") == "es"){
			myspanish();
   
		}else{
			myenglish(); 
   
		}
   
   }else{
	    if(userLang.split('-')[0] == "es"){
			myspanish();
   
		}else{
			myenglish(); 
   
		}
   
   }
   
   
   
 
   
   
   
});

 $('#flagspa').click(function(){
	   myspanish();
	   
   });
   
    $('#flageng').click(function(){
	   myenglish();
	   
   });