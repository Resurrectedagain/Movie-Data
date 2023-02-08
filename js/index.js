const toggleMode = document.querySelector('#toggle-mode');
const movieContainer = document.querySelector(".movie-container");
const sortByRating = document.querySelector("#sort-by-rating");

let mode = "light"
toggleMode.addEventListener('click', function () {
  let content = document.querySelector('.body');
  if (mode == 'light') {
    content.classList.remove("light-mode")
    content.classList.add("dark-mode")
    mode = "dark";
  } else {
    content.classList.remove("dark-mode")
    content.classList.add("light-mode")
    mode = "light";
  }
})

function displayMovies(movieData){
  for (let key in movieData) {
  let movieCard = document.createElement("div")
  movieCard.classList.add('movie-card')
  movieCard.innerHTML = `
  <img src="${movieData[key]['image']}" alt="${movieData[key]}" height="500px">
  <h2 class="movie-title">${key}</h2>

    <p class="plot">${movieData[key]['plot']}</p>
    <div class="extras-container">
    <h3 class="rating">${movieData[key]['rating']}</h3>
    <h3 class="runtime">${movieData[key]['runtime']}</h3>
    <h3 class="movie-year">${movieData[key]['year']}</h3>
    </div>`;
  movieContainer.appendChild(movieCard);
}
}
displayMovies(movieData)

sortByRating.addEventListener('click', function(){
  console.log(movieData)
  movieData = Object.entries(movieData)
  movieData.sort(function(a, b){
    return a.rating - b.rating
  })
  console.log(movieData);
  sorted_movieData = {}
  for(let i=0; i<movieData.length; i++){
    sorted_movieData[movieData[i][0]] = movieData[i][1];
  }
  movieData = sorted_movieData
  console.log(movieData)
  console.log(sorted_movieData)
  displayMovies(movieData)
})