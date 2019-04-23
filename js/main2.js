var userLang = navigator.language || navigator.userLanguage;



function myspanish() {
	Cookies.set("idiom", "es");
	document.getElementById( 'flageng' ).style.display = 'block';
	document.getElementById( 'flagspa' ).style.display = 'none';
	$('.curriculumesp').css('display','block');
	$('.curriculumeng').css('display','none');
	$("#histoli2").text("Inicio");
	$("#histoli3").text("paso 1");
	$("#histoli4").text("paso 2");
	$("#histoli5").text("paso 3");
	$("#introhead").text("Metodología de Trabajo");
	$("#introlead").text("Desde diseño hasta programación, una vision detallada de como manejo el desarrollo de un proyecto");
	$("#tellmore").text("Dime Mas");
	$("#histoli6").text("Paso 1: Encuentro con el cliente");
	$("#histoli7").text("Primer Contacto");
	$("#histoli8").text("Todo empieza con una buena conversacion.  En este punto es donde el cliente y el programador se conocen y se puede lograr un mejor entendimiento de lo que se quiere");
	$("#histoli9").text("Entrevista con el Cliente");
	$("#histoli10").text("Tendremos una entrevista, apartese la dara una encuesta corta para poder entender todos los detalles del proyecto que desea realizar y darle el mejor servicio posible");
	$("#histoli11").text("Presupuesto y Plan de trabajo");
	$("#histoli12").text("Recibiras una propuesta donde se recopilara todos los requerimientos establecidos para el projecto.  Con la propuesta se incluira el costo del proyecto, plan de trabajo y el tiempo que tomara realizar todo el proyecto");
	$("#histoli13").text("Paso 2: Diseño");
	$("#histoli14").text("Seleccion de tema y plantilla");
	$("#histoli15").text("Segun los requerido del cliente, se buscara temas web gratuitos o pagos en el internet como tema base del desarrollo.   Esto siempre y cuando el cliente quiera un tema prediseñado, tambien existe la opcion de crear un tema original");
	$("#histoli16").text("Se realizara wireframe para esquematizar la estructura del sitio web para que el cliente pueda ver el orden y la ubicacion de cada elemento dentro del sitio web o software");
	$("#histoli17").text("Diseño");
	$("#histoli18").text("Se creara un diseño  de cada una de las partes, componentes, y secciones de la aplicación que se este desarrollando");
	$("#histoli19").text("Paso 3: Desarrollo y lanzamiento");
	$("#histoli20").text("Configuración");
	$("#histoli21").text("El primer paso consiste en configurar servidores, hosting, dominios,base de datos.  Todo lo necesario para que la aplicación funcione");
	$("#histoli22").text("Desarrollo");
	$("#histoli23").text("Se empieza el desarrollo de la aplicación.  Siguiendo las pautas  y requerimiento indicados en el  plan de trabajo.  Durante esta fase se tendra contacto con el cliente para que pueda ver los avances del proyecto.");
	$("#histoli24").text("Control de Calidad");
	$("#histoli25").text("Proceso por el cual cada una de las funcionalidades de la aplicacion son revisadas para asegurar que funcione de forma excelente y a prueba de errores");
	$("#histoli26").text("Entrenamiento");
	$("#histoli27").text("Cuando el sitio este finalizado y aprobado por el cliente. Yo como programador me sentare con el cliente o con su grupo de trabajo para dar todas las instrucciones necesarias para manejar el sitio o la aplicación");
	$("#histoli28").text("Lanzamiento");
	$("#histoli29").text("El sitio web estara completamente operativo, como programador estare atento por el siguiente mes de funcionamiento para garantizar que funcione como supone debe ser");
	
	
	}

function myenglish() {
    Cookies.set("idiom", "en");
	document.getElementById( 'flageng' ).style.display = 'none';
	document.getElementById( 'flagspa' ).style.display = 'block';
	$('.curriculumesp').css('display','none');
	$('.curriculumeng').css('display','block');
	$("#histoli2").text("Home");
	$("#histoli3").text("Step 1");
	$("#histoli4").text("Step 2");
	$("#histoli5").text("paso 3");
	$("#introhead").text("Work process");
	$("#introlead").text("From wireframe to code, here’s a detailed look at how I run a normal project");
	$("#tellmore").text("Tell me More");
	$("#histoli6").text("step 1: Meating with the client");
	$("#histoli7").text("First Contact");
	$("#histoli8").text("All good things start with a nice chat. Here's where we'll get to know each other and I'll get a better understanding of what you'd like to achieve.");
	$("#histoli9").text("Interview with the client");
	$("#histoli10").text("We will have an interview,  besides you will fill out a short brief so I can gather all the details I'll need to give you the best service I can. ");
	$("#histoli11").text("Work Schedule and Budget");
	$("#histoli12").text("You'll then receive a proposal outlining everything we've agreed on for the project.  With the  proposal includes the cost of the project, work schedule and how much time will take to complete the project");
	$("#histoli13").text("Step 2: Design");
	$("#histoli14").text("Theme selection");
	$("#histoli15").text("According to the client's requirements, free web themes or online payments will be sought as a base theme of the development. This is as long as the client wants a pre-designed theme, there is also the option to create an original theme");
	$("#histoli16").text("Wireframe will be made to outline the structure of the website so that the client can see the order and location of each element within the website or software");
	$("#histoli17").text("Design");
	$("#histoli18").text("A design of each of the parts, components, and sections of the application being developed will be created so the client can see the first look of the app");
	$("#histoli19").text("Step 3: Development and  launch");
	$("#histoli20").text("Configuration");
	$("#histoli21").text("The first step is to configure servers, hosting, domains, database. Everything necessary for the application to work");
	$("#histoli22").text("Coding");
	$("#histoli23").text("The development of the application begins. Following the guidelines and requirements indicated in the work plan. During this phase me as proogrammer will have contact with the client so you can see the progress of the project.");
	$("#histoli24").text("Quality Assurance");
	$("#histoli25").text("Process by which each of the functionalities of the application are reviewed to ensure that it works excellently and fail-safe");
	$("#histoli26").text("Training");
	$("#histoli27").text("Once you've had a look at the site and you're happy with the functionality and feel, I'll sit down with you (and your team if you'd like) to show you everything you need to know about managing the site going forward.");
	$("#histoli28").text("Launch");
	$("#histoli29").text("The website will be fully operational, as a programmer I will be attentive for the next month of operation to ensure that it works as it should be.");
	
	
	
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