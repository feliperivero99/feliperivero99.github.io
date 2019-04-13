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