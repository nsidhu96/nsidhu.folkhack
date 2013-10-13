var small_width = 460;
var contact_width = 550;
var mission_width= 530;
function border(){
  if( $(window).width() > small_width ) {

      $('#border_small').hide();
      $('#border').show();
      $('#cycle_menu').hide();

    }
  else {
      $('#cycle_menu').show();
      $('#border_small').show();
      $('#border').hide();
    }

}
function contactBorder(){
    if( $(window).width() > contact_width){
      $('#border_small_contact').hide();
      $('#border_contact').show();
     }
    else {
      $('#border_small_contact').show();
      $('#border_contact').hide();
    }
}
function missionBorder(){
    if( $(window).width() > contact_width){
      $('#border_small_mission').hide();
      $('#border_mission').show();
     }
    else {
      $('#border_small_mission').show();
      $('#border_mission').hide();
    }
}
$(document).ready(function(){
	$('#cycle, #cycle_menu').cycle();
  $('.mission_cycle').cycle({
    containerResize: false,
    slideResize: false,
    fit: 1
  });
  border();
  contactBorder();
  missionBorder();

  $(window).resize( function() {

    border();
    contactBorder();
    missionBorder();
  });
  /*$('#button1, #button2, #button3, #button4').mouseenter(function(){
	    $(this).animate({
	        color:"#FFFFFF",
	        backgroundColor: "#FF9B05"
		    });
	}).mouseleave(function(){
			$(this).animate({
				color:"#FF9B05",
				backgroundColor: "#F5F5F5"
			});
	});*/
	$("#accordion, #app1, #app2, #app3, #main1, #main2, #main3, #des1, #des2, #des3").accordion({
		heightStyle:"content",
		active: "false",
		collapsible: "true",
		event: "click hoverintent"
	});
	var home = "/C:/projects/summer/index.php";
	var menu = "/C:/projects/summer/menu/index.php"
	var contact = "/C:/projects/summer/contact/index.php"
	var mission = "/C:/projects/summer/mission/index.php"
	var pathname = (window.location.pathname);
	if (pathname==home)
	{
		$('#button1').addClass('current');
	};
	if (pathname==menu)
	{
		$('#button2').addClass('current');
	};
	if (pathname==contact)
	{
		$('#button3').addClass('current');
	};
	if (pathname==mission)
	{
		$('#button4').addClass('current');
	};

});
$.event.special.hoverintent = {
    setup: function() {
      $( this ).bind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    teardown: function() {
      $( this ).unbind( "mouseover", jQuery.event.special.hoverintent.handler );
    },
    handler: function( event ) {
      var currentX, currentY, timeout,
        args = arguments,
        target = $( event.target ),
        previousX = event.pageX,
        previousY = event.pageY;
 
      function track( event ) {
        currentX = event.pageX;
        currentY = event.pageY;
      };
 
      function clear() {
        target
          .unbind( "mousemove", track )
          .unbind( "mouseout", clear );
        clearTimeout( timeout );
      }
 
      function handler() {
        var prop,
          orig = event;
 
        if ( ( Math.abs( previousX - currentX ) +
            Math.abs( previousY - currentY ) ) < 7 ) {
          clear();
 
          event = $.Event( "hoverintent" );
          for ( prop in orig ) {
            if ( !( prop in event ) ) {
              event[ prop ] = orig[ prop ];
            }
          }
          // Prevent accessing the original event since the new event
          // is fired asynchronously and the old event is no longer
          // usable (#6028)
          delete event.originalEvent;
 
          target.trigger( event );
        } else {
          previousX = currentX;
          previousY = currentY;
          timeout = setTimeout( handler, 100 );
        }
      }
 
      timeout = setTimeout( handler, 100 );
      target.bind({
        mousemove: track,
        mouseout: clear
      });
    }
};