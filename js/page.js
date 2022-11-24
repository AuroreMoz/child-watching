
// chargement des contenus sur la page et création des cartes
const contentsToDisplay = getContents();

const seriesContainer = document.getElementById('cw-content-series');
addSeries(contentsToDisplay.series);

const moviesContainer = document.getElementById('cw-content-movies');
addMovies(contentsToDisplay.movies);

// nom de l'enfant
const spanName = document.getElementById('cw-content-child-name');
spanName.innerText = localStorage.getItem("child.name") || "";

function addSeries(seriesToDisplay){
    let template = "";
    seriesToDisplay.forEach((serieToDisplay) => {
        template += `<li>${getCardTemplate(serieToDisplay, 'SERIES')}</li>`
    })
    seriesContainer.innerHTML = template === "" ? "Pas de série disponible pour cet âge.":template;
}

function addMovies(moviesToDisplay) {
    let template = "";
    moviesToDisplay.forEach((movieToDisplay) => {
        template += `<li>${getCardTemplate(movieToDisplay, 'MOVIES')}</li>`
    })
    moviesContainer.innerHTML = template === "" ? "Pas de film disponible pour cet âge.":template;
}

function refreshList(contentType){
    switch (contentType){
        case 'SERIES': {
            contentsToDisplay.series = getSeries()
            addSeries(contentsToDisplay.series)
            break;
        }
        case 'MOVIES': {
            contentsToDisplay.movies = getMovies()
            addMovies(contentsToDisplay.movies)
            break;
        }
        case 'ALL': {
            contentsToDisplay.series = getSeries()
            addSeries(contentsToDisplay.series)
            contentsToDisplay.movies = getMovies()
            addMovies(contentsToDisplay.movies)
            break;
        }
        default: break;
    }
}