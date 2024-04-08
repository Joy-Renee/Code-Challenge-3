// Your code here
/* console.log(document.querySelectorAll('ul#films'))

const list = document.getElementById("f-Items")

function movieTitles(){
    let titles = document.getElementsByClassName('.film item')
   
}
console.log(movieTitles);

function getTitles(fi){
    fetch('http://localhost:3000/films')
    .then(res => res.json() )
    .then(films => films.forEach(film => movieTitles(film))
    )
}

function initialize(){
    return console.log(getTitles())
}

console.log(initialize)

*/

const titleFilms = document.getElementById("f-Item")

const forTitles = function() {
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(movie => {
            //console.log(movie);
            const titleList = document.createElement('li')
            titleList.innerHTML = `
            <button id='${movie.id}' onclick ="movieDetails()" > ${movie.title}</button>
            `
            titleFilms.appendChild(titleList)


        })
    })
    
}
forTitles()

function movieDetails(){
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        data.forEach(movie => {
            const button = document.getElementById(`${movie.id}`)
            button.addEventListener('click', e =>{
                let cards = document.getElementById('showing')
            let remainingTicket = `${movie.capacity}` - `${movie.tickets_sold}`
            cards.innerHTML = `
            <div class= 'card'> </div>
            <div id= 'title' class = 'title'> ${movie.title} </div>
            <div id= 'runtime' class = 'meta'>${movie.runtime} minutes </div>
            <div class="content">
             <div class="description">
                <div id = 'film-info'>${movie.description}</div>
                <span id="showtime" class="ui label">${movie.showtime}</span>
                <span id="ticket-num">${remainingTicket}</span> remaining tickets
            </div>
            div class="extra content">
              <button id="buy-ticket" class="ui orange button">
                Buy Ticket
              </button>
            </div>
            `  
        const pic = document.getElementById('poster')   
        pic.src =`${movie.poster}`   
            })
        })
        })
}

// console.log( document.querySelector('#f-Items').addEventListener('mousover', forTitles))

//function clickEvent

/*
const forPoster = function(){
    fetch("http://localhost:3000/films/1")
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        data.forEach((movie) => {
            //const posterDiv = document.createElement('div')
            //posterDiv.textContent = movie.poster
            // titleFilms.appendChild(titleDiv)

        })
    })
  
}
forPoster()

document.getElementById("f-Item").addEventListener('click', forPoster)
*/

