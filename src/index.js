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
            const titleDiv = document.createElement('div')
            titleDiv.textContent = movie.title
            titleFilms.appendChild(titleDiv)

        })
    })
    
}
forTitles()

const forPoster = function() {
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then((data) => {
        // console.log(data);
        data.forEach((movie) => {
            const posterDiv = document.createElement('div')
            posterDiv.textContent = movie.poster
            // titleFilms.appendChild(titleDiv)

        })
    })
    
}
forPoster()

//document.getElementById("f-Item").addEventListener('click', forPoster)