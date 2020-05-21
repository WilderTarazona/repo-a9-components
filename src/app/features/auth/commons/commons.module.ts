import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

const MODULES = [
  MaterialModule
];

@NgModule({
  declarations: [],
  imports: [ ...MODULES],
  exports: [ ...MODULES]
})
export class AuthCommonsModule { }
