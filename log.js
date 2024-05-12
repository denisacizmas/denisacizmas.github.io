// Funcție pentru validarea datelor de autentificare
function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validare pentru username (doar litere)
    if (!/^[a-zA-Z]+$/.test(username)) {
        showAlert('Username-ul trebuie să conțină doar litere!', 'danger');
        return false;
    }

    // Validare pentru email (să conțină @ și .)
    const email = document.getElementById('email').value;
    if (!/\S+@\S+\.\S+/.test(email)) {
        showAlert('Introduceți un email valid!', 'danger');
        return false;
    }

    // Implementează logica de autentificare
    // ...

    // Redirecționează către pagina index.html dacă totul este valid
    window.location.href = 'index.html';
}

// Funcție pentru validarea datelor de înregistrare
function validateSignupForm() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validare pentru username (doar litere)
    if (!/^[a-zA-Z]+$/.test(newUsername)) {
        showAlert('Username-ul trebuie să conțină doar litere!', 'danger');
        return false;
    }

    // Validare pentru email (să conțină @ și .)
    const newEmail = document.getElementById('new-email').value;
    if (!/\S+@\S+\.\S+/.test(newEmail)) {
        showAlert('Introduceți un email valid!', 'danger');
        return false;
    }

    // Validare pentru parolă (să fie la fel cu confirmarea parolei)
    if (newPassword !== confirmPassword) {
        showAlert('Parolele nu se potrivesc!', 'danger');
        return false;
    }

    // Implementează logica de înregistrare
    // ...

    // Redirecționează către pagina index.html dacă totul este valid
    window.location.href = 'index.html';
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

// Asociere eveniment pentru formularul de autentificare
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    validateLoginForm();
});

// Asociere eveniment pentru formularul de înregistrare
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    validateSignupForm();
});
