const backdropModal = document.querySelector('.backdrop-modal') as HTMLElement;
const phoneAddButton = document.querySelector('.task-create.phone') as HTMLElement;
const addButton = document.querySelector('.task-create') as HTMLElement;
const closeModalButton = document.querySelector('.modal_close-button') as HTMLElement;

closeModalButton.addEventListener('click', closeModal);

export function closeModal() {
  backdropModal.style.visibility = 'hidden';
  if (window.innerWidth <= 600) {
    phoneAddButton.style.visibility = "visible";
  }
  if (window.innerWidth > 600) {
    addButton.style.visibility = "visible";
  }
}

export function openModal() {
  backdropModal.style.visibility = 'visible';
  if (window.innerWidth <= 600) {
    phoneAddButton.style.visibility = "hidden";
  }
  if (window.innerWidth > 600) {
    addButton.style.visibility = "hidden";
  }
}
