var main = function() {

  $('.icon-menu').click(function() {
    $('.sidemenu').animate({
      left: "0px"
    }, 300);

    $('body').animate({
      left: "200px"
    }, 300);
  });

  $('.icon-close').click(function() {
    $('.sidemenu').animate({
      left: "-200px"
    }, 300);

    $('body').animate({
      left: "0px"
    }, 300);
  });
};


$(document).ready(main);
$("#list1").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 1000);
});

$(document).ready(main);
$("#list2").click(function() {
    $('html, body').animate({
        scrollTop: $("#desres").offset().top
    }, 1000);
});

$(document).ready(main);
$("#list3").click(function() {
    $('html, body').animate({
        scrollTop: $("#info").offset().top
    }, 1000);
});

$(document).ready(main);	
$("#list4").click(function() {
    $('html, body').animate({
        scrollTop: $("#bvalues").offset().top
    }, 1000);
});

$(document).ready(main);	
$("#list5").click(function() {
    $('html, body').animate({
        scrollTop: $("#desplan").offset().top
    }, 1000);
});

$(document).ready(main);
$("#list6").click(function() {
    $('html, body').animate({
        scrollTop: $("#attributes").offset().top
    }, 1000);
});

$(document).ready(main);	
$("#list7").click(function() {
    $('html, body').animate({
        scrollTop: $("#studies").offset().top
    }, 1000);
});

$(document).ready(main);	
$("#list8").click(function() {
    $('html, body').animate({
        scrollTop: $("#drawings").offset().top
    }, 1000);
});