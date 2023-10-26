function onReady() {
  console.log('Javascript still works! What a gosh darn relief.');
}
let todocounter = Number(document.getElementById("toDoCounter").textContent);

function removeToDo(event) {
  event.target.parentElement.remove();
  todocounter--;
  document.getElementById("toDoCounter").textContent=todocounter;
}

function handleSubmit(event) {
event.preventDefault();
console.log("Did this work?");
let toDoText = document.getElementById("todo-text").value;
let toDoAuthor = document.getElementById("todo-author").value;
console.log(toDoText);
console.log(toDoAuthor);
let todoList = document.getElementById('todoList');
todoList.innerHTML += 
`<li>
<button onclick="removeToDo(event)">❌</button> ${toDoText} (${toDoAuthor})
</li>`
document.getElementById("todo-text").value = '';
document.getElementById("todo-author").value = '';
todocounter++;
document.getElementById("toDoCounter").textContent = todocounter;


}
onReady();