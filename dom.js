//Add item
let button = document.getElementById("newbutton");
button.addEventListener('click', addItem);

function addItem(e){
    alert('Do You Want to Include This Item in Your List?');
    e.preventDefault();
    // Get input value 
    let newItem = document.getElementById("inputweneedtousefordomfile").value;
    // Create new li element
    let newLi = document.createElement('li'); 
    // Add class
    newLi.className = "list-group-item d-flex align-items-center border-0 mb-2 rounded";
    
    //let newLiTwo = document.createElement('input');
    //newLiTwo.type = "checkbox";
    //newLiTwo.id = "check";
    //newLi.appendChild(newLiTwo);
    //let newLiThree = document.createElement('label');
    //newLiTwo.appendChild(newLiThree);
    //let newLiFour = document.createElement('h4');
    //newLiFour.className = 'resize';
    //newLiFour.append(newItem);
    //newLiThree.appendChild(newLiFour);

    //add inside tags, elements, content (cannot use script with innerHTML, IH dangerous and security 
    //issue better to use append)
    newLi.innerHTML += `<input type='checkbox' id="check"><label><h4 class="resize">${newItem}</h4></label>`

//Please note that using innerHTML to append html elements (e.g. el.innerHTML += "<a href='...'>link</a>") 
//will result in the removal of any previously set event listeners. That 
//is, after you append any HTML element that way you won't be able to listen to the previously set event listeners.

    //need to add child element including child element content to end of list
    let todoList = document.querySelector(".list-group");
    todoList.appendChild(newLi);


//Remove item
//let listItems = document.getElementsByClassName("list-group-item d-flex align-items-center border-0 mb-2 rounded");
newLi.addEventListener('click', removeListItemWithDelay);
 function removeListItemWithDelay(e){
     let target = e.currentTarget;
     function removeCurrent(){
         target.remove();
     }
    setTimeout(removeCurrent, 1000);
 }

}

let listItems = document.getElementsByClassName("list-group-item d-flex align-items-center border-0 mb-2 rounded");
for (let i=0; i < listItems.length-1; i++) {
    listItems[i].addEventListener('click', removeListItemWithDelay);
 }

 function removeListItemWithDelay(e){
     let target = e.currentTarget;
     function removeCurrent(){
         target.remove();
     }
    setTimeout(removeCurrent, 1000);
 }