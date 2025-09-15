const backdropModal = document.querySelector('.backdrop-modal') as HTMLElement;
const taskName = document.querySelector('.taskName-label') as HTMLInputElement;
const warning = document.querySelector('.new-task_warning') as HTMLInputElement;
const phoneAddButton = document.querySelector(
  '.task-create.phone',
) as HTMLElement;
const addButton = document.querySelector('.task-create') as HTMLElement;
const closeModalButton = document.querySelector(
  '.modal_close-button',
) as HTMLElement;

closeModalButton.addEventListener('click', closeModal);
taskName.addEventListener('input', exceedLength);

export function closeModal() {
  backdropModal.style.visibility = 'hidden';
  backdropModal.style.zIndex = '0';
  warning.style.visibility = 'hidden';
  if (window.innerWidth <= 600) {
    phoneAddButton.style.visibility = 'visible';
  }
  if (window.innerWidth > 600) {
    addButton.style.visibility = 'visible';
  }
}

export function openModal() {
  backdropModal.style.visibility = 'visible';
  backdropModal.style.zIndex = '100';
  exceedLength();
  if (window.innerWidth <= 600) {
    phoneAddButton.style.visibility = 'hidden';
  }
  if (window.innerWidth > 600) {
    addButton.style.visibility = 'hidden';
  }
}

function exceedLength() {
  if (taskName.value.length === 50) {
    warning.style.visibility = 'visible';
  } else {
    warning.style.visibility = 'hidden';
  }
}
