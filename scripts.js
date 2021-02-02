$(document).ready(function() {
 
  $.getJSON('../showings.json', function (json2) {
    let arr = json2.showings.afterWeCollided;


    arr.forEach(obj => {
      if (obj.date == "2021-02-01" && obj.time == "17.30") {
        $('.monday').append('');
      }
      
    });
    
    });
  
});





// comeplay <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpGoWICsaw6aAnbrnX37mgFgALMZYmxKO3HxvUfFxNAJ_HOEw"></img>
//afterwe <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgdmGPWW57tvH1SxPwqRZqebsxPSyVp10M53z1u_X0j0MeWL0J">
//andraSidan <img src="https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/379834/33a974c2c8df0019ba1dce5ef732126f-andra-sidan-poster.jpg">
//bert <img src="https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/373315/cd1495530b2b0377d58ade681c2d12ee-artwork-berts-dagbok.jpg"></img>
//alfons <img src="https://1tt96y3e4ctaz48o4cf53sba-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/AlfonslekerEinstein_affisch_A3-jpg.jpg">