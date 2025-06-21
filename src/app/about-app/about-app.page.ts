import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.page.html',
  styleUrls: ['./about-app.page.scss'],
  imports:[IonicModule]
})
export class AboutAppPage implements OnInit {

  constructor(private router:Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

    OnBookPlace(){
    //this.router.navigateByUrl('places/tabs/discover')
    this.navCtrl.navigateBack('places/tabs/discover')

    //this.navCtrl.pop()
  }
}
