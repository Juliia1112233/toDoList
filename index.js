const input = document.querySelector(".inputForm");
const add = document.querySelector('.buttonAdd');
const tasks = document.querySelector('.task');

add.addEventListener('click', addTask);

function addTask(){

    let data = input.value; 
    let newTask = document.createElement('div');
    newTask.classList.add('taskElem');
    tasks.append(newTask);
    newTask.innerHTML = data;
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
        
} 
