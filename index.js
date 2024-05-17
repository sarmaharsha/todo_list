const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');


function addTask(task) {
  const listItem = document.createElement('li');
  listItem.innerText = task;

  
  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.addEventListener('click', function() {
    listItem.classList.toggle('completed');
  });

  
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', function() {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(completeButton);
  listItem.appendChild(removeButton);

  todoList.appendChild(listItem);
  newTaskInput.value = ''; 
}

addTaskButton.addEventListener('click', function() {
  const task = newTaskInput.value;
  if (task) {
    addTask(task);
  }
});
