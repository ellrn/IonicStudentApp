import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradesPage } from './grades.page';

const routes: Routes = [
  {
    path: '',
    component: GradesPage
  },  {
    path: 'new-subject',
    loadChildren: () => import('./new-subject/new-subject.module').then( m => m.NewSubjectPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradesPageRoutingModule {}
