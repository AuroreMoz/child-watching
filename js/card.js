function getCardTemplate(content, contentType) {
    return `
<div class="cw-card-pegi">${getPegi(content.age)}</div>
<div class="cw-card">
${getImageTemplate(content.image, content.available, content.id)}
<div class="cw-card-description">
<h3>${content.name}</h3>
${getAvailabilityTemplate(content.available)}
<div class="cw-card-footer">
<div class="cw-card-footer-actions">
<img onclick="toggleFavorite(this, '${content.id}', '${contentType}')" src="assets/${getFavoriteTemplate(content.id)}" alt="favorite" class="cw-card-icon">
<img onclick="toggleVisibility(this, '${content.id}', '${contentType}')" src="assets/${getVisibilityTemplate(content.id)}" alt="visibility" class="cw-card-icon">
</div>
${getInformationTemplate(content.info)}
</div>
</div>
</div>
`
}

function getImageTemplate(image, availability, contentId) {
    if(!isVisible(contentId)){
        return `<img src="assets/locked.png" class="cw-card-image" alt="content not visible"></a>`
    }
    if(isAvailable(availability)){
        return `<a href="${Object.values(availability)[0]}" target="_blank"><img src="assets/${image}" class="cw-card-image" alt="${image}"></a>`
    }
    return `<img src="assets/${image}" class="cw-card-image" alt="${image}">`
}

function getFavoriteTemplate(id){
    const actualFavorite = localStorage.getItem(`favorite.${id}`)
    if(actualFavorite && actualFavorite === 'true'){
        return "star_enabled.png"
    }
    return "star_disabled.png";
}

function getVisibilityTemplate(contentId){
    if(!isVisible(contentId)){
        return "lock.png"
    }
    return "unlock.png";
}

function getInformationTemplate(informationToDisplay){
    if(informationToDisplay){
        return `<a href="${informationToDisplay}" target="_blank"><img src="assets/info_enabled.svg" class="cw-card-icon"></a>`
    }
    return `<span class='cw-card-description-info'><img src="assets/info_disabled.svg" class="cw-card-icon"></span>`;
}

function getAvailabilityTemplate(availability) {
    let image = "unavailable.png";
    let link = "";
    if (isAvailable(availability)) {
        image = Object.keys(availability)[0];
        link = Object.values(availability)[0];
        return `<a href=${link} target="_blank">
                <img src="assets/${image}.png" class="cw-card-icon" alt="${image}">
                </a>`;
    }
    return `<img src="assets/${image}.png" class="cw-card-icon" alt="${image}"></a>`;
}

function toggleFavorite(element, id, contentType) {
    const actualFavorite = localStorage.getItem(`favorite.${id}`)
    if(actualFavorite && actualFavorite === 'true'){
        localStorage.setItem(`favorite.${id}`, 'false');
    } else {
        localStorage.setItem(`favorite.${id}`, 'true');
    }
    refreshList(contentType)
}

function toggleVisibility(element, contentId, contentType) {
    if(!isVisible(contentId)){
        localStorage.setItem(`visibility.${contentId}`, 'true');
    } else {
        localStorage.setItem(`visibility.${contentId}`, 'false');
    }
    refreshList(contentType)
}

function getPegi(age) {
    const year = Math.floor(age/12);
    const demi = (age%12) >= 6;
    return `<span class="cw-bold">${year}${demi?'+':''}</span>`
}