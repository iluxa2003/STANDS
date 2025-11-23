import showItems from './scripts/fetch/fetchShow.js';
import { openModal } from './scripts/modalFunctions.js';
import { TaskData, ApiResponse } from './scripts/interfaces/interfaces.js';

const filter = document.querySelector('.project-filter') as HTMLFormElement;
const tasksCreate = document.querySelector(
  '.task-create'
) as HTMLTextAreaElement;
const tasksCreatePhone = document.querySelector(
  '.task-create.phone'
) as HTMLTextAreaElement;

filter.addEventListener('change', (event) => {
  filterFunction(event);
});
tasksCreate.addEventListener('click', openModal);
tasksCreatePhone.addEventListener('click', openModal);

async function filterFunction(event: any) {
  const response = await fetch('/api/toDoTable');
  const json: ApiResponse = await response.json();
  if (event.target.value === 'All') {
    return showItems(json);
  }
  const database = json.database.filter((item: TaskData) => {
    return item.project === event.target.value;
  });
  const filteredDatabase: ApiResponse = {
    status: 'success',
    database,
  };
  showItems(filteredDatabase);
}

fetch('/api/toDoTable')
  .then((response) => response.json())
  .then((json: ApiResponse) => {
    showItems(json);
  });
