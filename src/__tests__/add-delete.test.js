/**
 * @jest-environment jsdom
 */

import { addNewTaskToList } from "../update-to-do-list";
import Task from "../task";
import { expect } from "@jest/globals";

jest.mock("../handle-storage.js");

document.body.innerHTML = `<input type="text" placeholder="Add to your list..." id="new-task">`;
let toDoTasks = [];

test("should add the new task into the list of to do list", () => {
  const newTask = document.getElementById("new-task");
  newTask.value = `Wash the dishes`;
  toDoTasks = addNewTaskToList();

  expect(toDoTasks).toHaveLength(1);
});
