import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { logoutGuard } from './logout/logout.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'mainmenu',
    pathMatch: 'full'
  },
  {
    path: 'mainmenu',
    loadChildren: () => import('./mainmenu/mainmenu.module').then( m => m.MainmenuPageModule),
     canMatch:[logoutGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
     canMatch:[logoutGuard]
  },
  {
    path: 'about-app',
    loadChildren: () => import('./about-app/about-app.module').then( m => m.AboutAppPageModule),
     canMatch:[logoutGuard]
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
