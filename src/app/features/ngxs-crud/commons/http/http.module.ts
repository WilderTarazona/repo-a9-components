import { NgModule } from '@angular/core';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [ HttpClientModule ],
  providers: [ TodoService ]
})
export class HttpModule { }
