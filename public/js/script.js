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

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    
    var courseBox = document.createElement("div");
    courseBox.className = "course-box";
    courseBox.innerText = data;
    //event.target.appendChild(courseBox);

    if (event.target.classList.contains("term-container")) {
        event.target.appendChild(courseBox).appendChild(event.target.appendChild(document.getElementById(data)););
        courseBox.appendChild(data)
    }


}

class Term {
    
    constructor(termNumber, courses) {
      this.termNumber = termNumber;
      this.courses = courses || [];
    }
  
    
    addCourse(course) {
        this.courses.push(course);
    }

    reomveCourse(course){
        let indexToRemove = this.courses.indexOf(course);

        if (indexToRemove !== -1) {
            
            this.courses.splice(indexToRemove, 1);  // Use splice to remove the element
        }
    }


  }
  let terms = []
  let term1 = new Term(231)
  terms.push(term1)

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



function sendDataToDB(data){
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





