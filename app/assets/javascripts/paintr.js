$(function(){
  $('#add_color').click(add_color);
  $('#clear').click(clear);
  $('#colors').on('click', '.box', set_color);
  $('#canvas').on('mouseover', '.paint', paint_color);
  $('#insert_image').click(insert_img);
  create_paint_boxes();
  $('#remove_image').click(remove_image)
  $('#apply_pic').click(apply_pic)
});

function apply_pic()
{
  var image = $('#thumbnail');
  var bgimg = $('#thumbnail').attr('src');
  $('#canvas').css('background', 'url("'+bgimg+'") no-repeat');

}

function remove_image()
{ $('#canvas').css('background', ('url()'));
}

function insert_img()
{
  var url = $('#imageurl').val();
  var image = $('#thumbnail');
  image.attr('src', url);
}

function paint_color()
{
  var color = $('#selected').css('background-color');
  var box = $(this);
  box.css('background-color', color);
}


function create_paint_boxes()
{
  for(var i =0; i < 10000; i++)
  {
    var paint = $('<div>');
    paint.addClass('paint');
    $('#canvas').append(paint);
  }
}

function clear()
{
  $('#colors').empty();
  $('#selected').css('background-color', 'white');
}
function set_color()
{
 var box = $(this);
 var color = box.css('background-color');
  $('#selected').css('background-color', color);
}

function add_color()
{
var color = $('#color').val();
var box = $('<div>');
box.addClass('box');
box.css('background-color', color);
$('#colors').prepend(box);
$('#color').val('');
$('#color').focus();
}