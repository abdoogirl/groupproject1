/*Add List Items
let itemList = document.getElementById("list-group-item");
let inputdelete = document.getElementById("whateverform");

// Form submit event
form.addEventListener('submit', addItem);

// For click event list delete
itemList.addEventListener('click', addItemtwo);

// For submit event input delete
inputdelete.addEventListener('submit', deleteinputfield);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value (I had to use the first input of my form since type='text')
    let newItem = document.getElementById("item").value;

    // Create new li element
    let newli = document.createElement('li');
    // Add class
    newli.className = "list-group-item";
    // set object newli's innerText method equal to newItem (your input value)
    newli.innerText = newItem;
    //need to add child element including child element content to end of list
    let todoList = document.querySelector("#items");
    todoList.appendChild(newli);
    //delete input field after newli is added
    //input.value = ""; can't define inside the local scope will set everything to empty    
}
*/
/*<body>
    <header id="main-header" class=""bg-success text-white p-4 mb-3">
        <div class="container">
            <h1 id="header-title">Item Lister</h1>
        </div>
    </header>
    <div class="container">
        <div id="main" class="card card-body">
            <h2 class="title">Add Items</h2>
            <form id="whateverform" class="form-inline mb-3">
                <input id="item" type="text" class="form-control mr-2">
                <input type="submit" id="button-one" class="btn btn-dark" value="Submit">
            </form>
            <h2 class="title">Items</h2>
            <ul id="items" class="list-group">
                <li class="list-group-item">To do 1</li>
                <li class="list-group-item">To do 2</li>
                <li class="list-group-item">To do 3</li>
                <li class="list-group-item">To do 4</li>
            </ul>
        </div>
    </div>
    <script src="dom.js"></script>
</body>*/

