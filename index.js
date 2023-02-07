let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };
  
let mode = "light"
const toggleMode = document.querySelector('#toggle-mode');
toggleMode.addEventListener('click', function(){
  let content = document.querySelector('.body');
  if(mode == 'light'){
    content.classList.remove("light-mode")
    content.classList.add("dark-mode")
    mode = "dark";
  } else{
    content.classList.remove("dark-mode")
    content.classList.add("light-mode")
    mode = "light";
  }
})

let movieContainer = document.querySelector(".movie-container");
for(let key in movieData){
    let movieCard = document.createElement("div")
    movieCard.classList.add('movie-card')
    movieCard.innerHTML = `
    <h2 class="movie-title">${key}</h2>
    <p class="plot">${movieData[key]['plot']}</p>
    <div class="extras-container">
    <h3 class="rating">${movieData[key]['rating']}</h3>
    <h3 class="runtime">${movieData[key]['runtime']}</h3>
    <h3 class="movie-year">${movieData[key]['year']}</h3>
    </div>`;
    movieContainer.appendChild(movieCard);
}

