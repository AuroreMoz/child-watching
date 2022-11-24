// Get modal element
const paramModalContainer = document.getElementById('cw-param-modal-container');

// Open modal
async function openModal(){
    paramModalContainer.innerHTML = paramModalHtml;

    // set input
    const name = localStorage.getItem("child.name");
    if(name){
        document.getElementById('name').value = name;
    }
    const birth = localStorage.getItem("child.birth");
    if(birth){
        document.getElementById('birth').value = birth;
    }

    // cancel listener
    window.addEventListener('click', outsideClick);
}

function closeModal(){
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

function validateModal(){
    const name = document.getElementById('name').value;
    localStorage.setItem("child.name", name);
    const birth = document.getElementById('birth').value;
    localStorage.setItem("child.birth", birth);

    closeModal();
    refreshList("ALL");
}


const paramModalHtml = `
<div id="cw-param-modal" class="cw-modal-overlay"></div>
<div class="cw-modal-content">
        <div class="cw-modal-header">
            <h2>L'enfant</h2>
        </div>
        <div class="cw-modal-body">
            <div class="cw-modal-body-element">
                <label for="name">Son prénom est </label>
                <input type="text" name="name" id="name">
            </div>
            <div class="cw-modal-body-element">
                <label for="birth">et sa date de naissance est le </label>
                <input type="text" name="birth" id="birth">
                <span class="cw-modal-body-element-format">au format AAAA-MM-JJ</span>
            </div>  
        </div>
        <div class="cw-modal-footer">
            <button onclick="closeModal()">Annuler</button>
            <button onclick="validateModal()">Valider</button>
        </div>
    </div>
<style>
    .modal-header h2 {
        margin: 0;
    }

    .cw-modal-header {
        background: #000;
        padding: 15px;
        color: #fff;
    }

    .cw-modal-footer{
        background: #a4a4a4;
        padding: 15px;
        display: flex;
        justify-content: space-around;
    }

    .cw-modal-content{
       position: fixed;
       z-index: 2;
       display: flex;
       flex-direction: column;
        box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2),0 7px 20px 0 rgba(0,0,0,0.17);
    }

    .cw-modal-overlay{
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.8);
    }
    .cw-modal-body{
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        padding: 20px;
        font-size: 1.3em;
    }
    .cw-modal-body-element {
        /*display: flex;*/
        /*flex-direction: column;*/
        padding: 10px;
        
    }
    .cw-modal-body-element-format {
        font-size: 0.7em;
    }
</style>`