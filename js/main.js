/* Y7 group 2015
 * Im Auftrag von Indilex
 * (c) Alle Rechte vorbehalten
 * - ME 
 */

jQuery(document).ready(function($)  {
  
 
	// Opacity Effekt
	$("#scrollup i").hover(
		function() {
			$('#scrollup i').fadeIn().removeClass("opacity50");
		 },
		function() {		
			$('#scrollup i').fadeIn().addClass("opacity50");
		}
		
	);
	
	$('#burger').click(function(){
		$('#mm').toggleClass("expanded");
	});
	

	/*$('#mainmenu #burger').hover(
		function() {
		$('#mainmenu a').addClass("expanded");
	},
	function() {
		$('#mainmenu a').removeClass("expanded");
	}); */
	
	// Alle Link Boxen mit Animationen
	
	/*$('#mainr a').hover(
		function() {
			this.
		},
		function() {
			this.fadeOut();
		}
		
	);*/
	
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


});
