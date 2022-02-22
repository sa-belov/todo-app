import { makeAutoObservable } from 'mobx';

export interface ITodoItem {
  id: number;
  text: string;
  resolved: boolean;
}

class TodoState {
  todoList: ITodoItem[] = [
    { id: 1, resolved: false, text: 'First Todo' },
    { id: 2, resolved: false, text: 'Second Todo' },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  getList() {
    return this.todoList;
  }

  append(item: ITodoItem) {
    this.todoList.push({ ...item, id: Date.now() });
  }

  update(updated: ITodoItem) {
    const index = this.todoList.findIndex((it) => it.id === updated.id);
    if (index === -1) return;

    this.todoList[index] = updated;
  }

  delete(id: ITodoItem['id']) {
    const index = this.todoList.findIndex((it) => it.id === id);
    if (index === -1) return;

    this.todoList.splice(index, 1);
  }
}

export default new TodoState();
