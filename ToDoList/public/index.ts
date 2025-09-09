import ApiResponse from "./scripts/interfaces/apiResponce.js";
import showItems from "./scripts/fetch/fetchShow.js";
import addTask from "./scripts/fetch/fetchAdd.js";
import { openModal } from "./scripts/modalFunctions.js";

const addPanel = document.querySelector('.controls') as HTMLFormElement;
const tasksCreate = document.querySelector('.task-create') as HTMLTextAreaElement;
const tasksCreatePhone = document.querySelector('.task-create.phone') as HTMLTextAreaElement;

addPanel.addEventListener('submit', addTask);
tasksCreate.addEventListener('click', openModal);
tasksCreatePhone.addEventListener('click', openModal);

fetch('/api')
  .then((response) => response.json())
  .then((json: ApiResponse) => {
    showItems(json);
  });




