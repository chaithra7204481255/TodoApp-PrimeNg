import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './todo';
import { AppService } from './app.service';
import { CheckboxChangeEvent } from 'primeng/checkbox';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('todoTask') todoTask: any;
  title = 'testapp';
  text = '';
  todoList: Todo[] = [];

  constructor(private appservice: AppService) {

  }
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.appservice.getTodo().subscribe(
      response => {
        this.todoList = response;
      }
    )
  }

  addTask() {
    this.appservice.addTask({ task: this.text, completed: false}).subscribe(
      response => {
        this.todoTask.reset();
        this.getList();
      }
    )
  }

  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
   this.appservice.updateTodo( { ...todo, completed: e.checked}).subscribe(
    response => console.log(response)
   );
  }


  // editTodo(e: unknown, todo: Todo) {
  //   console.log(e, todo);
  // }
  deleteTodo(e: unknown, id: Todo['id']) {
   this.appservice.deleteTodo(id).subscribe(
      response => this.getList()
   );
  }
  
}