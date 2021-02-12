$(document).ready(function () {

  $.getJSON('/JSON/movies.json', function (json) {
    $('.div1').append('<div class= "trailer">' + json.movies.bertsDagbok.trailer + '</div>');
    $('.div1').append('<a href = "/Asset/HTML/bokningar.html"><button class="boka">Boka biljett</button>');
    $('.div1').append('<p> Titel: ' + json.movies.bertsDagbok.title + '</p>');
    $('.div1').append('<p> Produktionsår : ' + json.movies.bertsDagbok.productionYear + '</p>');
    $('.div1').append('<p> Längd: ' + json.movies.bertsDagbok.length + ' m</p>');
    $('.div1').append('<p> Genre: ' + json.movies.bertsDagbok.genre + '</p>');
    $('.div1').append('<p> Utgivare: ' + json.movies.bertsDagbok.distributor + '</p>');
    $('.div1').append('<p> Språk: ' + json.movies.bertsDagbok.language + '</p>');
    $('.div1').append('<p> Undertexter: ' + json.movies.bertsDagbok.subtitles + '</p>');
    $('.div1').append('<p> Regissör: ' + json.movies.bertsDagbok.director + '</p>');
    $('.div1').append('<p> Skådespelare: ' + json.movies.bertsDagbok.actors + '</p>');
    $('.div1').append('<p> Handling: ' + json.movies.bertsDagbok.description + '</p>');
  });

  $.getJSON('/JSON/showings.json', function (json2) {
    let arr = json2.showings.bertsDagbok;

    $('.div2').append('<h2>Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time + " " + obj.auditorium + '</div>');
    });

  });
});