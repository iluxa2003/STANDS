import ApiResponse from './scripts/interfaces/apiResponce';
import showItems from './scripts/fetch/fetchShow';
import addTask from './scripts/fetch/fetchAdd';
import { openModal } from './scripts/modalFunctions';

const addPanel = document.querySelector('.controls') as HTMLFormElement;
const tasksCreate = document.querySelector(
  '.task-create',
) as HTMLTextAreaElement;
const tasksCreatePhone = document.querySelector(
  '.task-create.phone',
) as HTMLTextAreaElement;

addPanel.addEventListener('submit', addTask);
tasksCreate.addEventListener('click', openModal);
tasksCreatePhone.addEventListener('click', openModal);

fetch('/api')
  .then((response) => response.json())
  .then((json: ApiResponse) => {
    showItems(json);
  });
