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

document.addEventListener("DOMContentLoaded", function () {
    var courseBoxes = document.querySelectorAll('.course-box');

    courseBoxes.forEach(function (courseBox) {
        courseBox.addEventListener('dragstart', function (event) {
            drag(event, courseBox.innerText);
        });
    });
});

function drag(event, data) {
    console.log("Dragging:", event.target.innerText);
    event.dataTransfer.setData("text/plain", data);
}


function allowDrop(event) {
    event.preventDefault();
}




function drop(event) {
    event.preventDefault();
    console.log("Drop function called");

    var data = event.dataTransfer.getData("text/plain");
    console.log("Data:", data);

    setTimeout(function () {
        // Adjust the ID to include the parent div
        var termContainer = document.getElementById('term-container').querySelector('#term1');

        if (termContainer) {
            var courseBox = document.createElement("div");
            courseBox.className = "course-box";
            courseBox.innerText = data;

            termContainer.appendChild(courseBox);
            console.log("Course box appended");
        }
    }, 0);

   
}










function addTerm() {
    // Prompt the user for the term name
    var termName = prompt("Enter the term name (Term 2xx):");

    if (termName !== null && termName.trim() !== "") {
        // Trim the input to a maximum of 8 characters
        termName = termName.substring(0, 8);

        // Logic to add a new term
        var termContainer = document.createElement("div");
        termContainer.className = "term-container";
        termContainer.innerText = termName;

        // Add an <hr> element after the text
        var hrElement = document.createElement("hr");
        termContainer.appendChild(hrElement);

        // Get the term container
        var termContainerElement = document.getElementById("term-container");

        // Add the new term to the container
        termContainerElement.insertBefore(termContainer, document.querySelector('.add-button'));

        // Scroll to the right to reveal the new term
        termContainerElement.scrollLeft += termContainer.offsetWidth;
    }
}






