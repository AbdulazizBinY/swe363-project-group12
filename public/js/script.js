function logout() {
    fetch('/api/logout', { method: 'POST' })
    .then(response => {
        if (response.ok) {
            window.location.href = '/home'; // Redirect to home page
        }
    }).catch(error => console.error('Error:', error));
}

// Attach logout function to logout button if it exists
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});