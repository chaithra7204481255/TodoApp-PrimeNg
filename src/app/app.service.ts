import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTodo() {
    return this.http.get<Todo[]>(`${this.baseUrl}/todoList`);
  }

  updateTodo(postData: Todo) {
    return this.http.patch(`${this.baseUrl}/todoList/${postData.id}`, postData);
  }

  deleteTodo(id: Todo['id']) {
    return this.http.delete(`${this.baseUrl}/todoList/${id}`);
  }

  addTask(postData: Todo) {
    return this.http.post(`${this.baseUrl}/todoList`, postData);
  }

}
