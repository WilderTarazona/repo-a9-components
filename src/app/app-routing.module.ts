import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'ngxs-intro',
    loadChildren: () => import('./features/ngxs-intro/ngxs-intro.module').then(m => m.NgxsIntroModule)
  },
  {
    path: 'ngxs-crud',
    loadChildren: () => import('./features/ngxs-crud/ngxs-crud.module').then(m => m.NgxsCrudModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
