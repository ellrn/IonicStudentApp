import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmenuPage } from './mainmenu.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainmenuPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'grades',
        children: [
          {
            path: '',
            loadChildren: () => import('./grades/grades.module').then(m => m.GradesPageModule)
          }
        ]
      },
      {
        path: 'tasks',
        children: [
          {
            path: '',
            loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/mainmenu/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:  '/mainmenu/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainmenuPageRoutingModule { }
