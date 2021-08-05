document.getElementById("movieForm").addEventListener("submit", FetchMovie);

function FetchMovie(e){
    //Prevents the default form submission
    e.preventDefault();

    let movieInput = document.getElementById("movieInput").nodeValue;

    let movieDetails = "";
    // Fetch movie details from OMDB API
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=25e8a37f' + "&t+" + movieInput, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {

        movieDetails += `
            <div class="movie-header">
            <h3></h3>
            <button id="detailBtn">Details</button>
            </div>
            <div class="movie-image">
                <img src="" alt="Movie Poster">
            </div>
            <div class="movie-details">
                <p>Actors: <a href="#"></a></p>
                <p>Director: <a href="#"></a></p>
                <p>Genre: <a href="#"></a></p>
                <p>Runtime: <a href="#"></a></p>
                <p>Released: <a href="#"></a></p>
                <p>Language: <a href="#"></a></p>
            </div>
        `
        document.getElementById("movieBox").innerHTML = movieDetails;
    })
}