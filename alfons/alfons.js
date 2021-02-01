$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('.div1').html('<div class= "trailer">' + json.movies.alfonsLekerEinstein.trailer + '</div>');
    $('.div1').append('<p> Title: ' + json.movies.alfonsLekerEinstein.title + '</p>');
    $('.div1').append('<p> Production year : ' + json.movies.alfonsLekerEinstein.productionYear + '</p>');
    $('.div1').append('<p> Length: ' + json.movies.alfonsLekerEinstein.length + '</p>');
    $('.div1').append('<p> Genre: ' + json.movies.alfonsLekerEinstein.genre + '</p>');
    $('.div1').append('<p> Distributor: ' + json.movies.alfonsLekerEinstein.distributor + '</p>');
    $('.div1').append('<p> Language: ' + json.movies.alfonsLekerEinstein.language + '</p>');
    $('.div1').append('<p> Subtitles: ' + json.movies.alfonsLekerEinstein.subtitles + '</p>');
    $('.div1').append('<p> Director: ' + json.movies.alfonsLekerEinstein.director + '</p>');
    $('.div1').append('<p> Actors: ' + json.movies.alfonsLekerEinstein.actors + '</p>');
    $('.div1').append('<p> Description: ' + json.movies.alfonsLekerEinstein.description + '</p>');
  });
  
  $.getJSON('showings.json', function (json2) {
    let arr = json2.showings.alfonsLekerEinstein;

    $('.div2').append('<h2 class= "showings">Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time +  " " + obj.auditorium + '</div>');
    });
    
    });
  });