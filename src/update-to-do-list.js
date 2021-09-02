/* eslint-disable import/no-named-default */
import { default as Task } from './task.js';
import handleStorage from './handle-storage.js';

export function addNewTaskToList() {
  const newTask = document.getElementById('new-task');
  const taskDescription = newTask.value;
  const task = new Task(taskDescription, false, 0);
  handleStorage.setTask(task);
  newTask.value = '';
  const toDoTasks = handleStorage.getToDoList();
  return toDoTasks;
}

export function deleteItem(index) {
  const allTasks = handleStorage.getToDoList();

  allTasks.splice(index, 1);

  handleStorage.updateToDoList(allTasks);

  return allTasks;
}