import TaskData from '../interfaces/taskData.js';
import ApiResponse from '../interfaces/apiResponce.js';
import { closeModal } from '../modalFunctions.js';
import showItems from './fetchShow.js';

const taskDate = document.querySelector('.taskDate-label') as HTMLInputElement;
const taskName = document.querySelector('.taskName-label') as HTMLInputElement;
const taskProject = document.querySelector(
  '.new-task__project',
) as HTMLTextAreaElement;

export default async function addTask(event: Event): Promise<void> {
  // event.preventDefault();

  const task = taskName.value;
  const project = taskProject.value;
  const date = new Date(taskDate.value).getTime();
  const id = Math.random().toString();
  const data: TaskData = { task, project, date, id };

  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch('/api', options);
  const json: ApiResponse = await response.json();

  showItems(json);
  closeModal();
}
