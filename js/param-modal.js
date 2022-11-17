// Get modal element
const paramModalContainer = document.getElementById('cw-param-modal-container');
// Get open modal button
const paramButton = document.getElementById('cw-param-modal-icon');
// Listen for open click
paramButton.addEventListener('click', openModal);

// Open modal
async function openModal(){
    const paramModalHtml = await fetch('/template/param-modal.html')
        .then((response) => response.text())
    paramModalContainer.innerHTML = paramModalHtml;

    const paramModal = document.getElementById('cw-param-modal');
    paramModal.style.display = 'block'

    // cancel listener
    const paramModalCancel = document.getElementById('cw-param-modal-cancel');
    paramModalCancel.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

}

function closeModal(){
    const paramModalCancel = document.getElementById('cw-param-modal-cancel');
    paramModalCancel.removeEventListener('click', closeModal);
    window.removeEventListener('click', outsideClick);
    paramModalContainer.innerHTML = ""
}

// Click outside and close
function outsideClick(e){
    const paramModal = document.getElementById('cw-param-modal');
    if(e.target == paramModal){
        closeModal()
    }
}