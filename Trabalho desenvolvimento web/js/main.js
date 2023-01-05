 export const key = "36a231b5bcec996e9ef26d556a119a4c";
 export const imageURL = "https://image.tmdb.org/t/p/original";
 export const baseURL = "https://api.themoviedb.org/3/";

const requests = {
    requestEmAlta: `${baseURL}/trending/all/day?api_key=${key}&language=pt-br`,
    requestPopular: `${baseURL}movie/popular?api_key=${key}&language=pt-br`,
    requestBemAvaliados: `${baseURL}movie/top_rated?api_key=${key}&language=pt-br`,
    requestLançamentos: `${baseURL}movie/upcoming?api_key=${key}&language=pt-br`
}



fetch(requests.requestEmAlta)
.then((res) => res.json())
.then((data) => {
    console.log(data.results)
  const movieList = document.getElementById("first-section-movies");
  const movie = document.createElement("div");
  movie.className = "movie-list";
  movie.id = "em-alta"
  movie.classList.add("movieList");
  movieList.appendChild(movie);
  
  const title = document.createElement("h2");
  title.className = "movieList-title";
  title.innerText = "EM ALTA";
  movie.appendChild(title);
  
  const movie_posters = document.createElement("div");
  movie_posters.className = "movie-poster";
  movieList.appendChild(movie_posters);
  data.results.forEach(movie => {

    const link = document.createElement("a");
    link.href = `detalhes.html?id=${movie.id}`;
    link.className = "movie-img"
    movie_posters.appendChild(link);


    const poster = document.createElement("img");
    poster.className = "movie-img";
    poster.src = imageURL + movie.poster_path;
    link.appendChild(poster);
    

  });
});

fetch(requests.requestPopular)
.then((res) => res.json())
.then((data) => {
    console.log(data)
  const movieList = document.getElementById("first-section-movies");
  const movie = document.createElement("div");
  movie.className = "movie-list";
  movie.id = "popular"
  movie.classList.add("movieList");
  movieList.appendChild(movie);
  
  const title = document.createElement("h2");
  title.className = "movieList-title";
  title.innerText = "POPULAR";
  movie.appendChild(title);
  
  const movie_posters = document.createElement("div");
  movie_posters.className = "movie-poster";
  movieList.appendChild(movie_posters);
  data.results.forEach(movie => {
    
    const link = document.createElement("a");
    link.href = `detalhes.html?id=${movie.id}`
    link.className = "movie-img"
    movie_posters.appendChild(link);


    const poster = document.createElement("img");
    poster.className = "movie-img";
    poster.src = imageURL + movie.poster_path;
    link.appendChild(poster);

  });
});

fetch(requests.requestBemAvaliados)
.then((res) => res.json())
.then((data) => {
    console.log(data)
  const movieList = document.getElementById("first-section-movies");
  const movie = document.createElement("div");
  movie.className = "movie-list";
  movie.id = "bem-avaliados"
  movie.classList.add("movieList");
  movieList.appendChild(movie);
  
  const title = document.createElement("h2");
  title.className = "movieList-title";
  title.innerText = "BEM AVALIADOS";
  movie.appendChild(title);
  
  const movie_posters = document.createElement("div");
  movie_posters.className = "movie-poster";
  movieList.appendChild(movie_posters);
  data.results.forEach(movie => {
    
    const link = document.createElement("a");
    link.href = `detalhes.html?id=${movie.id}`
    link.className = "movie-img"
    movie_posters.appendChild(link);


    const poster = document.createElement("img");
    poster.className = "movie-img";
    poster.src = imageURL + movie.poster_path;
    link.appendChild(poster);

  });
});

fetch(requests.requestLançamentos)
.then((res) => res.json())
.then((data) => {
    console.log(data)
  const movieList = document.getElementById("first-section-movies");
  const movie = document.createElement("div");
  movie.className = "movie-list";
  movie.id = "lancamentos"
  movie.classList.add("movieList");
  movieList.appendChild(movie);
  
  const title = document.createElement("h2");
  title.className = "movieList-title";
  title.innerText = "LANÇAMENTOS";
  movie.appendChild(title);
  
  const movie_posters = document.createElement("div");
  movie_posters.className = "movie-poster";
  movieList.appendChild(movie_posters);
  data.results.forEach(movie => {
    
    const link = document.createElement("a");
    link.href = `detalhes.html?id=${movie.id}`
    link.className = "movie-img"
    movie_posters.appendChild(link);


    const poster = document.createElement("img");
    poster.className = "movie-img";
    poster.src = imageURL + movie.poster_path;
    link.appendChild(poster);

  });
});


