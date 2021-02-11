
async function loadPhotos() {
  let movies = await $.getJSON(`/Asset/JSON/moviesFilmersite.json`)
  console.log(movies)
  renderMovies(movies);
}

loadPhotos();
function renderMovies(movies) {

  let articles = movies.map(movie => `
    <div>
      <div class = "contentContainer">
        <div  class = "imageContainer">
           <a href = "${movie.id}/${movie.id}.html">
           <img src="${movie.picture}" class="movieimage">
           </a>
         </div>
         <div class = "textContainer">
           <h2 class="movietitle">${movie.title}</h2>
            <p class="moviedescribtion">${movie.describtion}</p>
         </div>
     </div>
    </div>
  `);

  articles.forEach(article => $('body').append(article));
}