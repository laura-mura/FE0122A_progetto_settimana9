import { Component, OnInit } from '@angular/core';
import { Todo } from '../modules/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    public tasks: Todo[] = [];

    public newTaskTitle: string;

    constructor(newTaskTitle:string) {
        this.newTaskTitle = this.newTaskTitle

    }

    public addTask(newTaskTitle:string) {
        if (this.newTaskTitle == '') {
        }
        else {
            this.tasks.push(this.newTaskTitle);
            this.newTaskTitle = '';
        }
    }

    public deleteTask(index:any) {
        this.tasks.splice(index, 1);
    }

  ngOnInit(): void {
  }

}
