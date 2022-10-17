$('#fourSquareGame').append(

    '<div class="gameBoard">' +
    '<div id="row">'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
    '</div>'+
    '<div id="row">'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
    '</div>'+
    '<div id="row">'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
    '</div>'+
    '<div id="row">'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
        '<div id="button" class="darker"></div>'+
    '</div>'+
    '</div>'


)

$('.gameBoard').on('click', '#row #button', function() {
    // var id = $(this).attr('id');
    // alert(id);
    // alert($(this).children());
//   $(this).parent().children('p').toggleClass('noDisplay');
// $('#button').toggleClass('darker');
    // $('#button').parent().children('#button').toggleClass('lighter');
    $(this).toggleClass('lighter');
  });