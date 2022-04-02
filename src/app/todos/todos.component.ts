import { Component, OnInit } from '@angular/core';
import { Todo } from '../modules/todo';
import * as TodoSrv from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
   tasks!: Todo[];

   newTaskTitle: string | undefined;

    constructor() {
        TodoSrv.get().then(
            (todos) => (this.tasks = todos.filter((todo) => !todo.completed))
        );
    }

  ngOnInit(): void {}

  async addTask() {
      const nTodo = await TodoSrv.add({
          title: this.newTaskTitle as string,
          completed: false,
      });
      this.tasks.push(nTodo);
      this.newTaskTitle = '';
  }

  async completeTask(todo: Todo, i: number) {
      await TodoSrv.update({ completed: true }, todo.id);
      this.tasks.splice(i, 1);
  }
}
