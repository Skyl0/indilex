/* Y7 group 2015
 * Im Auftrag von Indilex
 * (c) Alle Rechte vorbehalten
 * - ME 
 */

jQuery(document).ready(function($)  {
  
  	// Vertical Tabs
     $( ".tx-jfmulticontent-pi1" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
     $( ".tx-jfmulticontent-pi1 > li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
     
     
     // Fix für lange Überschriften
     function fixHeader() {
     	if ($(window).width() < 831) {
     		$('div#titleinner').addClass("headerfix");
     	} else {
     		$('div#titleinner').removeClass("headerfix");
     	}
     }
     
     fixHeader();
     
     $(window).resize(function(){
     	fixHeader();
     });
     
     
     // Footer Fix
     
     $('#leistungen a').each(function () {
     	
     	$(this).text(" " + $(this).text() + " "); 
     });
     
     
	// Opacity Effekt
	$("#scrollup i").hover(
		function() {
			$('#scrollup i').fadeIn().addClass("opacity50");
		 },
		function() {		
			$('#scrollup i').fadeIn().removeClass("opacity50");
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
