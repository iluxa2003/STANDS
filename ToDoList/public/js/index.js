import showItems from "./scripts/fetch/fetchShow.js";
const addPanel = document.getElementsByClassName('controls')[0];
const userName = document.getElementsByClassName('userName-label')[0];
const taskName = document.getElementsByClassName('taskName-label')[0];
const taskDescription = document.getElementsByClassName('taskDescription-label')[0];
addPanel.addEventListener('submit', addTask);
fetch('/api')
    .then((response) => response.json())
    .then((json) => {
    showItems(json);
});
async function addTask(event) {
    event.preventDefault();
    const user = userName.value;
    const task = taskName.value;
    const description = taskDescription.value;
    const id = Math.random().toString();
    const data = { user, task, description, id };
    console.log(JSON.stringify(data));
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
    showItems(json);
}
