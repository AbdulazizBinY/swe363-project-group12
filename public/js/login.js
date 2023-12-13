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

            // Hide the loader after receiving the response
            loader.style.display = 'none';

            if (response.ok) {
                // Redirect to home page on successful login
                window.location.href = '/';
            } else {
                // Display error message if login is unsuccessful
                errorMessageDiv.textContent = result.message || 'Login failed. Please try again.';
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