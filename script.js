$('#fourSquareGame').append(
    '<table class="gameBoard">' +
    '<tr id="row">'+
        '<td id="button"></td>'+
        '<td id="button"></td>'+
        '<td id="button"></td>'+
        '<td id="button"></td>'+
    '</tr>'+
    '<tr id="row">'+
        '<td id="button"></td>'+
        '<td id="button"></td>'+
        '<td id="button"></td>'+
        '<td id="button"></td>'+
    '</tr>'+
    '<tr id="row">'+
        '<td class="button"></td>'+
        '<td id="button"></td>'+
        '<td id="button"></td>'+
        '<td id="button"></td>'+
    '</tr>'+
    '</table>'
   
)

$('.gameBoard').on('click', '#row', function() {
    // alert($(this).parent().children('p').text());
//   $(this).parent().children('p').toggleClass('noDisplay');
$('#button').toggleClass('button');
    $('#button').toggleClass('lighter');
  });