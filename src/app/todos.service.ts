import { Injectable } from '@angular/core';
import { Todo } from './modules/todo';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    public tasks: Todo[] = [];

    public newTaskTitle:string = '';

    constructor(newTaskTitle:string ) {
        this.newTaskTitle = this.newTaskTitle

    }

    public addTask(newTaskTitle:string) {
            this.tasks.push(this.newTaskTitle);
            this.newTaskTitle = '';
        }


    public deleteTask(index:any) {
        this.tasks.splice(index, 1);
    }
}

