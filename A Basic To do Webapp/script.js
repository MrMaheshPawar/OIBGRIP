const form = document.querySelector('#add-task-form');
const pendingTasksList = document.querySelector('#pending-tasks');
const completedTasksList = document.querySelector('#completed-tasks');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the task input value
  const taskInput = document.querySelector('#task-input');
  const task = taskInput.value;

  // Create a new list item for the task
  const li = document.createElement('li');
  li.innerHTML = `
    ${task}
    <button class="delete">Delete</button>
    <button class="complete">Complete</button>
  `;

  // Append the new list item to the pending tasks list
  pendingTasksList.appendChild(li);

  // Clear the task input
  taskInput.value = '';
});

pendingTasksList.addEventListener('click', (event) => {
  if (event.target.className === 'delete') {
    // Remove the parent list item from the pending tasks list
    const li = event.target.parentNode;
    pendingTasksList.removeChild(li);
  } else if (event.target.className === 'complete') {
    // Mark the parent list item as completed and move it to the completed tasks list
    const li = event.target.parentNode;
    li.classList.add('completed');
    completedTasksList.appendChild(li);
    event.target.innerText = 'Pending';
    event.target.className = 'pending';
  }
});

completedTasksList.addEventListener('click', (event) => {
  if (event.target.className === 'delete') {
    // Remove the parent list item from the completed tasks list
    const li = event.target.parentNode;
    completedTasksList.removeChild(li);
  } else if (event.target.className === 'pending') {
    // Mark the parent list item as pending and move it to the pending tasks list
    const li = event.target.parentNode;
    li.classList.remove('completed');
    pendingTasksList.appendChild(li);
    event.target.innerText = 'Complete';
    event.target.className = 'complete';
  }
});