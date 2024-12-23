const ville = document.getElementById("ville");
const ajt = document.getElementById("ajt");
const supr = document.getElementById("supr");
const results = document.getElementById("results");
const error = document.getElementById("error")

function ajouter() {
    if (ville.value.trim() !== "") {
        const newVille = document.createElement("p");
        newVille.innerHTML = ville.value;
        newVille.classList.add("ville-item");

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
        deleteButton.onclick = function() {
            supprimer(newVille);  
        };

        newVille.appendChild(deleteButton); 
        results.appendChild(newVille);
        ville.value = "";

        newVille.onclick = function () {
            makeGreen(newVille);
        }

        // Styling
        newVille.style.borderRadius = "20px";
        newVille.style.cursor = "pointer";

    }else{
        error.innerHTML = '<i class="bi bi-exclamation-circle"></i> SVP entrer le nome de ville!'
    }
}
    

function supprimer(ville) {
    if (ville) {
        ville.remove();
    }
}

function makeGreen (element) {
    element.style.backgroundColor = "yellow";
}