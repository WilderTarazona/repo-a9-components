import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../../models/todo.interface';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  addTodo(payload: ITodo) {
    return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', payload);
  }

  updateTodo(payload: ITodo, id: number) {
    return this.http.put<ITodo>('https://jsonplaceholder.typicode.com/todos/' + id, payload);
  }

  deleteTodo(id: number) {
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/' + id);
  }
}
