/* Y7 group 2015
 * Im Auftrag von Indilex
 * (c) Alle Rechte vorbehalten
 * - ME 
 */

jQuery(document).ready(function($)  {
  
 
	// Opacity Effekt
	$("#scrollup i").hover(
		function() {
			$('#scrollup i').fadeIn().toggleClass("opacity50");
		 },
		function() {		
			$('#scrollup i').fadeIn().toggleClass("opacity50");
		}
	);
	
	$('#burger').click(function(){
		$('#mm').toggleClass("expanded");
	});
		
	// Scroll Up TODO Tobi wegen Funktion fragen
	
	$(function() {
	  	$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 800);
		        return false;
	      	  }
	    	}
	  	});
	});
	
	$('input').iCheck({
		  // base class added to customized checkboxes
  checkboxClass: 'icheckbox_flat-aero',

  // base class added to customized radio buttons
  radioClass: 'iradio_flat-aero',
  labelHover: false,
  cursor: true
	});

// MENU EMPTY Fix
   $('#mainl').addClass('hidemenu');
   
	if ($("#mainl ul ul").length) {
		
		$('#mainl').removeClass('hidemenu');		
	} else {
		$('#mainr').addClass('specialmargin');	
	}

	

});
