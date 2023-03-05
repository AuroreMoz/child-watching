const SERIES_MESSAGE = 'série disponible';
const MOVIES_MESSAGE = 'film disponible';
const HIDDEN_SERIES_MESSAGE = 'série masquée';
const HIDDEN_MOVIES_MESSAGE = 'film masqué';

// chargement des contenus sur la page et création des cartes
let contentsToDisplay = getAllContents();

const seriesContainer = document.getElementById('cw-content-series');
addSeries();

const moviesContainer = document.getElementById('cw-content-movies');
addMovies();

const hiddenSeriesContainer = document.getElementById('cw-content-hidden-series');
addHiddenSeries();

const hiddenMoviesContainer = document.getElementById('cw-content-hidden-movies');
addHiddenMovies();

// nom de l'enfant
refreshName()

function addContents(contentsToDisplay, htmlContainer, message, contentType){
    let template = "";
    contentsToDisplay.forEach((contentToDisplay) => {
        template += `<li>${getCardTemplate(contentToDisplay, contentType)}</li>`
    })
    htmlContainer.innerHTML = template === "" ? `Pas de ${message} pour cet âge.`:template;

}

function addSeries() {
    addContents(contentsToDisplay.series, seriesContainer, SERIES_MESSAGE, 'SERIES');
}

function addMovies() {
    addContents(contentsToDisplay.movies, moviesContainer, MOVIES_MESSAGE, 'MOVIES');

}

function addHiddenSeries() {
    addContents(contentsToDisplay.hiddenSeries, hiddenSeriesContainer, HIDDEN_SERIES_MESSAGE, 'HIDDEN_SERIES');
}

function addHiddenMovies() {
    addContents(contentsToDisplay.hiddenMovies, hiddenMoviesContainer, HIDDEN_MOVIES_MESSAGE, 'HIDDEN_MOVIES');
}

function refreshList(contentType){
    switch (contentType){
        case 'SERIES': {
            contentsToDisplay.series = getSeries();
            addSeries();
            break;
        }
        case 'MOVIES': {
            contentsToDisplay.movies = getMovies();
            addMovies();
            break;
        }
        case 'HIDDEN_SERIES': {
            contentsToDisplay.hiddenSeries = getHiddenSeries();
            addHiddenSeries();
            break;
        }
        case 'HIDDEN_MOVIES': {
            contentsToDisplay.hiddenMovies = getHiddenMovies();
            addHiddenMovies();
            break;
        }
        case 'ALL_SERIES':
        case 'ALL_HIDDEN_SERIES': {
            contentsToDisplay.series = getSeries();
            contentsToDisplay.hiddenSeries = getHiddenSeries();
            addSeries();
            addHiddenSeries()
            break;
        }
        case 'ALL_MOVIES':
        case 'ALL_HIDDEN_MOVIES': {
            contentsToDisplay.movies = getMovies();
            contentsToDisplay.hiddenMovies = getHiddenMovies();
            addMovies();
            addHiddenMovies();
            break;
        }
        case 'ALL': {
            contentsToDisplay = getAllContents();
            addSeries();
            addMovies();
            addHiddenSeries();
            addHiddenMovies();
            break;
        }
        default: break;
    }
}

function refreshName(){
    const spanName = document.getElementById('cw-content-child-name');
    spanName.innerText = localStorage.getItem("child.name") || "";
}
