const contentsToDisplay = getContents();

const seriesContainer = document.getElementById('cw-content-series');
addSeries(contentsToDisplay.series);

const moviesContainer = document.getElementById('cw-content-movies');
addMovies(contentsToDisplay.movies);



function addSeries(seriesToDisplay){
    let template = "";
    seriesToDisplay.forEach((serieToDisplay) => {
        template += `<li>${getCardTemplate(serieToDisplay)}</li>`
    })
    seriesContainer.innerHTML=template;
}

function addMovies(moviesToDisplay){
    let template = "";
    moviesToDisplay.forEach((movieToDisplay) => {
        template += `<li>${getCardTemplate(movieToDisplay)}</li>`
    })
    moviesContainer.innerHTML=template;
}