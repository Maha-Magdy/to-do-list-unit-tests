/**
 * @jest-environment jsdom
 */

import Task from "../task";
import { addNewTaskToList } from "../update-to-do-list";
import { expect } from "@jest/globals";
import updateOrDeleteTask from "../update-to-do-list";

jest.mock("../handle-storage.js");

document.body.innerHTML = `<input type="text" placeholder="Add to your list..." id="new-task">
                          <button type="submit" id="del">delete</button>`;

let toDoTasks = [];

test("should add the new task into the list of to do list", () => {
  const newTask = document.getElementById("new-task");
  newTask.value = `Wash the dishes`;
  toDoTasks = addNewTaskToList();

  expect(toDoTasks).toHaveLength(1);
});

test("should delete the new task from the list of to do list", () => {
  const newbtn = document.getElementById('del');
  
  updateOrDeleteTask(e.target.offsetParent, index, selectedTask);
  
  expect(toDoTasks).toHaveLength(0);
});
