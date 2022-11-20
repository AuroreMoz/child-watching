function getCardTemplate(content) {
    return `
<div class="cw-card">
<img src="assets/${content.image}" class="cw-card-image" alt="${content.image}">
<div class="cw-card-description">
<h3>${content.name}</h3>
${getAvailabilityTemplate(content.available)}
<div class="cw-card-footer">
<img onclick="toggleFavorite(this, '${content.id}')" src="assets/${getFavoriteTemplate(content.id)}" alt="favorite" class="cw-card-icon">
${getInformationTemplate(content.info)}
</div>
</div>
</div>`
}

function getFavoriteTemplate(id){
    const actualFavorite = localStorage.getItem(`favorite.${id}`)
    if(actualFavorite && actualFavorite === 'true'){
        return "star_enabled.png"
    }
    return "star_disabled.png";
}

function getInformationTemplate(informationToDisplay){
    if(informationToDisplay){
        return `<a href="${informationToDisplay}" class="cw-card-description-info" target="_blank">Plus d'info</a>`
    }
    return "<span class='cw-card-description-info'>Info non disponible</span>";
}

function getAvailabilityTemplate(availability) {
    let image = "unavailable.png";
    let link = "";
    if (availability && Object.keys(availability).length) {
        image = Object.keys(availability)[0];
        link = Object.values(availability)[0];
        return `<a href=${link} target="_blank">
                <img src="assets/${image}.png" class="cw-card-icon" alt="${image}">
                </a>`;
    }
    return `<img src="assets/${image}.png" class="cw-card-icon" alt="${image}"></a>`;
}

function toggleFavorite(element, id) {
    const actualFavorite = localStorage.getItem(`favorite.${id}`)
    if(actualFavorite && actualFavorite === 'true'){
        localStorage.setItem(`favorite.${id}`, 'false');
        element.src = "assets/star_disabled.png";
    } else {
        localStorage.setItem(`favorite.${id}`, 'true');
        element.src = "assets/star_enabled.png";
    }
}