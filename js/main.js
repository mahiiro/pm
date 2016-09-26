$(document).foundation();
$('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
$('#canvas1').on('click', function () {
    $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
});
$('#map_canvas2').addClass('scrolloff'); // set the pointer events to none on doc ready
$('#canvas2').on('click', function () {
    $('#map_canvas2').removeClass('scrolloff'); // set the pointer events true on click
});
$('#map_canvas3').addClass('scrolloff'); // set the pointer events to none on doc ready
$('#canvas3').on('click', function () {
    $('#map_canvas3').removeClass('scrolloff'); // set the pointer events true on click
});
$('#map_canvas4').addClass('scrolloff'); // set the pointer events to none on doc ready
$('#canvas4').on('click', function () {
    $('#map_canvas4').removeClass('scrolloff'); // set the pointer events true on click
});
// you want to disable pointer events when the mouse leave the canvas area;

$("#map_canvas1").mouseleave(function () {
    $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
});