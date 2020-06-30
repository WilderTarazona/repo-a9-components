import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    ReactiveFormsModule 
  ]
})
export class ComponentsModule { }
