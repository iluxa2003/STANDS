const addPanel = document.getElementsByClassName('controls')[0] as HTMLFormElement;
const userName = document.getElementsByClassName('userName-label')[0] as HTMLInputElement;
const taskName = document.getElementsByClassName('taskName-label')[0] as HTMLInputElement;
const taskDescription = document.getElementsByClassName('taskDescription-label')[0] as HTMLTextAreaElement;
const tasks = document.getElementsByClassName('tasks-container')[0] as HTMLElement;
const backdropModal = document.getElementsByClassName('backdrop-modal')[0] as HTMLElement;

addPanel.addEventListener('submit', addTask);

interface TaskData {
  user: string;
  task: string;
  description: string;
  id: string;
}

interface ApiResponse {
  status: string;
  database: TaskData[];
}

function showItems(json) {
    if (json.status === 'success') {
    tasks.style.visibility = "visible";
    tasks.innerHTML = `
        <div class='task-item__header'>
          <span class='task-userName__header'>User name</span>
          <span class='task-item__name__header'>Task name</span>
          <span class='task-item__description__header'>Task description</span>
        </div>`;
    json.database.forEach((item: TaskData) => {
    const newTask = document.createElement('div');
    newTask.classList.add('task-item');
    newTask.id = item.id;
        
    newTask.innerHTML = `
        <span class='task-userName'>${item.user}</span>
        <span class='task-item__name'>${item.task}</span>
        <span class='task-item__description'>${item.description}</span>
    `;

    newTask.addEventListener('click', (event) => {
      event.preventDefault();
      handleTaskClick(item.user, item.task, item.description, item.id);
    });

    tasks.appendChild(newTask);
    });
  }
}

async function handleTaskClick(user: string, task: string, description: string, id: string) {
  const data: TaskData = { user, task, description, id };
  const options: RequestInit = {
    method: 'DELETE',
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

fetch('/api')
  .then((response) => response.json())
  .then((json: ApiResponse) => {
  showItems(json)}
);

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

  showItems(json)
}

function createWindow (item) {
    const modal = backdropModal.children[0] as HTMLElement;
        
    modal.innerHTML = `
      <div>
        <div>
          <span class='task-userName'>${item.user}</span>
          <span class='task-item__name'>${item.task}</span>
        </div>
        <div>
           <span class='task-item__description'>${item.description}</span>
        </div>
      </div>  
    `;
}