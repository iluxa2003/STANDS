// const addPanel = document.getElementsByClassName('controls')[0] as HTMLFormElement;
// const userName = document.getElementsByClassName('userName-label')[0] as HTMLInputElement;
// const taskName = document.getElementsByClassName('taskName-label')[0] as HTMLInputElement;
// const taskDescription = document.getElementsByClassName('taskDescription-label')[0] as HTMLTextAreaElement;
// const tasks = document.getElementsByClassName('tasks-container')[0] as HTMLElement;

// console.log(taskName);

// addPanel.addEventListener('submit', addTask);

// interface TaskData {
//   user: string;
//   task: string;
//   description: string;
// }

// interface ApiResponse {
//   status: string;
//   database: TaskData[];
// }

// async function addTask(event: Event): Promise<void> {
//   event.preventDefault();

//   const user = userName.value;
//   const task = taskName.value;
//   const description = taskDescription.value;

//   const data: TaskData = { user, task, description };
//   console.log(JSON.stringify(data));

//   const options: RequestInit = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   };

//   const response = await fetch('/api', options);
//   const json: ApiResponse = await response.json();
//   console.log(json);

//   if (json.status === 'success') {
//     tasks.innerHTML = '';
//     json.database.forEach((item: TaskData) => {
//       const newTask = `
//         <div class='task-item'>
//           <span class='task-userName'>${item.user}</span>
//           <span class='task-item__name'>${item.task}</span>
//           <span class='task-item__description'>${item.description}</span>
//         </div>
//       `;
//       tasks.insertAdjacentHTML('beforeend', newTask);
//     });
//   }
// }