$(document).ready(function () {

  $.getJSON('../movies.json', function (json) {
    $('.div1').append('<div class= "trailer">' + json.movies.andraSidan.trailer + '</div>');
    $('.div1').append('<a href = "/bokningar.html"><button class="boka">Boka biljett</button>');
    $('.div1').append('<p> Titel: ' + json.movies.andraSidan.title + '</p>');
    $('.div1').append('<p> Produktionsår : ' + json.movies.andraSidan.productionYear + '</p>');
    $('.div1').append('<p> Längd: ' + json.movies.andraSidan.length + ' m</p>');
    $('.div1').append('<p> Genre: ' + json.movies.andraSidan.genre + '</p>');
    $('.div1').append('<p> Utgivare: ' + json.movies.andraSidan.distributor + '</p>');
    $('.div1').append('<p> Språk: ' + json.movies.andraSidan.language + '</p>');
    $('.div1').append('<p> Undertexter: ' + json.movies.andraSidan.subtitles + '</p>');
    $('.div1').append('<p> Regissör: ' + json.movies.andraSidan.director + '</p>');
    $('.div1').append('<p> Skådespelare: ' + json.movies.andraSidan.actors + '</p>');
    $('.div1').append('<p> Handling: ' + json.movies.andraSidan.description + '</p>');
  });

  $.getJSON('../showings.json', function (json2) {
    let arr = json2.showings.andraSidan;

    $('.div2').append('<h2>Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time + " " + obj.auditorium + '</div>');
    });

  });
});
