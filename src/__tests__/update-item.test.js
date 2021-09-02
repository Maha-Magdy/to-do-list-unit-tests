/**
 * @jest-environment jsdom
 */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import { describe, expect } from '@jest/globals';
import { updateDescription, updateStatus } from '../task.js';

import { addNewTaskToList } from '../update-to-do-list';

jest.mock('../handle-storage.js');

document.body.innerHTML = '<input type="text" placeholder="Add to your list..." id="new-task">';

let toDoTasks = [];

describe('The Task', () => {
  const newTask = document.getElementById('new-task');
  newTask.value = 'Wash the dishes';
  toDoTasks = addNewTaskToList();
  const task = toDoTasks[0];

  test('Should have the edited description', () => {
    const updatedTask = updateDescription(task, 'Go for a walk');
    expect(updatedTask.description).toBe('Go for a walk');
  });

  test('Should change the completed status to true', () => {
    const updatedTask = updateStatus(task, true);
    expect(updatedTask.completed).toBeTruthy();
  });

  test('Should change the completed status to false', () => {
    const updatedTask = updateStatus(task, false);
    expect(updatedTask.completed).toBeFalsy();
  });
});