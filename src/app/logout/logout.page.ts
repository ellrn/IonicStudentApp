import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LogoutService } from './logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  imports:[IonicModule]
})
export class LogoutPage implements OnInit {

  constructor(private logoutService: LogoutService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.logoutService.login();
    this.router.navigateByUrl('mainmenu')
  }

}
