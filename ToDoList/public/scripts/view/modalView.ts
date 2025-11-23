export const modalCreateView = `
<button type="button" class="modal_close-button">+</button>
<form class="controls">
  <div class="new-task__controls">
    <div class="new-task__control">
      <label for="name">Task name</label>
      <input
        id="name"
        type="text"
        class="taskName-label"
        required="true"
        maxlength="50"
        placeholder="Name your task!"
        autocomplete="off"
      />
      <div class="new-task_warning">Exceeded maximum naming length</div>
    </div>
    <div class="new-task__control">
      <label for="project">Project</label>
        <select id="project" name="project" class="new-task__project">
          <option value="Home">Home</option>
          <option value="Personal">Personal</option>
          <option value="SIMA">SIMA</option>
          <option value="Gym">Gym</option>
        </select>
    </div>
    <div class="new-task__control">
      <label for="date">Date</label>
      <input
        id="date"
        type="date"
        class="taskDate-label"
        autocomplete="off"
      />
    </div>
  </div>
  <div class="new-task__actions">
    <button type="submit">Done</button>
  </div>
</form>
`;
