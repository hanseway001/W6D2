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
    $(this).toggleClass('lighter');
});