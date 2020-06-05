import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsCrudRoutingModule } from './ngxs-crud-routing.module';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    NgxsCrudRoutingModule
  ]
})
export class NgxsCrudModule { }
