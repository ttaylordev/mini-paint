// provide a backgraound image loading tool so that people can pixilate any image
// ideally anyone could trace over their favorite characters and images to transform them into 8 bit characters.
// maybe have a button that automatically 8-bits images.
// provide a way to snapshot images and save them, or upload them
// social media interaction, a way to share it with friends.
// cover or contain background image
// custom color thingy--set defaults for those colors
// original as defaults
// click to drag
$(document).ready(function() {
  makeCanvas(50);
  var activeColor = '#ECFFF8';
  var mint = '#ECFFF8';
  $("#colorPicker").on('change',function(e){
    console.log(e);
    activeColor = e.target.value;
  });
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

  $('#8x8').click(function() {
    $('div.box').remove();
    makeCanvas(8);
  });
  $('#12x12').click(function() {
    $('div.box').remove();
    makeCanvas(12);
  });
  $('#16x16').click(function() {
    $('div.box').remove();
    makeCanvas(16);
  });
  $('#20x20').click(function() {
    $('div.box').remove();
    makeCanvas(20);
  });
  $('#original').click(function() {
    $('div.box').remove();
    makeCanvas(50);

  });
  var gridMe = (function() {
    var count = 0;
    return function(){
      if (count % 2 === 0) {
        $('div.box').css('outline', '1px solid gray');
        count++;
      } else {
        $('div.box').css('outline', '0px');
        count++;
      }
    };
  })();

  $('#showGrid').click(function() {
    gridMe();
  });
  function makeCanvas(int) {
    var sqNo = Math.pow(int,2);
    for (i = 0;i<sqNo;i++){
      var box = document.createElement("div");
      box.className = "box";
      $('.containerDiv').append(box);
    }
    $('.containerDiv').css('width', int*12+'px');

  }
  var containerDivClick = document.querySelector('.containerDiv');
  containerDivClick.addEventListener('click', doSomething, false);

  function doSomething(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target.id;
        $(e.target).css('background-color', activeColor);
    }
    e.stopPropagation();
  }

  $("#reset").on('click', function () {
    $('.box').css('background-color', '#ECFFF8');
  });
});






/*
  $('.box').on('click', function() {
    $(this).css('background-color', activeColor);
    $(this).removeClass(colors);
    $(this).addClass(activeColor);
  });*/

  /*$('.box').dblclick(function() {
    $(this).removeClass(colors);
  });*/


/*$( ".box" ).dblclick(function() {
  activeColor = 'black';
});*/



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
