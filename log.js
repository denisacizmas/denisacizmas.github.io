// Funcție pentru validarea datelor de autentificare
function validateLoginForm(event) {
    event.preventDefault(); // Previne comportamentul implicit de reîncărcare a paginii

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Verificare completare toate câmpurile
    if (!validateRequiredFields('loginForm')) {
        return false;
    }

    // Validare pentru email (să conțină @ și .)
    if (!/\S+@\S+\.\S+/.test(email)) {
        showAlert('Introduceți un email valid!', 'danger');
        return false;
    }

    const loginForm = document.getElementById('loginForm');
    loginForm.classList.add('animated-left');

    const loginContainer = document.querySelector('.col-md-6:nth-child(1)');
    loginContainer.classList.add('animated-left');

    // Asociem un eveniment de tranziție care va fi declanșat când animația se termină
    loginForm.addEventListener('animationend', function() {
        // Redirecționăm către pagina index.html
        window.location.href = 'index.html';
    });
}

// Funcție pentru validarea datelor de înregistrare
function validateSignupForm(event) {
    event.preventDefault(); // Previne comportamentul implicit de reîncărcare a paginii

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Verificare completare toate câmpurile
    if (!validateRequiredFields('signupForm')) {
        return false;
    }

    // Validare pentru nume (doar litere)
    if (!/^[a-zA-Z]+$/.test(name)) {
        showAlert('Numele trebuie să conțină doar litere!', 'danger');
        return false;
    }

    // Validare pentru email (să conțină @ și .)
    if (!/\S+@\S+\.\S+/.test(email)) {
        showAlert('Introduceți un email valid!', 'danger');
        return false;
    }

    const signupForm = document.getElementById('signupForm');
    signupForm.classList.add('animated-right');

    const signupContainer = document.querySelector('.col-md-6:nth-child(2)');
    signupContainer.classList.add('animated-right');

    // Asociem un eveniment de tranziție care va fi declanșat când animația se termină
    signupForm.addEventListener('animationend', function() {
        // Redirecționăm către pagina index.html
        window.location.href = 'index.html';
    });
}

// Funcție pentru afișarea alertelor
function showAlert(message, type) {
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-' + type);
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = message;

    // Adaugă alerta în corpul documentului
    document.body.appendChild(alertDiv);

    // Elimină alerta după 3 secunde
    setTimeout(function() {
        alertDiv.remove();
    }, 3000);
}

// Funcție pentru validarea completării tuturor câmpurilor
function validateRequiredFields(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value.trim()) {
            showAlert('Te rugăm să completezi toate câmpurile!', 'danger');
            return false;
        }
    }

    return true;
}

// Asociere eveniment pentru formularul de autentificare
document.getElementById('loginForm').addEventListener('submit', validateLoginForm);

// Asociere eveniment pentru formularul de înregistrare
document.getElementById('signupForm').addEventListener('submit', validateSignupForm);
