document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const password = form.password.value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const termsChecked = form.querySelector('input[type="checkbox"]').checked;

        // Check if passwords match
        if (password !== confirmPassword) {
            showErrorModal('Passwords do not match!');
            return;
        }

        // Check if the terms and conditions are checked
        if (!termsChecked) {
            showErrorModal("Please agree to the Terms and Conditions.");
            return;
        }

        const userData = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            kfupmId: form.kfupmId.value,
            password: password
        };

        // Send a POST request to the server
        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();
            if (response.ok) {
                // Redirect to login page on successful signup
                window.location.href = '/login.html';
            } else {
                showErrorModal(result.message);
            }
        } catch (error) {
            showErrorModal('Signup failed: ' + error.message);
        }
    });
});

// Function to display error modal
function showErrorModal(message) {
    document.getElementById('errorText').textContent = message;
    document.getElementById('errorModal').style.display = 'block';
}

// Function to close error modal
function closeErrorModal() {
    document.getElementById('errorModal').style.display = 'none';
}