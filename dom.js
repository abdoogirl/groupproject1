//Add item
let button = document.getElementById("newbutton");
button.addEventListener('click', addItem);

function addItem(e) {
    alert('Do You Want to Include This Item in Your List?');
    e.preventDefault();
    // Get input value 
    let newItem = document.getElementById("form2").value;
    // Create new span element
    let newLiOne = document.createElement('div');
    newLiOne.className = "form-check";
    // Create new li element
    let newLi = document.createElement('li');
    // Add class
    newLi.className = "list-group-item d-flex align-items-center border-0 mb-2 rounded bg-white";
    // Create new input element
    let newLiTwo = document.createElement('input');
    // Add type
    newLiTwo.type = "checkbox";
    // Add id
    newLiTwo.id = newItem;
    // Add class 
    newLiTwo.className = "form-check-input me-2";
    // Add value
    newLiTwo.value = "yes";
    // Add ariaLabel
    newLiTwo.ariaLabel = "...";
    //Add name
    newLiTwo.name = newItem;
    // Create new label element
    let newLiThree = document.createElement('label')
    //Add a class for formatting
    newLiThree.className = "form-check-label";
    // Add for to label
    newLiThree.for = newItem;
    // Create the innerText for label
    newLiThree.innerText = newItem;
    //need to add child element including child element content to end of list
    let todoList = document.querySelector(".list-group");
    // append span element to ul
    todoList.appendChild(newLiOne);
    // append li element to span
    newLiOne.appendChild(newLi);
    // append input element to span element
    newLi.appendChild(newLiTwo);
    // append label element to div element
    newLi.appendChild(newLiThree);

    //Remove item
    //let listItems = document.getElementsByClassName("list-group-item d-flex align-items-center border-0 mb-2 rounded");
    newLiOne.addEventListener('click', removeListItemWithDelay);

    function removeListItemWithDelay(e) {
        let target = e.currentTarget;

        function removeCurrent() {
            target.remove();
        }
        setTimeout(removeCurrent, 1000);
    }

}

let listItems = document.getElementsByClassName("list-group-item d-flex align-items-center border-0 mb-2 rounded");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', removeListItemWithDelay);
}

function removeListItemWithDelay(e) {
    let target = e.currentTarget;

    function removeCurrent() {
        target.remove();
    }
    setTimeout(removeCurrent, 1000);
}