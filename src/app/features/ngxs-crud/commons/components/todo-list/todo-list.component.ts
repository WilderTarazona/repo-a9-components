import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ITodo } from '../../../models/todo.interface';
import { SetSelectedTodo, DeleteTodo, GetTodos } from '../../../actions/todo.action';
import { Observable } from 'rxjs';
import { TodoState } from '../../../states/todo.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Select(TodoState.getTodoList) todos: Observable<ITodo[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodos());
  }

  editTodo(payload: ITodo) {
    this.store.dispatch(new SetSelectedTodo(payload));
  }

  deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }
}
