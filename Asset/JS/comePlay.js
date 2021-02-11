$(document).ready(function () {

  $.getJSON('/Asset/JSON/movies.json', function (json) {
    $('.div1').append('<div class= "trailer">' + json.movies.comePlay.trailer + '</div>');
    $('.div1').append('<a href = "/Asset/HTML/bokningar.html"><button class="boka">Boka biljett</button>');
    $('.div1').append('<p> Titel: ' + json.movies.comePlay.title + '</p>');
    $('.div1').append('<p> Produktionsår : ' + json.movies.comePlay.productionYear + '</p>');
    $('.div1').append('<p> Längd: ' + json.movies.comePlay.length + ' m</p>');
    $('.div1').append('<p> Genre: ' + json.movies.comePlay.genre + '</p>');
    $('.div1').append('<p> Utgivare: ' + json.movies.comePlay.distributor + '</p>');
    $('.div1').append('<p> Språk: ' + json.movies.comePlay.language + '</p>');
    $('.div1').append('<p> Undertexter: ' + json.movies.comePlay.subtitles + '</p>');
    $('.div1').append('<p> Regissör: ' + json.movies.comePlay.director + '</p>');
    $('.div1').append('<p> Skådespelare: ' + json.movies.comePlay.actors + '</p>');
    $('.div1').append('<p> Handling: ' + json.movies.comePlay.description + '</p>');
  });

  $.getJSON('/Asset/JSON/showings.json', function (json2) {
    let arr = json2.showings.comePlay;

    $('.div2').append('<h2>Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time + " " + obj.auditorium + '</div>');
    });

  });
});