
// chargement des contenus sur la page et création des cartes
const contentsToDisplay = getContents();

const seriesContainer = document.getElementById('cw-content-series');
addSeries(contentsToDisplay.series);

const moviesContainer = document.getElementById('cw-content-movies');
addMovies(contentsToDisplay.movies);

function addSeries(seriesToDisplay){
    let template = "";
    seriesToDisplay.forEach((serieToDisplay) => {
        template += `<li>${getCardTemplate(serieToDisplay, 'SERIES')}</li>`
    })
    seriesContainer.innerHTML=template;
}

function addMovies(moviesToDisplay) {
    let template = "";
    moviesToDisplay.forEach((movieToDisplay) => {
        template += `<li>${getCardTemplate(movieToDisplay, 'MOVIES')}</li>`
    })
    moviesContainer.innerHTML = template;
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
        default: break;
    }
}