
async function loadPhotos() {
  let movies = await $.getJSON(`moviesFilmersite.json`)
  console.log(movies)
  renderMovies(movies);
}

loadPhotos();
function renderMovies(movies) {

  let articles = movies.map(movie => `
    <div>
    <a href = "${movie.id}/${movie.id}.html">
      <img src="${movie.picture}" class="movieimage">
    </a>
    <h2 class="movietitle">${movie.title}</h2>
      <p class="moviedescribtion">${movie.describtion}</p>
    </div>
  `);

  articles.forEach(article => $('body').append(article));
}