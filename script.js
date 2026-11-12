// Welcome message
console.log("Welcome to Ismail Yahaya Portfolio!");

// Contact Form - show thank you message
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('form-message').textContent = "Thank you, " + name + "! Your message has been received. I will reply soon.";
    contactForm.reset();
  });
}

// Planner - Add new task
const plannerForm = document.getElementById('planner-form');
if (plannerForm) {
  plannerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value !== "") {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value + " - Due: " + dateInput.value + " ";
      const doneBtn = document.createElement('button');
      doneBtn.textContent = "Done";
      doneBtn.onclick = function() { newTask.remove(); updateCount(); };
      newTask.appendChild(doneBtn);
      taskList.appendChild(newTask);
      updateCount();
      taskInput.value = "";
      dateInput.value = "";
      alert("Task added!");
    }
  });
}

function updateCount() {
  const count = document.getElementById('task-list').children.length;
  const countElement = document.getElementById('task-count');
  if (countElement) {
    countElement.textContent = "Total tasks: " + count;
  }
}
