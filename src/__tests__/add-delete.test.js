/**
 * @jest-environment jsdom
 */
/* eslint-disable import/extensions */

import { expect } from '@jest/globals';
import { addNewTaskToList, deleteItem } from '../update-to-do-list';

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

  test('should Not add anything into toDoTask', () => {
    const newTask = document.getElementById('new-task');
    newTask.value = '';
    toDoTasks = addNewTaskToList();

    expect(toDoTasks).toHaveLength(1);
  });

  test('should delete the item when passed the index of it', () => {
    toDoTasks = deleteItem(0);
    expect(toDoTasks).toHaveLength(0);
  });

  test('should not delete anything if not passed the index of it', () => {
    toDoTasks = deleteItem();
    expect(toDoTasks).toHaveLength(0);
  });
});