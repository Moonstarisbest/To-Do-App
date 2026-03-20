let tasks = [];
let statusFilter = "all"
let tagFilter= "all"
const newTask = {
id: Date.now(),
text: taskInput.value.trim(),
tag: tagInput.value.trim(),
done: false
};
if (taskText === "") {
errorMessage.textContent = "Task name is required.";
return;
}
renderTasks()
let filteredTasks = tasks.filter(task => {
const matchesStatus =
statusFilter === "all" ||
(statusFilter === "active" && !task.done) ||
(statusFilter === "completed" && task.done);

const matchesTag =
tagFilter === "all" || task.tag === tagFilter;

return matchesStatus && matchesTag;
});

