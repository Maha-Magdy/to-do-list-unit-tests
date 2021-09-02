/* eslint-disable array-callback-return */
let toDoList = [];
let index = 0;

export default class HandleStorage {
  static setTask(task) {
    const toDoList = HandleStorage.getToDoList();
    const index = HandleStorage.getIndex();
    task.index = index;
    toDoList.push(task);
  }

  static getToDoList() {
    return toDoList;
  }

  static updateToDoList(list) {
    localStorage.setItem("index", JSON.stringify(list.length - 1));
    list.map((task, index) => {
      task.index = index;
    });
    localStorage.setItem("to_do_list", JSON.stringify(list));
  }

  static getIndex() {
    return index;
  }

  static resetToDoList() {
    localStorage.clear();
  }
}
