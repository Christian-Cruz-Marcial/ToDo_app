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
overlay.addEventListener('input', closeFloater)
overlay.addEventListener('click', closeFloater)

//------------
const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input[type=text]');
const tasks = [];

$('.todo-form').submit(function(event){
    event.preventDefault();
});

function createTask(){
    const title = todoInput.value    
    const task ={
        title: title
    };
    tasks.push(task);
    fillTodoList(tasks);
    storeTasks(tasks);
    todoForm.reset();

    console.log(task)
    console.table(tasks);
}

function fillTodoList(tasks = []){
    const todoHtml = tasks.map((tasks) =>{
        return `<a href='#' class='task'>
        ${tasks.title}
        </a>
        
        <label for='Done' class='label'><input type='checkbox' name='Done' class='box' value='Done'> Done</label>`
    }).join('');
    todoList.innerHTML = todoHtml;
}
function storeTasks(tasks = []){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

todoForm.addEventListener('submit', createTask);
