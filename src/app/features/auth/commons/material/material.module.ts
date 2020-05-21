import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

const MODULES = [
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModule { }
