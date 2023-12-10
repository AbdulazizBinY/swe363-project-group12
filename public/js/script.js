// To change the policy of the password to the red color when the user not follow it (trigged when focused).
document.getElementById('password').addEventListener('input', function () {
    var passwordInput = this;
    var hint = document.getElementById('passwordHint');

    if (passwordInput.validity.patternMismatch) {
        hint.style.color = 'red';
    } else {
        hint.style.color = 'initial';
    }
});
// For the visibility of the password in  both login and signup pages.
function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var toggleIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}


// To hides icons when the user is typing in both login and signup pages.
document.addEventListener('DOMContentLoaded', function () {
    const inputFields = document.querySelectorAll('.input-field');

    inputFields.forEach(field => {
        field.addEventListener('focus', function () {
            this.previousElementSibling.style.display = 'none'; // Hides icon on focus
        });
        field.addEventListener('blur', function () {
            this.previousElementSibling.style.display = 'block'; // Shows icon on blur
        });
    });
});

function showLoader() {
    document.getElementById('loader').style.display = 'flex';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Call hideLoader when the page finishes loading
window.onload = hideLoader;

// Show the loader when submitting the form
document.getElementById('loginForm').addEventListener('submit', showLoader);