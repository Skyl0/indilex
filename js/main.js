// TODO implement


jQuery(document).ready(function($)  {

	// Opacity Effekt
	$("#scrollup i").hover(
		function() {
			$('#scrollup i').removeClass("opacity50");
		 },
		function() {		
			$('#scrollup i').addClass("opacity50");
		}
		
	);
	
	// Scroll Up TODO Tobi wegen Funktion fragen
	
	$(function() {
	  	$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
	      	  }
	    	}
	  	});
	});


}
