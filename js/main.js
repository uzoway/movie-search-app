document.getElementById("movieForm").addEventListener("submit", FetchMovie);

function FetchMovie(e){
    //Prevents the default form submission
    e.preventDefault();

    let movieInput = document.getElementById("movieInput").nodeValue;

    // Fetch movie details from OMDB API
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=25e8a37f' + "&t+" + movieInput, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}