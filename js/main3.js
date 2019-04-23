var userLang = navigator.language || navigator.userLanguage;



function myspanish() {
	Cookies.set("idiom", "es");
	document.getElementById( 'flageng' ).style.display = 'block';
	document.getElementById( 'flagspa' ).style.display = 'none';
	$('.curriculumesp').css('display','block');
	$('.curriculumeng').css('display','none');
	
	
	}

function myenglish() {
    Cookies.set("idiom", "en");
	document.getElementById( 'flageng' ).style.display = 'none';
	document.getElementById( 'flagspa' ).style.display = 'block';
	$('.curriculumesp').css('display','none');
	$('.curriculumeng').css('display','block');
	
	
	
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