function fetchMovieData() {
    const movieTitle = document.getElementById('movie-input').value;
    const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your OMDB API key
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const responseData = JSON.parse(xhr.responseText);
                displayMovieData(responseData);
            } else {
                console.error('Error fetching data');
            }
        }
    };

    xhr.send();
}

function displayMovieData(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 

    if (data.Response === 'False') {
        resultsDiv.textContent = 'Movie not found.';
        return;
    }

    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');
    movieDiv.innerHTML = `
        <img src="${data.Poster}" alt="${data.Title} Poster">
        <div>
            <h2>${data.Title} (${data.Year})</h2>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <p><strong>Rating:</strong> ${data.imdbRating}</p>
        </div>
    `;
    resultsDiv.appendChild(movieDiv);
}


document.getElementById('fetch-movie').addEventListener('click', fetchMovieData);
