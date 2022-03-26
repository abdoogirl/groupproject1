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
    //set inside newli to value of input
    //newLi.innerText = newItem;
    //newli other stuff
    newLi.innerHTML += `<input type='checkbox' id="check"><label><h4>${newItem}</h4></label>`;

//Please note that using innerHTML to append html elements (e.g. el.innerHTML += "<a href='...'>link</a>") 
//will result in the removal of any previously set event listeners. That 
//is, after you append any HTML element that way you won't be able to listen to the previously set event listeners.

    //need to add child element including child element content to end of list
    let todoList = document.querySelector(".list-group");
    let newLiTwo = 
    todoList.appendChild(newLi);



   // let grabhfour = document.querySelectorAll("h4").remove();
    //grabhfour.innerText.inn = newItem;
    //todoList.appendChild(newli)
    //delete input field after newli is added  

}

//Remove item
let listItems = document.getElementsByClassName("list-group-item d-flex align-items-center border-0 mb-2 rounded");
for (let i=0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', removeListItemWithDelay);
 }

 function removeListItemWithDelay(e){
     let target = e.currentTarget;
     function removeCurrent(){
         target.remove();
     }
    setTimeout(removeCurrent, 1000);
 }
