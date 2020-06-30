import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsCrudRoutingModule } from './ngxs-crud-routing.module';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ExampleComponent } from './pages/example/example.component';
import { NgxsCrudCommonsModule } from './commons/commons.module';
import { TodoState } from './states/todo.state';


@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    NgxsCrudRoutingModule,
    NgxsCrudCommonsModule,
    NgxsModule.forRoot([
      TodoState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ]
})
export class NgxsCrudModule { }
