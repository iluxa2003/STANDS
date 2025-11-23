export default function taskView(
  task: string,
  project: string,
  dueField: any,
  id: string
) {
  return `
        <label class="task_container">
          <input name='checkbox' class='task-checkbox' type='checkbox'/>
          <div>
            <div class='task-to_do'>${task}</div>
            <div class='task-project'>${project}</div>
            ${dueField}
          </div>
        </label>
        <span class='task-item__delete' ><img id='${id}' name='delete' src='./img/delete.png' alt='error'/><span/>
      `;
}
