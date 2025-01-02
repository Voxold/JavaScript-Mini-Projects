let i = 0;

function addData() {
    const el1 = document.getElementById("nom");
    const el2 = document.getElementById("adj");
    const el3 = document.getElementById("pers");
    const result = document.getElementById("result");

    if (el1.value && el2.value && el3.value) {
        i += 1;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${i}</td>
            <td>${el1.value}</td>
            <td>${el2.value}</td>
            <td>${el3.value}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editRow(this)">Modifier</button>
                <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Supprimer</button>
            </td>
        `;

        result.appendChild(row);

        el1.value = "";
        el2.value = "";
        el3.value = "";
    } else {
        alert("Please fill in all fields before adding data.");
    }
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll("td");

    document.getElementById("nom").value = cells[1].textContent;
    document.getElementById("adj").value = cells[2].textContent;
    document.getElementById("pers").value = cells[3].textContent;

    row.remove();
}
