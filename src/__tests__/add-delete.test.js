/**
 * @jest-environment jsdom
 */

import { addNewTaskToList, deleteItem } from '../update-to-do-list';

import { expect } from '@jest/globals';

jest.mock('../handle-storage.js');

document.body.innerHTML = '<input type="text" placeholder="Add to your list..." id="new-task">';

let toDoTasks = [];

describe('My To-Do List', () => {
  test('should add the new task into the list of to do list', () => {
    const newTask = document.getElementById('new-task');
    newTask.value = 'Wash the dishes';
    toDoTasks = addNewTaskToList();

    expect(toDoTasks).toHaveLength(1);
  });

  test('should delete the item when passed the index of it', () => {
    toDoTasks = deleteItem(0);
    expect(toDoTasks).toHaveLength(0);
  });
});