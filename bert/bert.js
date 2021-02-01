$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('.div1').html('<div class= "trailer">' + json.movies.bertsDagbok.trailer + '</div>');
    $('.div1').append('<p> Title: ' + json.movies.bertsDagbok.title + '</p>');
    $('.div1').append('<p> Production year : ' + json.movies.bertsDagbok.productionYear + '</p>');
    $('.div1').append('<p> Length: ' + json.movies.bertsDagbok.length + '</p>');
    $('.div1').append('<p> Genre: ' + json.movies.bertsDagbok.genre + '</p>');
    $('.div1').append('<p> Distributor: ' + json.movies.bertsDagbok.distributor + '</p>');
    $('.div1').append('<p> Language: ' + json.movies.bertsDagbok.language + '</p>');
    $('.div1').append('<p> Subtitles: ' + json.movies.bertsDagbok.subtitles + '</p>');
    $('.div1').append('<p> Director: ' + json.movies.bertsDagbok.director + '</p>');
    $('.div1').append('<p> Actors: ' + json.movies.bertsDagbok.actors + '</p>');
    $('.div1').append('<p> Description: ' + json.movies.bertsDagbok.description + '</p>');
  });
  
  $.getJSON('showings.json', function (json2) {
    let arr = json2.showings.bertsDagbok;

    $('.div2').append('<h2 class= "showings">Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time +  " " + obj.auditorium + '</div>');
    });
    
    });
  });