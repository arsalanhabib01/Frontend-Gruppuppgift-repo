$(document).ready(function() {
                  
  $.getJSON('../movies.json', function(json) {
    $('.div1').append('<div class= "trailer">' + json.movies.afterWeCollide.trailer + '</div>');
    $('.div1').append('<p> Titel: ' + json.movies.afterWeCollide.title + '</p>');
    $('.div1').append('<p> Produktionsår : ' + json.movies.afterWeCollide.productionYear + '</p>');
    $('.div1').append('<p> Längd: ' + json.movies.afterWeCollide.length + ' m</p>');
    $('.div1').append('<p> Genre: ' + json.movies.afterWeCollide.genre + '</p>');
    $('.div1').append('<p> Utgivare: ' + json.movies.afterWeCollide.distributor + '</p>');
    $('.div1').append('<p> Språk: ' + json.movies.afterWeCollide.language + '</p>');
    $('.div1').append('<p> Undertexter: ' + json.movies.afterWeCollide.subtitles + '</p>');
    $('.div1').append('<p> Regissör: ' + json.movies.afterWeCollide.director + '</p>');
    $('.div1').append('<p> Skådespelare: ' + json.movies.afterWeCollide.actors + '</p>');
    $('.div1').append('<p> Handling: ' + json.movies.afterWeCollide.description + '</p>');
  });

  $.getJSON('../showings.json', function (json2) {
    let arr = json2.showings.afterWeCollided;

    $('.div2').append('<h2>Visningar:</h2>');

    arr.forEach(obj => {
      $('.div2').append('<div class= "showings">' + obj.date + " " + obj.time +  " " + obj.auditorium + '</div>');
    });
    
    });
  
});