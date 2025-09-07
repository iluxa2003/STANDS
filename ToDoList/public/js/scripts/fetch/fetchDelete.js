import showItems from "../fetch/fetchShow.js";
import { closeModal } from "../modalFunctions.js";
export default async function deleteTask(id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
    closeModal();
    showItems(json);
}
