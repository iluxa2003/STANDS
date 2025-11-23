import addTask from './fetch/fetchAdd.js';
import { modalCreateView } from './view/modalView.js';
const backdropModal = document.querySelector('.backdrop-modal') as HTMLElement;
const phoneAddButton = document.querySelector(
  '.task-create.phone'
) as HTMLElement;
const addButton = document.querySelector('.task-create') as HTMLElement;
const modal = document.querySelector('.modal') as HTMLElement;

export function closeModal() {
  backdropModal.style.visibility = 'hidden';
  backdropModal.style.zIndex = '0';

  if (window.innerWidth <= 600) {
    phoneAddButton.style.visibility = 'visible';
  }
  if (window.innerWidth > 600) {
    addButton.style.visibility = 'visible';
  }
}

export function openModal() {
  function exceedLength() {
    if (taskName.value.length === 50) {
      warning.style.visibility = 'visible';
    } else {
      warning.style.visibility = 'hidden';
    }
  }
  backdropModal.style.visibility = 'visible';
  modal.innerHTML = modalCreateView;
  const addPanel = document.querySelector('.controls') as HTMLFormElement;
  const taskName = document.querySelector(
    '.taskName-label'
  ) as HTMLInputElement;
  const warning = document.querySelector(
    '.new-task_warning'
  ) as HTMLInputElement;
  const closeModalButton = document.querySelector(
    '.modal_close-button'
  ) as HTMLElement;
  const taskDate = document.querySelector(
    '.taskDate-label'
  ) as HTMLInputElement;
  const taskProject = document.querySelector(
    '.new-task__project'
  ) as HTMLTextAreaElement;

  closeModalButton.addEventListener('click', closeModal);
  taskName.addEventListener('input', exceedLength);
  addPanel.addEventListener('submit', () => {
    addTask(taskName, taskProject, taskDate);
  });
  backdropModal.style.zIndex = '100';
  warning.style.visibility = 'hidden';
  if (window.innerWidth <= 600) {
    phoneAddButton.style.visibility = 'hidden';
  }
  if (window.innerWidth > 600) {
    addButton.style.visibility = 'hidden';
  }
}
