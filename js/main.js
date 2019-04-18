var userLang = navigator.language || navigator.userLanguage;

console.log(userLang.split('-')[0]);

function myspanish() {
	document.getElementById( 'flageng' ).style.display = 'block';
	document.getElementById( 'flagspa' ).style.display = 'none';
	$("#aboutli").text("Acerca");
	$("#servicesli").text("Servicios");
	$("#portli").text("Portafolios");
	$("#histoli").text("Historia");
	$("#introlead").text("Bienvenidos a mi Estudio!");
	$("#introhead").text("Es un placer");
	$("#tellmore").text("Dime Más");
	$("#sectheadabout").text("Acerca");
	$("#sectheadabout2").text("Información Personal");
	$("#textoabout").text("En lo profesional, ingeniero en informatica.  Siempre me he movido entre el desarrollo (web y de aplicaciones) como la ciencia de datos.  Mi pasatiempo es el de escribir, me gusta investigar sobre temas que me llaman la atencion y redactar pequeños ensayos. A veces, escribo historias de ficción");
    $("#setservicesh2").text("Servicios");
	$("#setservicesh3").text("Mis perfiles laborales");
	$("#setservicesh4").text("Desarrollador Web");
	$("#setservicesh5").text("Durante mis primeros años en el mundo profesional trabaje como desarrollador frontend y backend. Trabajando con: HTML, JavaScript, CSS, Php, Ruby on Rails,Yii Framework,bootstrap, Angular.js. ");
	$("#setservicesh6").text("Desarrollador Web");
	$("#setservicesh7").text("Como científico de datos trabajo mezclando estadisticas, informatica y mucha creatividad. En este apartado he trabajado con R y Python");
	$("#setservicesh8").text("Creador de Contenidos");
	$("#setservicesh9").text("Me gusta escribir como programar,  Por ello lleno mis blogs personales con mis escritos y codigos de programas que he realizado para compartirlos.");
	$("#portfolioset1").text("Portafolio");
	$("#portfolioset2").text("Mis proyectos");
	$("#secthisto1").text("Historia");
	$("#secthisto2").text("Mi evolucion");
	$("#secthisto3").text("Mis estudios: Ingenieria en Informatica");
	$("#secthisto4").text("Inicie mis estudios en la Universidad Nacional Experimental del Tachira, cursando la carrera de Ingenieria en Informatica. Donde aprendi los  fundamentos de la ciencia de la computación, la ingeniería electrónica y la ingeniería de software. ");
	$("#secthisto5").text("Primer empleo:  ERPcontable");
	$("#secthisto6").text("Durante el 2012 obtuve mi primer empleo donde ejerci el papel de desarrollador de aplicaciones utilzando la herramienta Velneo. Tambien ejerci el papel de desarrollador web, helpdesk y soporte ");
	$("#secthisto7").text("Tiempos de cambios: Can Polit");
	$("#secthisto8").text("A finales de 2014 decidir cambiar de perfil laboral, enfocando a trabajar en desarrollo web utilizando herramientas como Ruby on Rails, Bootstrap, etc.");
	$("#secthisto9").text("Evolucionando: Agropezim");
	$("#secthisto10").text("Empece  una nueva aventura,  ejerciendo mas el aspecto gerencial de la carrera al encargarme de supervisar la implementacion de la herramienta  Odoo dentro de la organización. Ademas empece adentrarme en el mundo de la Data Sciences");
	$("#secthisto11").text("La Actualidad: Ubiot");
	$("#secthisto12").text("Ubiot Siendo una subsidiaria de Agropezim,  mi perfil ha estado enfocado exclusivamente en el trabajo como cientifico de datos (data scientist). Ocasionalmente participando en proyectos de desarrollo web");
	$("#secthisto13").text("Ubiot");
	$("#secthisto14").text("Empece  una nueva aventura,  ejerciendo mas el aspecto gerencial de la carrera al encargarme de supervisar la implementacion de la herramienta  Odoo dentro de la organización. Ademas empece adentrarme en el mundo de la Data Sciences");
	$("#secthisto15").text("Desarrollo Web - Wordpress");
	$("#secthisto16").text("Dedicado al desarrollo web con wordpress y ruby on rails freelance realizando mas de 6 proyectos durante todo el año.  Fui responsable del desarrollo completo y de cada fase del proyecto de cada pagina web en los cuales participe");
	$("#secthisto17").text("Se parte de mi Historia");
	$("#metodo1").text("Metodologia SCRUM");
	$("#metodo2").text("Scrum es el nombre con el que se denomina a los marcos de desarrollo ágiles. Es un proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente, en equipo y obtener el mejor resultado posible de proyectos, caracterizado por: Adoptar una estrategia de desarrollo incremental, en lugar de la planificación y ejecución completa del producto. Basar la calidad del resultado más en el conocimiento tácito de las personas en equipos auto organizados, que en la calidad de los procesos empleados. Solapamiento de las diferentes fases del desarrollo, en lugar de realizar una tras otra en un ciclo secuencial o en cascada");
	$("#metodo3").text("Metodologia de trabajo");
	$("#metodo4").text("Expandir");
	$("#experitica1").text("Lenguajes y Herramientas");
	$("#experitica2").text("Lenguajes ");
	$("#experitica3").text("Herramientas");
	
	$("#experitica4").text("Base de datos / Cloud");
	$("#portfolioset3").text("Desarrollo Web Con Wordpress");
	$("#portfolioset4").text("Desarrollo Web Con Wordpress");
	$("#portfolioset5").text("Desarrollo Web Con HTML5 y JavaScript");
	$("#portfolioset6").text("Desarrollo Web Con Wordpress");
	$("#portfolioset7").text("Desarrollo Web Con Wordpress");
	$("#portfolioset8").text("Desarrollo Web Con HTML5 y JavaScript");
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
	$('.curriculumesp').css('display','block');
	$('.curriculumeng').css('display','none');
	
	}

function myenglish() {

	document.getElementById( 'flageng' ).style.display = 'none';
	document.getElementById( 'flagspa' ).style.display = 'block';
	$("#aboutli").text("About");
	$("#servicesli").text("Services");
	$("#portli").text("Portfolios");
	$("#histoli").text("History");
	$("#introlead").text("Welcome to my Studio!");
	$("#introhead").text("It's a pleasure");
	$("#tellmore").text("Tell more");
	$("#sectheadabout").text("About");
	$("#sectheadabout2").text("Personal Information");
	$("#textoabout").text("In my professional life I am a software engineer working mostly as Web developer and Data Scientist My hobby is writing, I love to read and enjoy the internet");
	$("#setservicesh2").text("Services");
	$("#setservicesh3").text("Professional Profile");
	$("#setservicesh4").text("Web Developer");
	$("#setservicesh5").text("I have been working in web development for almost 8 years in the  frontend and backend areas.  I have been working with: HTML, JavaScript, CSS, Php, Ruby on Rails,Yii Framework,bootstrap, Wordpress, Angular.js. ");
	$("#setservicesh6").text("Data Scientist");
	$("#setservicesh7").text("I have been working as Data Scientist, My main project in this areas is my college Thesis is about aplying Data mining on criminal statistics using R and Python");
	$("#setservicesh8").text("Content Creator");
	$("#setservicesh9").text("I love to write as I love coding, I had run severals blogs and I like to answers questions on Quora and Reddit.");
	$("#portfolioset1").text("Portfolio");
	$("#portfolioset2").text("My Projects");	
	$("#secthisto1").text("History");
	$("#secthisto2").text("My Evolution");
	$("#secthisto3").text("My Studies: Software Engineering");
	$("#secthisto4").text("My academics studies started in the University of Tachira, The career I choose to study was Software engineering where I learned  the fundamentals of Computer Science, Web development, Coding and software Development");
	$("#secthisto5").text("My First Job:  ERPcontable");
	$("#secthisto6").text("During 2012 I worked in my first Job as Application Developer using the spanish framework Velneo.  During those days I also work as web developer improving the company's website, I did helpdesk and client support");
	$("#secthisto7").text("My second job: Can Polit");
	$("#secthisto8").text("In 2014 I change jobs and became full web developer working in several websites using Ruby on Rails, Bootstrap, Responsive desing and more");
	$("#secthisto9").text("Next step: Agropezim");
	$("#secthisto10").text("I started a  new adventure when I was hired to supervised the deployment of Odoo ERP in Agropezim.  And became junior engineering on the Data Science projects of the company");
    $("#secthisto11").text("Ubiot");
	$("#secthisto12").text("During this year I invested most of my time working in data science projects. Sometimes I lead web development inside the company");
	$("#secthisto13").text("Ubiot");	
	$("#secthisto14").text("Once again became a full web developer working with wordpress. Leading the development of Rentadvisor's website with the purpose of renting houses in Chile");
	$("#secthisto15").text("Web Development - Wordpress");
	$("#secthisto16").text("Dedicated to web development with wordpress and ruby ​​on rails freelance making more than 6 projects throughout the year. I was responsible for the complete development and each phase of the project of each web page in which I participated");
	$("#secthisto17").text("Be part of my history");
	$("#metodo1").text("Scrum Methodology");
	$("#metodo2").text("Scrum is an agile framework for managing knowledge work, with an emphasis on software development, although it has wide application in other fields and is slowly starting to be explored by traditional project teams more generally. It is designed for teams of three to nine members, who break their work into actions that can be completed within timeboxed iterations, called sprints, no longer than one month and most commonly two weeks, then track progress and re-plan in 15-minute time-boxed stand-up meetings, called daily scrum");
	$("#metodo3").text("Metodologia de trabajo");
	$("#metodo4").text("See More");
	$("#experitica1").text("Languages and Tools");
	$("#experitica2").text("Languages");
	
	$("#experitica3").text("Tools");
	
	$("#experitica4").text("Database / Cloud");
	$("#portfolioset3").text("Web Development with Wordpress");
	$("#portfolioset4").text("Web Development with Wordpress");
	$("#portfolioset5").text("Web Development With HTML5 and JavaScript");
	$("#portfolioset6").text("Web Development with Wordpress");
	$("#portfolioset7").text("Web Development with Wordpress");
	$("#portfolioset8").text("Web Development With HTML5 and JavaScript");
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
	$('.curriculumesp').css('display','none');
	$('.curriculumeng').css('display','block');

}

$(document).ready(function() {
   
   if(userLang.split('-')[0] == "es"){
		myspanish();
   
   }else{
	  myenglish(); 
   
   }
   
   
   
});

 $('#flagspa').click(function(){
	   myspanish();
	   
   });
   
    $('#flageng').click(function(){
	   myenglish();
	   
   });