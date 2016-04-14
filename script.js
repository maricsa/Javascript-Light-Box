$(document).ready(function(){

	$('.lightbox-link').click(function(){
	
	    // $('.lightbox-link').css('display', 'block');
	    $('body').css("background", 'grey');
	    $('body').css('opacity', 0.8);
	    $('.car').show();
	    $('body').css('background', 'rgba(0,0,0,0.5)');
	   
    });
  
        $('.car').on('click',function(){
           $('body').css('background', 'rgba(0,0,0,0.0)');
           $('.car').hide();
        	
    }); 
        

});


