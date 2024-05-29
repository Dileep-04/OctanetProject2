// script.js

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    var taskList = document.getElementById('taskList');

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(taskText));

    var span = document.createElement('span');
    span.className = 'close';
    span.appendChild(document.createTextNode('×'));
    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = 'none';
    };

    li.appendChild(span);
    taskList.appendChild(li);
    taskInput.value = '';
}
