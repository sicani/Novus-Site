var main = function() {

  $('.icon-menu').click(function() {
    $('.menu').animate({
      top: "0px"
    }, 500);

    $('body').animate({
      top: "500px"
    }, 500);
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      top: "-800px"
    }, 300);
	
    $('body').animate({
      top: "0px"
    }, 300);
  });
  
  //Pressing Esc key closes modal (for my own preference)
   $(document).keydown(function(e)	{
	  if (event.keyCode === 27)	{
		  $('.menu').animate({
			  top: "-800px"
		  }, 300);
	  }
  });
};


$(document).ready(main);