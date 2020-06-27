import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./logged/logged.module').then((m) => m.LoggedModule),
  },

  {
    path: 'test',
    loadChildren: './logged/logged.module#LoggedModule',
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
