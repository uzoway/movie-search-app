document.getElementById("movieForm").addEventListener("submit", FetchMovie);

function FetchMovie(e){
    //Prevents the default form submission
    e.preventDefault();

    let movieInput = document.getElementById("movieInput").value;

    let movieDetails = "";
    
    // Fetch movie details from OMDB API
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=25e8a37f' + "&t=" + movieInput, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {

        movieDetails += `
            <div class="movie-header">
            <h3>${data.Title}</h3>
            <button id="detailBtn">Details</button>
            </div>
            <div class="movie-image">
                <img src="${data.Poster}" alt="Movie Poster">
            </div>
            <div class="movie-details" id="movieDeatailBox">
                <p>Actors: <a href="#">${data.Actors}</a></p>
                <p>Director: <a href="#">${data.Director}</a></p>
                <p>Genre: <a href="#">${data.Genre}</a></p>
                <p>Runtime: <a href="#">${data.Runtime}</a></p>
                <p>Released: <a href="#">${data.Released}</a></p>
                <p>Language: <a href="#">${data.Language}</a></p>
            </div>
        `

        // Append the Search Result to the MovieBox div in the HTML file
        document.getElementById("movieBox").innerHTML = movieDetails;

        // Collaspe or expand the Movie details box
        document.getElementById("detailBtn").addEventListener('click', function(){
            let movieDetailBox = document.getElementById("movieDeatailBox");
            movieDetailBox.classList.toggle("active");
        })
    })
}