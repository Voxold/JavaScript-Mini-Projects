const ville = document.getElementById("ville");
const ajt = document.getElementById("ajt");
const supr = document.getElementById("supr");
const results = document.getElementById("results");
const error = document.getElementById("error")

function ajouter() {
    if (ville.value.trim() !== "") {
        const newcity = document.createElement("p");
        newcity.innerHTML = ville.value;
        newcity.classList.add("ville-item");

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
        deleteButton.onclick = function() {
            supprimer(newcity);  
        };

        newcity.appendChild(deleteButton); 
        results.appendChild(newcity);
        ville.value = "";

        newcity.onclick = function () {
            makeGreen(newcity);
        }

        // Styling
        newcity.style.borderRadius = "20px";
        newcity.style.cursor = "pointer";

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