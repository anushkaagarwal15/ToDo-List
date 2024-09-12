const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        // cross icon

        li.appendChild(span);
    }
    inputBox.value = " ";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();



// Certainly! Let's break down the code step by step:

// Variables:

// inputBox: This variable is assigned the reference to the HTML element with the ID "input-box". It's presumably an input field where users can type their tasks.
// listContainer: This variable is assigned the reference to the HTML element with the ID "list-container". It's likely a container where the list of tasks will be displayed.
// addTask() Function:

// This function is triggered when the user tries to add a task.
// It first checks if the inputBox value is empty. If it is, it displays an alert informing the user that they must write something.
// If the input box is not empty, it creates a new list item (<li>) element.
// The content of the list item is set to the value entered by the user in the input box.
// A delete button (represented by a <span> element containing the '×' character) is appended to the list item.
// Finally, the input box is cleared, and the saveData() function is called to store the updated task list in the browser's local storage.
// Event Listener on listContainer:

// This event listener is attached to the listContainer element and listens for clicks within it.
// If the clicked element is an <li> (a task item), it toggles the "checked" class on the clicked element. This might be used for visually indicating completed tasks.
// If the clicked element is a <span> (the delete button), it removes the parent <li> element from the document, effectively deleting the task.
// After any modification to the task list, it calls the saveData() function to update the data stored in the local storage.
// saveData() Function:

// This function saves the current content of the listContainer to the browser's local storage using the localStorage.setItem() method. It stores the data under the key "data".
// showTask() Function:

// This function retrieves the previously saved task list from the local storage using the localStorage.getItem() method.
// It sets the inner HTML of the listContainer to the retrieved data, effectively displaying the saved tasks.
// In summary, the code allows users to add, mark as completed, and remove tasks from a list. The task data is stored locally in the browser's storage, allowing it to persist even after the page is refreshed or closed.