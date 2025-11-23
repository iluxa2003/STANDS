import { TaskData, ApiResponse } from '../interfaces/interfaces.js';
import deleteTask from './fetchDeleteTask.js';
import taskView from '../view/taskView.js';
const tasks = document.querySelector('.tasks-container') as HTMLElement;

tasks.addEventListener('click', (event) => {
  deleteImage(event);
});

export default function showItems(json: ApiResponse) {
  if (json.status === 'success') {
    tasks.style.visibility = 'visible';
    tasks.innerHTML = ``;
    const tasksContainer = document.createElement('div');
    json.database.forEach((item: TaskData) => {
      const newTask = document.createElement('div');
      newTask.classList.add('task-item');
      newTask.id = item.id;
      const dueField = dateTag(item.date);
      newTask.innerHTML = taskView(item.task, item.project, dueField, item.id);
      tasksContainer.appendChild(newTask);
    });
    tasks.appendChild(tasksContainer);
  }
}

function deleteImage(event: any) {
  if (event.target.name === 'delete') {
    deleteTask(event.target.id);
  }
}

function dateTag(date: number) {
  const day = 24 * 60 * 60 * 1000;
  const week = 7 * day;
  const today = new Date().getTime();
  const diff = date - today;
  if (diff < 0) return '<div class="task-item__deadline over">Overdue</div>';
  if (diff <= day) return '<div class="task-item__deadline high">High</div>';
  if (diff <= week) return '<div class="task-item__deadline med">Medium</div>';
  if (diff > week) return '<div class="task-item__deadline low">Low</div>';
}
