// import "./styles.css";

const onClickAdd = () => {
  // Get the value of text box , then format.
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
  
}; 

    // del designated element from incopleted-list
    const deleteFromIncompleteList = (target) =>{
        document.getElementById("incomplete-list").removeChild(target);
    }

    // // function which add to incompleted list
    const createIncompleteList = (text) => {
// generate div tag

const div = document.createElement("div");
div.className = "list-row";

// generate li　tag
const li = document.createElement("li");
li.innerText = text;

  //generate button(done) tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "Done";
  completeButton.addEventListener("click", () =>  {
      // delete Done tag from incompleted todo 
  deleteFromIncompleteList(completeButton.parentNode);
      // Add completed todo-list
  const addTarget = completeButton.parentNode;
  const text = addTarget.firstElementChild.innerText;
      
      // Obtain the todo detail
      // format under the div by inndex.html
  addTarget.textContent = null;

  //generate li tag
  const li = document.createElement("li");
  li.innerText = text;

  // generate button tag
  const backButton = document.createElement("button");
  backButton.innerText = "Undo"
  backButton.addEventListener("click", ()=> {
      // Del from completed list after clickd undo
      const deleteTarget = backButton.parentNode;
      document.getElementById("completed-list").removeChild(deleteTarget);

      // Obtain the text
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
  });

  // set the appenChild to div child
  addTarget.appendChild(li);
  addTarget.appendChild(backButton);

  // add completed-todo
  document.getElementById("completed-list").appendChild(addTarget);
  });
 
  // generate button(del) tag
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", ()=>{
      deleteFromIncompleteList(deleteButton.parentNode);

      // Delete from uncompleted-list of the clicked parent tag(div)

  });

// set each element to the child div.

div.appendChild(li);
div.appendChild(completeButton);
div.appendChild(deleteButton);


// add incompleted-list
document.getElementById("incomplete-list").appendChild(div);
    }

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
