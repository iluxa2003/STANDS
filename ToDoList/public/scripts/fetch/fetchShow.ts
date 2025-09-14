import TaskData from '../interfaces/taskData.js';
import deleteTask from './fetchDelete.js';
const tasks = document.querySelector('.tasks-container') as HTMLElement;

export default function showItems(json: any) {
  if (json.status === 'success' && json.database.length !== 0) {
    tasks.style.visibility = 'visible';
    tasks.innerHTML = ``;
    json.database.forEach((item: TaskData) => {
      const newTask = document.createElement('div');
      newTask.classList.add('task-item');
      newTask.id = item.id;
      const dueField = dateTag(item.date);
      newTask.innerHTML = `
        <label class="task_container">
          <input name='checkbox' class='task-checkbox' type='checkbox'/>
          <div>
            <div class='task-to_do'>${item.task}</div>
            <div class='task-project'>${item.project}</div>
            ${dueField}
          </div>
        </label>
        <span class='task-item__delete' id='${item.id}'><img src='./img/delete.png' alt='error'/><span/>
      `;

      const deleteButton = newTask.querySelector(
        '.task-item__delete',
      ) as HTMLElement;
      deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        deleteTask(item.id);
      });
      tasks.appendChild(newTask);
    });
  }
}

function dateTag(date: number) {
  const Day = 24 * 60 * 60 * 1000;
  const Week = 7 * Day;
  const today = new Date().getTime();
  const diff = date - today;
  if (diff < 0) return '<div class="task-item__deadline over">Overdue</div>';
  if (diff <= Day) return '<div class="task-item__deadline high">High</div>';
  if (diff <= Week) return '<div class="task-item__deadline med">Medium</div>';
  if (diff > Week) return '<div class="task-item__deadline low">Low</div>';
}
