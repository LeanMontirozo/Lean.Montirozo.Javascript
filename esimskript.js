const theatreSelect = document.getElementById("theatreSelect");
const movieContainer = document.getElementById("movieContainer");
const searchInput = document.getElementById("searchInput");
const loadBtn = document.getElementById("loadBtn");

const OMDB_API_KEY = "e42810bb";
const CORS = "https://corsproxy.io/?";

// Load theatre list
async function loadTheatres() {
  const res = await fetch(CORS + "https://www.finnkino.fi/xml/TheatreAreas/");
  const xml = await res.text();
  const data = new DOMParser().parseFromString(xml,"text/xml");

  const areas = data.getElementsByTagName("TheatreArea");

  for (let a of areas) {
    const id = a.getElementsByTagName("ID")[0].textContent;
    const name = a.getElementsByTagName("Name")[0].textContent;

    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = name;
    theatreSelect.appendChild(opt);
  }
}

// Load movies
async function loadMovies() {
  movieContainer.innerHTML = "Loading...";

  const theatreID = theatreSelect.value;
  const search = searchInput.value.toLowerCase();

  const res = await fetch(CORS + `https://www.finnkino.fi/xml/Schedule/?area=${theatreID}`);
  const xml = await res.text();
  const data = new DOMParser().parseFromString(xml, "text/xml");

  const shows = data.getElementsByTagName("Show");
  const movies = {};

  for (let s of shows) {
    const title = s.getElementsByTagName("Title")[0].textContent;
    const start = s.getElementsByTagName("dttmShowStart")[0].textContent;

    if (search && !title.toLowerCase().includes(search)) continue;

    if (!movies[title]) movies[title] = { title, showtimes: [] };

    movies[title].showtimes.push(start);
  }

  movieContainer.innerHTML = "";

  for (let title in movies) {
    const omdb = await fetch(
      `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_API_KEY}`
    ).then(r => r.json());

    const poster = omdb.Poster && omdb.Poster !== "N/A"
      ? omdb.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

    movieContainer.innerHTML += `
      <div class="card">
        <img src="${poster}">
        <h3>${title}</h3>
        <p><strong>Year:</strong> ${omdb.Year || "N/A"}</p>
        <p><strong>Genre:</strong> ${omdb.Genre || "N/A"}</p>
        <p><strong>Plot:</strong> ${omdb.Plot || "No plot available"}</p>
        <p><strong>Showtimes:</strong><br>
        ${movies[title].showtimes.map(t => new Date(t).toLocaleString()).join("<br>")}</p>
      </div>
    `;
  }
}

loadBtn.addEventListener("click", loadMovies);

loadTheatres();