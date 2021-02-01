$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('.div1').html(' < div class= "trailer" > ' + json.movies.andraSidan.trailer + '</div > ');
    $('.div1').append('<p> Title: ' + json.movies.andraSidan.title + '</p>');
    $('.div1').append('<p> Production year : ' + json.movies.andraSidan.productionYear + '</p>');
    $('.div1').append('<p> Length: ' + json.movies.andraSidan.length + '</p>');
    $('.div1').append('<p> Genre: ' + json.movies.andraSidan.genre + '</p>');
    $('.div1').append('<p> Distributor: ' + json.movies.andraSidan.distributor + '</p>');
    $('.div1').append('<p> Language: ' + json.movies.andraSidan.language + '</p>');
    $('.div1').append('<p> Subtitles: ' + json.movies.andraSidan.subtitles + '</p>');
    $('.div1').append('<p> Director: ' + json.movies.andraSidan.director + '</p>');
    $('.div1').append('<p> Actors: ' + json.movies.andraSidan.actors + '</p>');
    $('.div1').append('<p> Description: ' + json.movies.andraSidan.description + '</p>');
  });
  
   $.getJSON('showings.json', function (json2) {
    let arr = json2.showings.andraSidan;

    $('.div2').append('<h2 class= "showings">Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time +  " " + obj.auditorium + '</div>');
    });
    
    });
  });
