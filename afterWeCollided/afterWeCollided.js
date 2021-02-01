$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('.div1').append('<div class= "trailer">' + json.movies.afterWeCollide.trailer + '</div>');
    $('.div1').append('<p> Title: ' + json.movies.afterWeCollide.title + '</p>');
    $('.div1').append('<p> Production year : ' + json.movies.afterWeCollide.productionYear + '</p>');
    $('.div1').append('<p> Length: ' + json.movies.afterWeCollide.length + '</p>');
    $('.div1').append('<p> Genre: ' + json.movies.afterWeCollide.genre + '</p>');
    $('.div1').append('<p> Distributor: ' + json.movies.afterWeCollide.distributor + '</p>');
    $('.div1').append('<p> Language: ' + json.movies.afterWeCollide.language + '</p>');
    $('.div1').append('<p> Subtitles: ' + json.movies.afterWeCollide.subtitles + '</p>');
    $('.div1').append('<p> Director: ' + json.movies.afterWeCollide.director + '</p>');
    $('.div1').append('<p> Actors: ' + json.movies.afterWeCollide.actors + '</p>');
    $('.div1').append('<p> Description: ' + json.movies.afterWeCollide.description + '</p>');
  });

  $.getJSON('showings.json', function (json2) {
    let arr = json2.showings.afterWeCollided;

    $('.div2').append('<h2 class= "showings">Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time +  " " + obj.auditorium + '</div>');
    });
    
    });
  
});