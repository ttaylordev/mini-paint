/*$(document).ready(function() {
  $('.box').on('click', function() {
  //(argument).jq command(function(){});
    $(this).css('background-color',' white');
});
});*/
// provide a backgraound image loading tool so that people can pixilate any image
// provide a dynamic color selector instead of static colors. allow settings, 8-bit, 16-bit, 32-bit, or 64-bit color schemes
// ideally anyone could essentially trace over their favorite characters and images to transform them into 8 bit characters.
// maybe have a button that automatically 8-bits images.
// square off the "pixels"
// provide greyscale slider.
// provide a way to snapshot images and save them, or upload them
// social media interaction, a way to share it with friends.

$(document).ready(function() {
  var activeColor = '#ECFFF8';
  var colors = ('white red green blue yellow brown #FFCB87');
  var mint = '#ECFFF8';

  $('#red').on('click', function() {
    activeColor = 'red';
  });
  $('#green').on('click', function() {
    activeColor = 'green';
  });
  $('#blue').on('click', function() {
    activeColor = 'blue';
  });
  $('#yellow').on('click', function() {
    activeColor = 'yellow';
  });
  $('#brown').on('click', function() {
    activeColor = 'brown';
  });
  $('#flesh').on('click', function() {
    activeColor = '#FFCB87';
  });
  $( "#white" ).click(function() {
    activeColor = '#ECFFF8';
  });
  /*$( ".box" ).dblclick(function() {
    activeColor = 'black';
  });*/
  $('#64x64').click(function() {
    $('.64').hide();
    $('.original').hide();
  });
  $('#128x128').click(function() {
    $('.64').show();
    $('.128').hide();
    $('.original').hide();
  });
  $('#256x256').click(function() {
    $('.64').show();
    $('.128').show();
    $('.256').hide();
    $('.original').hide();
  });
  $('#original').click(function() {
    $('.64').show();
    $('.128').show();
    $('.256').show();
    $('.original').show();
  });

  $('.box').on('click', function() {
    $(this).css('background-color', activeColor);
    $(this).removeClass(colors);
    $(this).addClass(activeColor);
  });
  /*$('.box').dblclick(function() {
    $(this).removeClass(colors);
  });*/
  $("#reset").on('click', function () {
    $('.box').css('background-color', '#ECFFF8');
    $('.box').removeClass(colors);
    $('.box').addClass('white');
    $('.64').show();
    $('.128').show();
    $('.256').show();
    $('.original').show();
  });
});




/*

$(document).ready(function(){
  $('#red').on('click', function() {
    $('.box').on('click', function() {
    //(argument).jq command(function(){});
      $(this).css('background-color', 'red');
    });
  });
});

$(document).ready(function(){
  $('#blue').on('click', function() {
    $('.box').on('click', function() {
    //(argument).jq command(function(){});
      $(this).css('background-color', 'blue');
    });
  });
});

$(document).ready(function(){
  $('#green').on('click', function() {
    $('.box').on('click', function() {
    //(argument).jq command(function(){});
      $(this).css('background-color', 'green');
    });
  });
});

$(document).ready(function(){
  $('#yellow').on('click', function() {
    $('.box').on('click', function() {
    //(argument).jq command(function(){});
      $(this).css('background-color', 'yellow');
    });
  });
});

$(document).ready(function(){
  $('#white').on('click', function() {
    $('.box').on('click', function() {
    //(argument).jq command(function(){});
      $(this).css('background-color', 'white');
    });
  });
});

$(document).ready(function(){
  $('#brown').on('click', function() {
    $('.box').on('click', function() {
    //(argument).jq command(function(){});
      $(this).css('background-color', 'brown');
    });
  });
});

*/
