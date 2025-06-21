import { CanMatchFn } from '@angular/router';
import { LogoutService } from './logout.service';
import { inject} from '@angular/core';
import { Router } from '@angular/router';

export const logoutGuard: CanMatchFn = (route, segments) => {
  const logoutService = inject(LogoutService); // get if the user is logged in service
  const router = inject(Router) //get GPS to redirect

  if(logoutService.userIsAuthenticated){
    return true // Welcome to page
  }
  else{
    router.navigateByUrl('logout') //back to login page
    return false
  }

};
