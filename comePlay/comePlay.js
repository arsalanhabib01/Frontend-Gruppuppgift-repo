$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('.div1').html('<div class= "trailer">' + json.movies.comePlay.trailer + '</div>');
    $('.div1').append('<p> Title: ' + json.movies.comePlay.title + '</p>');
    $('.div1').append('<p> Production year : ' + json.movies.comePlay.productionYear + '</p>');
    $('.div1').append('<p> Length: ' + json.movies.comePlay.length + '</p>');
    $('.div1').append('<p> Genre: ' + json.movies.comePlay.genre + '</p>');
    $('.div1').append('<p> Distributor: ' + json.movies.comePlay.distributor + '</p>');
    $('.div1').append('<p> Language: ' + json.movies.comePlay.language + '</p>');
    $('.div1').append('<p> Subtitles: ' + json.movies.comePlay.subtitles + '</p>');
    $('.div1').append('<p> Director: ' + json.movies.comePlay.director + '</p>');
    $('.div1').append('<p> Actors: ' + json.movies.comePlay.actors + '</p>');
    $('.div1').append('<p> Description: ' + json.movies.comePlay.description + '</p>');
  });
  
  $.getJSON('showings.json', function (json2) {
    let arr = json2.showings.comePlay;

    $('.div2').append('<h2 class= "showings">Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time + " " + obj.auditorium + '</div>');
    });
    
    });
  });