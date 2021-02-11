$(document).ready(function () {

  $.getJSON('/Asset/JSON/movies.json', function (json) {
    $('.div1').append('<div class= "trailer">' + json.movies.alfonsLekerEinstein.trailer + '</div>');
    $('.div1').append('<a href = "/Asset/HTML/bokningar.html"><button class="boka">Boka biljett</button>');
    $('.div1').append('<p> Titel: ' + json.movies.alfonsLekerEinstein.title + '</p>');
    $('.div1').append('<p> Produktionsår : ' + json.movies.alfonsLekerEinstein.productionYear + '</p>');
    $('.div1').append('<p> Längd: ' + json.movies.alfonsLekerEinstein.length + ' m</p>');
    $('.div1').append('<p> Genre: ' + json.movies.alfonsLekerEinstein.genre + '</p>');
    $('.div1').append('<p> Utgivare: ' + json.movies.alfonsLekerEinstein.distributor + '</p>');
    $('.div1').append('<p> Språk: ' + json.movies.alfonsLekerEinstein.language + '</p>');
    $('.div1').append('<p> Undertexter: ' + json.movies.alfonsLekerEinstein.subtitles + '</p>');
    $('.div1').append('<p> Regissör: ' + json.movies.alfonsLekerEinstein.director + '</p>');
    $('.div1').append('<p> Skådespelare: ' + json.movies.alfonsLekerEinstein.actors + '</p>');
    $('.div1').append('<p> Handling: ' + json.movies.alfonsLekerEinstein.description + '</p>');
  });

  $.getJSON('/Asset/JSON/showings.json', function (json2) {
    let arr = json2.showings.alfonsLekerEinstein;

    $('.div2').append('<h2>Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time + " " + obj.auditorium + '</div>');
    });

  });

});

