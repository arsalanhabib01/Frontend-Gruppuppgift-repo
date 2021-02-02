$(document).ready(function() {
 
  $.getJSON('showings.json', function (json) {
    let firstWeekMovies = [];
    let arrayOfMovies = ["afterWeCollided", "alfonsLekerEinstein", "andraSidan", "bertsDagbok", "comePlay"];
    let picAfter = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgdmGPWW57tvH1SxPwqRZqebsxPSyVp10M53z1u_X0j0MeWL0J";
    let picAlfons = "https://1tt96y3e4ctaz48o4cf53sba-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/AlfonslekerEinstein_affisch_A3-jpg.jpg";
    let picAndra = "https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/379834/33a974c2c8df0019ba1dce5ef732126f-andra-sidan-poster.jpg";
    let picBert = "https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/373315/cd1495530b2b0377d58ade681c2d12ee-artwork-berts-dagbok.jpg";
    let picCome = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpGoWICsaw6aAnbrnX37mgFgALMZYmxKO3HxvUfFxNAJ_HOEw"


    for (let j = 0; j < arrayOfMovies.length; j++){

    let arr = json.showings[arrayOfMovies[j]];

    arr.forEach(obj => {

      for (let i = 1; i < 8; i++) {
        if (obj.date == `2021-02-0${i}`){
          firstWeekMovies.push(obj);
        }
      }
    });
    }

    let mondayMovies = parseMovies(firstWeekMovies, 1);
    let tuesdayMovies = parseMovies(firstWeekMovies, 2);
    let wednesdayMovies = parseMovies(firstWeekMovies, 3);
    let thursdayMovies = parseMovies(firstWeekMovies, 4);
    let fridayMovies = parseMovies(firstWeekMovies, 5);
    let saturdayMovies = parseMovies(firstWeekMovies, 6);
    let sundayMovies = parseMovies(firstWeekMovies, 7);

    addMovies(mondayMovies, ".monday");
    addMovies(tuesdayMovies, ".tuesday");
    addMovies(wednesdayMovies, ".wednesday");
    addMovies(thursdayMovies, ".thursday");
    addMovies(fridayMovies, ".friday");
    addMovies(saturdayMovies, ".saturday");
    addMovies(sundayMovies, ".sunday");

    console.log(mondayMovies);


    // Har array av första veckans filmer
    function parseMovies(allMovies, day){

    let movie1 = allMovies.filter(obj => {
      return obj.date === `2021-02-0${day}` && obj.time === "17.30";
    })
    let movie2 = allMovies.filter(obj => {
      return obj.date === `2021-02-0${day}` && obj.time === "19.30";
    })
    let movie3 = allMovies.filter(obj => {
      return obj.date === `2021-02-0${day}` && obj.time === "21.30";
    })
     
    let movieArray = [movie1[0], movie2[0], movie3[0]];
    
      return movieArray;  
    }

    function addMovies(array, daystring) {
     
      for (let i = 0; i < array.length; i++){
        if (array[i].film === "After we collided") {
          $(`div${daystring}`).append(`<img src="${picAfter}">`);
        }
        else if(array[i].film === "Alfons leker Einstein"){
          $(`div${daystring}`).append(`<img src="${picAlfons}">`);
        }
        else if(array[i].film === "Andra sidan"){
          $(`div${daystring}`).append(`<img src="${picAndra}">`);
        }
        else if(array[i].film === "Berts dagbok"){
          $(`div${daystring}`).append(`<img src="${picBert}">`);
        }
        else if(array[i].film === "Come play"){
          $(`div${daystring}`).append(`<img src="${picCome}">`);
        }
      }
    }

    


    
  });
  });
 