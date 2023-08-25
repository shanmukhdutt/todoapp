const inputBox=document.getElementById('inputBox');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');
const addTodo=()=>{
      const inputText=inputBox.value.trim();
      if(inputText.length<=0){
        alert("you must write something in your to do");
        return false;
      }
      const li=document.createElement("li");
      const p=document.createElement("p");
      p.innerElement=inputText;
      li.appendChild(p);
      const deleteBtn=document.createElement("Btn");
      deleteBtn.innerText="Remove";
      li.appendChild(deleteBtn);
      const editBtn=document.createElement("Btn");
      editBtn.innerText="edit";
      todoList.appendChild(li);
      inputBox.value="";
}
const updateTodo=(e)=>{
    if(e.target.innerHTML==="Remove"){
        todoList.removeChild(e.target.parentElement);        
    }
    if(e.target.innerHTML==="Edit"){
        inputBox.value=e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value="Edit";
        editTodo=e;

    }
}
const saveLocalTodos=(todo)=>{
    let todos;
   if(localStorage.getItem("todos")===null){
    todos=[]
   }
   else{
    todos=JSON.parse(localStorage.getItem("todos"));
   }
    todo.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

}
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);