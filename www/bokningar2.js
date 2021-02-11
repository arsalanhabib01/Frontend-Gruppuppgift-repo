$(document).ready(function () {

  $.getJSON('moviesFilmersite.json', function (json) {
    $.each(json, function (key, val) {
      $('#movie').append('<option value=' + val.title + '>' + val.title + '</option>');
    })
  });


})