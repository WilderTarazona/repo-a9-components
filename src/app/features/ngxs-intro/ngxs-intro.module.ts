import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsIntroRoutingModule } from './ngxs-intro-routing.module';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

import { NgxsModule } from '@ngxs/store';
import { TutorialState } from './state/tutorial.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    ReadComponent,
    CreateComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    NgxsIntroRoutingModule,
    NgxsModule.forRoot([
      TutorialState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ]
})
export class NgxsIntroModule { }
