import { Component, OnInit } from '@angular/core';
import { Todo } from '../modules/todo';
import * as TodoSrv from '../todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
    tasks!: Todo[];

  constructor() {
      TodoSrv.get().then((todos) => (this.tasks = todos.filter(todo => todo.completed)));
  }

  ngOnInit(): void {
  }

}
