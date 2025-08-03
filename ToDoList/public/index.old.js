// const addPanel = document.getElementsByClassName('controls')[0];
// const userName = document.getElementsByClassName('userName-label')[0];
// const taskName = document.getElementsByClassName('taskName-label')[0];
// const taskDescription = document.getElementsByClassName(
//   'taskDescription-label',
// )[0];
// const tasks = document.getElementsByClassName('tasks-container')[0];
// console.log(taskName);

// addPanel.addEventListener('submit', addTask);

// async function addTask(event) {
//   event.preventDefault();
//   const user = userName.value;
//   const task = taskName.value;
//   const description = taskDescription.value;

//   const data = { user, task, description };
//   console.log(JSON.stringify(data));
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   };
//   const response = await fetch('/api', options);
//   const json = await response.json();
//   console.log(json);
//   if (json.status === 'success') {
//     tasks.innerHTML = '';
//     json.database.map((item) => {
//       const newTask = `
//         <div>
//             <span>${item.user}</span>
//             <span>${item.task}</span>
//             <span>${item.description}</span>
//         </div>
//         `;
//       tasks.insertAdjacentHTML('beforeend', newTask);
//     });
//   }
// }
