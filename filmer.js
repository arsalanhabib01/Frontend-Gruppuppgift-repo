
async function loadPhotos() {
  let movies = await $.getJSON(`moviesFilmersite.json`)
  console.log(movies)
  renderMovies(movies);
}

loadPhotos();
function renderMovies(movies) {

  let articles = movies.map(movie => `
    <div>
      <img src="${movie.picture}">
      <h2>${movie.title}</h2>
      <p>${movie.describtion}</p>
    </div>
  `);

  articles.forEach(article => $('body').append(article));
}