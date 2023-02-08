

let mode = "light"
const toggleMode = document.querySelector('#toggle-mode');
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

let movieContainer = document.querySelector(".movie-container");
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

