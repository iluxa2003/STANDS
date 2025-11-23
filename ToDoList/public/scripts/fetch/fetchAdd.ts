import { TaskData, ApiResponse } from '../interfaces/interfaces.js';
import { closeModal } from '../modalFunctions.js';
import showItems from './fetchShow.js';

export default async function addTask(
  taskName: HTMLInputElement,
  taskProject: HTMLTextAreaElement,
  taskDate: HTMLInputElement
): Promise<void> {
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

  const response = await fetch('/api/toDoTable', options);
  const json: ApiResponse = await response.json();

  showItems(json);
  closeModal();
}
