import { handleTaskClick } from "../modalFunctions.js";
const tasks = document.querySelector(".tasks-container");
export default function showItems(json) {
    if (json.status === 'success') {
        tasks.style.visibility = 'visible';
        tasks.innerHTML = `
        <div class='task-item__header'>
          <span class='task-userName__header'>User name</span>
          <span class='task-item__name__header'>Task name</span>
          <span class='task-item__description__header'>Task description</span>
        </div>`;
        json.database.forEach((item) => {
            const newTask = document.createElement('div');
            newTask.classList.add('task-item');
            newTask.id = item.id;
            newTask.innerHTML = `
        <span class='task-userName'>${item.user}</span>
        <span class='task-item__name'>${item.task}</span>
        <span class='task-item__description'>${item.description}</span>
    `;
            newTask.addEventListener('click', (event) => {
                event.preventDefault();
                handleTaskClick(item.user, item.task, item.description, item.id);
            });
            tasks.appendChild(newTask);
        });
    }
}
