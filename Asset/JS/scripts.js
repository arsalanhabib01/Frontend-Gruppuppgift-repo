$(document).ready(function() {
 
  $.getJSON('/JSON/showings.json', function (json) {
    let firstWeekMovies = [];
    let arrayOfMovies = ["afterWeCollided", "alfonsLekerEinstein", "andraSidan", "bertsDagbok", "comePlay"];
    let picAfter = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgdmGPWW57tvH1SxPwqRZqebsxPSyVp10M53z1u_X0j0MeWL0J";
    let picAlfons = "https://1tt96y3e4ctaz48o4cf53sba-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/AlfonslekerEinstein_affisch_A3-jpg.jpg";
    let picAndra = "https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/379834/33a974c2c8df0019ba1dce5ef732126f-andra-sidan-poster.jpg";
    let picBert = "https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/373315/cd1495530b2b0377d58ade681c2d12ee-artwork-berts-dagbok.jpg";
    let picCome = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpGoWICsaw6aAnbrnX37mgFgALMZYmxKO3HxvUfFxNAJ_HOEw"


    collectFirstWeekMovies();

    addMovies(parseMovies(firstWeekMovies, 1), ".monday");
    addMovies(parseMovies(firstWeekMovies, 2), ".tuesday");
    addMovies(parseMovies(firstWeekMovies, 3), ".wednesday");
    addMovies(parseMovies(firstWeekMovies, 4), ".thursday");
    addMovies(parseMovies(firstWeekMovies, 5), ".friday");
    addMovies(parseMovies(firstWeekMovies, 6), ".saturday");
    addMovies(parseMovies(firstWeekMovies, 7), ".sunday");

    
    function collectFirstWeekMovies(){
    for (let movie of arrayOfMovies){

    let arr = json.showings[movie];

    arr.forEach(showing => {

      for (let i = 1; i < 8; i++) {
        if (showing.date == `2021-02-0${i}`){
          firstWeekMovies.push(showing);
        }
      }
    });
    }
    }

    function parseMovies(allMovies, day){

    let movie1 = allMovies.filter(movie => {
      return movie.date === `2021-02-0${day}` && movie.time === "17.30";
    })
    let movie2 = allMovies.filter(movie => {
      return movie.date === `2021-02-0${day}` && movie.time === "19.30";
    })
    let movie3 = allMovies.filter(movie => {
      return movie.date === `2021-02-0${day}` && movie.time === "21.30";
    })
     
    let movieArray = [movie1[0], movie2[0], movie3[0]];
    
      return movieArray;  
    }

    function addMovies(array, daystring) {
     
      for (let i = 0; i < array.length; i++){
        if (array[i].film === "After we collided") {
          $(`div${daystring}`).append(`<a href="/HTML/afterWeCollided.html"><img src="${picAfter}"></a>`);
        }
        else if(array[i].film === "Alfons leker Einstein"){
          $(`div${daystring}`).append(`<a href="/HTML/alfons.html"><img src="${picAlfons}"></a>`);
        }
        else if(array[i].film === "Andra sidan"){
          $(`div${daystring}`).append(`<a href="/HTML/andraSidan.html"><img src="${picAndra}"></a>`);
        }
        else if(array[i].film === "Berts dagbok"){
          $(`div${daystring}`).append(`<a href="/HTML/bert.html"><img src="${picBert}"></a>`);
        }
        else if(array[i].film === "Come play"){
          $(`div${daystring}`).append(`<a href="/HTML/comePlay.html"><img src="${picCome}"></a>`);
        }
      }
    }
  
  });
  });
 