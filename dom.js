//Add item
let button = document.getElementById("newbutton");
button.addEventListener('click', addItem);

function addItem(e){
    alert('Do You Want to Include This Item in Your List?');
    e.preventDefault();

    // Get input value 
    let newItem = document.getElementById("inputweneedtousefordomfile").value;

    // Create new li element
    let newli = document.createElement('li');
    // Add class
    newli.className = "list-group-item d-flex align-items-center border-0 mb-2 rounded";
    // set object newli's innerText method equal to newItem (your input value)
    newli.innerText = newItem;
    //need to add child element including child element content to end of list
    let todoList = document.querySelector(".list-group");
    todoList.appendChild(newli);
    //delete input field after newli is added
    //input.value = ""; can't define inside the local scope will set everything to empty    
}

//Remove item
/*<script>
        let listItems = document.getElementsByTagName("li"); 
        for (let i = 0; i < listItems.length; i++) {
        listItems[i].onclick = function() {this.parentNode.removeChild(this);}
        }
    </script>*/
let listItems = document.getElementsByTagName("li");
for (let i=0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', removeListItemWithDelay);
 }

  
 //function removeListItem(e) {
 //    e.currentTarget.remove();
 //}

 function removeListItemWithDelay(e){
     let target = e.currentTarget;
     function removeCurrent(){
         target.remove();
     }
    setTimeout(removeCurrent, 1000);
 }






