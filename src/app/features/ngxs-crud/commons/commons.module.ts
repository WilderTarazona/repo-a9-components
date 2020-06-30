import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';

const MODULES = [
  ComponentsModule,
  HttpModule
]

@NgModule({
  imports: [ ...MODULES ],
  exports: [ ...MODULES ]
})
export class NgxsCrudCommonsModule { }
