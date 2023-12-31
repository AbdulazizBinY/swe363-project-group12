document.addEventListener("DOMContentLoaded", function () {
    // Set a timeout to delay hiding the loader
    setTimeout(function () {
        document.getElementById('mainContent').style.display = 'block';
        document.querySelector('.loader').style.display = 'none';
    }, 2500);
});

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

    // Find the closest ancestor with class 'term-container'
    var termContainer = event.target.closest('.term-container');

    if (termContainer) {
        console.log("Found term container:", termContainer);

        // Create a new div element with the course name
        var courseBox = document.createElement("div");
        courseBox.className = "course-box";
        courseBox.innerText = data;

        // Append the new div element to the term container
        termContainer.appendChild(courseBox);
        console.log("Course box appended to term container");
    } else {
        console.log("No term container found.");
    }
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

        var termNum = document.createElement('span');
        termNum.className = "termName"
        termNum.innerText = termName
        termContainer.appendChild(termNum);

        // Add drag-and-drop event listeners
        termContainer.setAttribute("draggable", "true");
        termContainer.addEventListener("dragstart", function (event) {
            drag(event, termContainer.innerText);
        });

        // Add an <hr> element after the text
        var hrElement = document.createElement("hr");
        termContainer.appendChild(hrElement);

        // Add drop event listeners
        termContainer.addEventListener("drop", drop);
        termContainer.addEventListener("dragover", allowDrop);

        // Get the term container
        var termContainerElement = document.getElementById("term-container");

        // Add the new term to the container
        termContainerElement.insertBefore(termContainer, document.querySelector('.add-button'));

        // Scroll to the right to reveal the new term
        termContainerElement.scrollLeft += termContainer.offsetWidth;
    }
}





function loopOnTerms() {
    let externalDiv = document.getElementById("term-container");
    let divs = externalDiv.querySelectorAll('.term-container');

    divs.forEach(div => {
        let term = new Term()
        let termNum = div.querySelector('.termName');
        term.termNumber = termNum.innerText
        let divCourses = div.querySelectorAll('.course-box');
        divCourses.forEach(course => {
            term.addCourse(course.innerText)
        })
        terms.push(term)
    })

    sendDataToDB(terms)


    console.log(terms)
}


class Term {

    constructor(termNumber, courses) {
        this.termNumber = termNumber;
        this.courses = courses || [];
    }

    // addTermNumber

    addCourse(course) {
        this.courses.push(course);
    }

    reomveCourse(course) {
        let indexToRemove = this.courses.indexOf(course);

        if (indexToRemove !== -1) {

            this.courses.splice(indexToRemove, 1);  // Use splice to remove the element
        }
    }

}
let terms = []


function sendDataToDB(data) {
    fetch('/sendData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

}

