const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');
function showFloater(){
    body.classList.add('show-floater')
}
function closeFloater(){
    if (body.classList.contains('show-floater')){
    body.classList.remove('show-floater')
    }
}
input.addEventListener('focusin', showFloater)
overlay.addEventListener('click', closeFloater)

//------------
function createTask(e){
    if (!todoInput){
        alert('please enter a task');
        return;
    }
    const title = todoInput.value;
    const task =document.createElement('a');
    task.className = 'task';
    task.innerText = title;
    todoList.appendChild(task);
    todoForm.reset();
}
const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.form-control').innerHTML;
const task = JSON.parse(localStorage.getItem('task')) || [];
todoForm.addEventListener('submit', createTask());

