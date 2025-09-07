import { handleTaskClick } from "../modalFunctions.js";
const tasks = document.querySelector(".tasks-container") as HTMLElement;
interface TaskData {
  user: string;
  task: string;
  description: string;
  id: string;
}

export default function showItems(json: any) {
  if (json.status === 'success' && json.database.length != 0) {
    tasks.style.visibility = 'visible';
    tasks.innerHTML = ``;
    json.database.forEach((item: TaskData) => {
      const newTask = document.createElement('div');
      newTask.classList.add('task-item');
      newTask.id = item.id;

      newTask.innerHTML = `
        <label class="task_container">
          <input name="checkbox" class='task-checkbox' type='checkbox'/>
          <div>
            <div class='task-to_do'>${item.task}</div>
            <div class='task-project'>${item.task}</div>
            <div class='task-item__deadline'>${item.description}</div>
          </div>
        </label>
        <span class='task-item__delete'>...<span/>
      `;
      
      const deleteButton = newTask.querySelector(".task-item__delete") as HTMLElement;
      deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        handleTaskClick(item.user, item.task, item.description, item.id);
      });
      tasks.appendChild(newTask);
    });
  }
}