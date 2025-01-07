const form = document.getElementById("form");

const nom = document.getElementById("nom");
const adress = document.getElementById("adress");
const email = document.getElementById("email");
const motPasse = document.getElementById("motPasse");
const telephone = document.getElementById("telephone");
const langue = document.getElementById("langue");
const commentaire = document.getElementById("commentaire");

const submit = document.getElementById("submit");
const reset = document.getElementById("reset");


const isValideEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).toLowerCase());
};


const isValidPhone = (telephone) => {
    const phoneRegex = /^0[5-7][0-9]{8}$/;
    return phoneRegex.test(telephone);
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i>' + " " + message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};


const setSucess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInput = () => {
    const nom_value = nom.value.trim();
    const adress_value = adress.value.trim();
    const email_value = email.value.trim();
    const motPasse_value = motPasse.value.trim();
    const telephone_value = telephone.value.trim();
    const langue_value = langue.value.trim();
    const commentaire_value = commentaire.value.trim();

    // Name
    if (nom_value === '') {
        setError(nom, 'Name is required.');
    } else {
        setSucess(nom);
    }

    // Address
    if (adress_value === '') {
        setError(adress, 'Address is required.');
    } else {
        setSucess(adress);
    }

    // Email
    if (email_value === '') {
        setError(email, 'Email is required.');
    } else if (!isValideEmail(email_value)) {
        setError(email, 'Enter a valid email address.');
    } else {
        setSucess(email);
    }

    // Password
    if (motPasse_value === '') {
        setError(motPasse, 'Password is required.');
    } else if (motPasse_value.length < 8) {
        setError(motPasse, 'Password must be at least 8 characters.');
    } else {
        setSucess(motPasse);
    }

    // Telephone
    if (telephone_value === '') {
        setError(telephone, 'Telephone number is required.');
    } else if (!isValidPhone(telephone_value)) {
        setError(telephone, 'Enter a valid telephone number (e.g., 0633634657).');
    } else {
        setSucess(telephone);
    }

    // Language (Optional Example)
    if (langue_value === '') {
        setError(langue, 'Please select a language.');
    } else {
        setSucess(langue);
    }

    // Comment (Optional Example)
    if (commentaire_value === '') {
        setError(commentaire, 'Please leave a comment.');
    } else {
        setSucess(commentaire);
    }
};
