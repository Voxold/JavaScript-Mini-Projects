const code = document.getElementById("code");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const semestre = document.getElementById("semestre");
const filiere = document.getElementById("filiere");

const supprimer = document.getElementById("supprimer");
const result = document.getElementById("result");



function ajouter() {
    result.innerHTML = `
                        <table class="table table-striped table-bordered">
                            <thead class="table-dark">
                                <tr>
                                    <th>Code</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Semestre</th>
                                    <th>Filiere</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${code.value}</td>
                                    <td>${nom.value}</td>
                                    <td>${prenom.value}</td>
                                    <td>${semestre.value}</td>
                                    <td>${filiere.value}</td>
                                </tr>
                            </tbody>
                        </table>`
}



