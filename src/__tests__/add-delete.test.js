/**
 * @jest-environment jsdom
 */
/* eslint-disable import/extensions */

import { expect } from '@jest/globals';
import { addNewTaskToList, deleteItem, clearAllCompleted } from '../update-to-do-list';
import { updateStatus } from '../task.js';

jest.mock('../handle-storage.js');

document.body.innerHTML = '<input type="text" placeholder="Add to your list..." id="new-task">';

let toDoTasks = [];

describe('My To-Do List\'s adding functionality', () => {
  test('Should add the new task into the list of to do list', () => {
    const newTask = document.getElementById('new-task');
    newTask.value = 'Wash the dishes';
    toDoTasks = addNewTaskToList();

    expect(toDoTasks).toHaveLength(1);
  });

  test('Should not add anything into toDoTask', () => {
    const newTask = document.getElementById('new-task');
    newTask.value = '';
    toDoTasks = addNewTaskToList();

    expect(toDoTasks).toHaveLength(1);
  });
});

describe('My To-Do List\'s deleting functionality', () => {
  test('Should delete the item when passed the index of it', () => {
    toDoTasks = deleteItem(0);
    expect(toDoTasks).toHaveLength(0);
  });

  test('Should not delete anything if not passed the index of it', () => {
    toDoTasks = deleteItem();
    expect(toDoTasks).toHaveLength(0);
  });

  test('Should delete all the completed tasks', () => {
    const newTask = document.getElementById('new-task');
    newTask.value = 'Wash the dishes';
    toDoTasks = addNewTaskToList();

    const task = toDoTasks[0];
    const updatedTask = updateStatus(task, true);

    toDoTasks = clearAllCompleted(toDoTasks);
    expect(toDoTasks).toHaveLength(0);
  });
});
