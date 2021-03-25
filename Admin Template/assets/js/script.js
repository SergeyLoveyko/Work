$('#btn-sidebar').on('click', function() {
  $('#sidebar').toggleClass('active');
});

$('#btn-sidebar-hide').on('click', function() {
  $('#sidebar').toggleClass('hide');
});

$('#btn-sidebar-color').on('click', function() {
  $('#sidebar').toggleClass('color');
});

$('#btn-sidebar-mouse').on('click', function() {
  $('#sidebar').addClass('add');
  $('#sidebar').removeClass('color');
});


$('#btn-sidebar-return').on('click', function() {
  if ( $('#sidebar').hasClass('add') ) {
    $('#sidebar').removeClass('add');
  }
});



var butt = 'on';

//  Color: Red;
$('#btn-sidebar-swich').on('click', function() {
  if ( butt == 'on' ) {
    $('#sidebar').addClass('red');
    butt = 'off';
  } else {
    if ( butt == 'off' ) {
    $('#sidebar').removeClass('red');
    butt = 'on' ;
    }
  }
});


var state = "expanded";
//Check if navbar is expanded or minimized and handle 
$('#navbar-toggle').click(function() {
    if (state == "expanded") {
        $('.sidebar').css('margin-left', '-180px');
        state = "minimized";
    } else {
        if (state == "minimized") {
            $('.sidebar').css('margin-left', '0px');
            state = "expanded";
        }
    }
});







/* 
$(ducument).ready(function() {

  $('#btn-sidebar').on('click', function() {
    // $('#sidebar').toggleClass('active');
  });

});
 */
/* 
$( "#btn-sidebar" ).click(function() {
  $('.collapse_main').pslideU(); 
});
 */

