import showItems from "./scripts/fetch/fetchShow.js";
import TaskData from "./scripts/interfaces/taskData.js";
import ApiResponse from "./scripts/interfaces/apiResponce.js";

const addPanel = document.getElementsByClassName(
  'controls',
)[0] as HTMLFormElement;
const userName = document.getElementsByClassName(
  'userName-label',
)[0] as HTMLInputElement;
const taskName = document.getElementsByClassName(
  'taskName-label',
)[0] as HTMLInputElement;
const taskDescription = document.getElementsByClassName(
  'taskDescription-label',
)[0] as HTMLTextAreaElement;

addPanel.addEventListener('submit', addTask);

fetch('/api')
  .then((response) => response.json())
  .then((json: ApiResponse) => {
    showItems(json);
  });

async function addTask(event: Event): Promise<void> {
  event.preventDefault();

  const user = userName.value;
  const task = taskName.value;
  const description = taskDescription.value;
  const id = Math.random().toString();

  const data: TaskData = { user, task, description, id };
  console.log(JSON.stringify(data));

  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch('/api', options);
  const json: ApiResponse = await response.json();
  console.log(json);

  showItems(json);
}


