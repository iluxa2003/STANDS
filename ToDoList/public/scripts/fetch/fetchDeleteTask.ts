import { ApiResponse } from '../interfaces/interfaces.js';
import showItems from './fetchShowTasks.js';

export default async function deleteTask(id: string) {
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  };
  const response = await fetch('/api/toDoTable', options);
  const json: ApiResponse = await response.json();
  showItems(json);
}
