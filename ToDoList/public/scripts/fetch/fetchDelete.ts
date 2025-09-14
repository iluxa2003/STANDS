import ApiResponse from '../interfaces/apiResponce.js';
import showItems from '../fetch/fetchShow.js';

export default async function deleteTask(id: string) {
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  };
  const response = await fetch('/api', options);
  const json: ApiResponse = await response.json();
  showItems(json);
}
