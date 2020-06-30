import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../../../states/todo.state';
import { Observable, Subscription } from 'rxjs';
import { ITodo } from '../../../models/todo.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SetSelectedTodo, UpdateTodo, AddTodo } from '../../../actions/todo.action';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Select(TodoState.getSelectedTodo) selectedTodo: Observable<ITodo>;
  todoForm: FormGroup;
  editTodo = false;
  private formSubscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.todoForm = this.fb.group({
      id: [''],
      userId: ['', Validators.required],
      title: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.editTodo) {
      this.formSubscription.add(
        this.store.dispatch(new UpdateTodo(this.todoForm.value, this.todoForm.value.id))
          .subscribe(() => {
            this.clearForm();
          })
      );
    } else {
      this.formSubscription.add(
        this.formSubscription = this.store.dispatch(new AddTodo(this.todoForm.value))
          .subscribe(() => {
            this.clearForm();
          })
      );
    }
  }

  clearForm() {
    this.todoForm.reset();
    this.store.dispatch(new SetSelectedTodo(null));
  }

}
