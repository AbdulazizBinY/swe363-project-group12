document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const kfupmId = loginForm.querySelector('input[name="kfupmId"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;
        const loader = document.getElementById('loader'); // Reference to the loader element
        const errorMessageDiv = document.getElementById('errorMessage');

        // Show the loader when the login process starts
        loader.style.display = 'flex';

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ kfupmId, password })
            });

            const result = await response.json();
            if (response.ok) {
                // Redirect to home.html on successful login
                window.location.href = '/home.html';
            } else {
                // Hide the loader if there's an error
                loader.style.display = 'none';
                // Display error message
                errorMessageDiv.textContent = result.message;
                errorMessageDiv.style.display = 'block';
            }
        } catch (error) {
            // Hide the loader if there's an exception
            loader.style.display = 'none';
            // Display error message
            errorMessageDiv.textContent = 'Login failed: ' + error.message;
            errorMessageDiv.style.display = 'block';
        }
    });
});