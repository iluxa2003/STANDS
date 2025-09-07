import TaskData from "./interfaces/taskData.js";
import deleteTask from "./fetch/fetchDelete.js";

const backdropModal = document.getElementsByClassName(
  'backdrop-modal',
)[0] as HTMLElement;

export function closeModal() {
  backdropModal.style.visibility = 'hidden';
}

export function handleTaskClick(
  user: string,
  task: string,
  description: string,
  id: string,
) {
  const modal = backdropModal.children[0] as HTMLElement;
  const data: TaskData = { user, task, description, id };
  console.log(data);

  modal.innerHTML = `
      <button class="modal_close-botton" type="button">
        Close
      </button>
      <div class="task">
        <div class='task-userName'>Username: ${data.user}</div>
        <div class='task-item__name'>Task name: ${data.task}</div>
        <div>Description:</div>
        <div class='task-item__description'>${data.description}</div>
      </div>
      <button class="modal_delete-botton" type="button">
        Delete
      </button>  
    `;
    backdropModal.style.visibility = 'visible';
    const closeButton = document.querySelector(".modal_close-botton") as HTMLElement;
    const deleteButton = document.querySelector(".modal_delete-botton") as HTMLElement;

    closeButton.addEventListener("click", closeModal);
    deleteButton.addEventListener("click", ()=>{deleteTask(data.id)});
}
