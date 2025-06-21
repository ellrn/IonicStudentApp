import { Component } from '@angular/core';
import { LogoutService } from './logout/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private logoutService:LogoutService, private router: Router) {}

  onLogout(){
    this.logoutService.logout();
    this.router.navigateByUrl('/logout')
  }
}
