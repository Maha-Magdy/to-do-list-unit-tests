import { default as Task} from "./task.js";
import handleStorage from "./handle-storage.js";

export function updateToDoList() {
    const newTask = document.getElementById("new-task");
    const taskDescription = newTask.value;
    const task = new Task(taskDescription, false, 0);
    handleStorage.setTask(task);
    const toDoTasks = handleStorage.getToDoList();
    newTask.value = "";
    return toDoTasks
  }