// Your code here


const link = "https://json-server-1-wvrp.onrender.com/films"
// console.log(link);
const titleFilms = document.getElementById("f-Item")

const forTitles = function() {
    fetch( "https://json-server-1-wvrp.onrender.com/films")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(movie => {
            //console.log(movie);
            const titleList = document.createElement('ul')
            titleList.innerHTML = `
            <ul class = 'ul-btn 'id='${movie.id}' onclick ="movieDetails()" > ${movie.title}</ul>
            <button id = 'delete-btn'> Delete </button> 
            `
            // ul-btn.style.backgroundColor = 'yellow'
            titleFilms.appendChild(titleList)


        })
    })
    
}
forTitles()


// This function is being used to add the movie list and its details including the image
function movieDetails(){
    fetch( "https://json-server-1-wvrp.onrender.com/films")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        data.forEach(movie => {
            const button = document.getElementById(`${movie.id}`)
            button.addEventListener('click', e =>{
                let cards = document.getElementById('showing')
                
                let remainingTicket = `${movie.capacity}` - `${movie.tickets_sold}`
            cards.innerHTML = `
            <div class= 'card'> 
            <div id= 'title' class = 'title'> ${movie.title} </div>
            <div id= 'runtime' class = 'meta'>${movie.runtime} minutes </div>
            <div class="content">
             <div class="description">
                <div id = 'film-info'>${movie.description}</div>
                <span id="showtime" class="ui label">${movie.showtime}</span>
                <span id="ticket-num">${remainingTicket}</span> remaining tickets
            </div>
            <br>
            <div class="extra content">
              <button id="buy-ticket" class="ui orange button">
                Buy Ticket
              </button>
            </div>
            `  
            const pic = document.getElementById('poster')   
            pic.src =`${movie.poster}` 

       
                        
             

// Deducting ticket once it is bought
        console.log( cards.querySelector('#buy-ticket').addEventListener('click', () => {
            
            remainingTicket -= 1  
            cards.querySelector("#ticket-num").textContent = remainingTicket 
            updateTickets(movie) // we'll use this as a function to update the remaining tickets using the patch method
           
        }))
         cards.querySelector("#buy-ticket").removeEventListener('click', (remainingTicket < 0))
             remainingTicket <= 0 
                cards.querySelector("#ticket-num").textContent = remainingTicket
            })
        })
        })


       
      

// PATCH METHOD => it is being used to update  the remaining tickets

function updateTickets(ticket){
    fetch( `https://json-server-1-wvrp.onrender.com/films/${ticket.id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticket)
    })
    .then(res => res.json())
    .then(movie => console.log(movie))
}

// DELETE METHOD

// function erase(){
//     fetch( `https://json-server-1-wvrp.onrender.com/films/`)
//     .then(res => res.json())
//     .then(data => {
//      data.forEach(movie => { 
//      document.querySelector('#delete-btn').addEventListener('click', () => {
//         cards.innerHTML = ''
        
//     })
//     document.querySelector('#delete-btn').addEventListener('click', () => {
//         pic.remove()
//     })
//     })
//     })    }  
//     erase()


}




