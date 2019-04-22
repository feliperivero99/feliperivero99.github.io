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