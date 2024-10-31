document.addEventListener('DOMContentLoaded', () => {
    const theaterSelect = document.getElementById('theaterSelect');
    const movieList = document.getElementById('movieList');
    const fetchMoviesButton = document.getElementById('fetchMovies');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');


    fetch('http://www.finnkino.fi/xml/Theater/')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const theaters = xmlDoc.getElementsByTagName("Theater");

            for (let i = 0; i < theaters.length; i++) {
                const theater = theaters[i];
                const option = document.createElement('option');
                option.value = theater.getElementsByTagName("ID")[0].textContent;
                option.textContent = theater.getElementsByTagName("Name")[0].textContent;
                theaterSelect.appendChild(option);
            }
        });

    fetchMoviesButton.addEventListener('click', () => {
        const theaterId = theaterSelect.value;
        fetch(`http://www.finnkino.fi/xml/Schedule/?theater=${theaterId}`)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, "text/xml");
                const shows = xmlDoc.getElementsByTagName("Show");

                movieList.innerHTML = ''; // Clear previous results

                for (let i = 0; i < shows.length; i++) {
                    const show = shows[i];
                    const movieDiv = document.createElement('div');
                    movieDiv.className = 'movie';
                    
                    const title = show.getElementsByTagName("Title")[0].textContent;
                    const imageUrl = show.getElementsByTagName("Image")[0].textContent;
                    const showtime = show.getElementsByTagName("dttmShowStart")[0].textContent;

                    movieDiv.innerHTML = `
                        <h2>${title}</h2>
                        <img src="${imageUrl}" alt="${title}">
                        <p>Showtime: ${new Date(showtime).toLocaleString()}</p>
                    `;
                    movieList.appendChild(movieDiv);
                }
            });
    });

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const movies = movieList.getElementsByClassName('movie');

        for (let movie of movies) {
            const title = movie.getElementsByTagName('h2')[0].textContent.toLowerCase();
            movie.style.display = title.includes(query) ? 'block' : 'none';
        }
    });
});
