import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Students } from '../mainmenu/mainmenu.model';
import { MainmenuService } from '../mainmenu/mainmenu.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports:[IonicModule]
})
export class ProfilePage implements OnInit {

  loadedStudents!:Students[]

  constructor(private mainmenuService:MainmenuService) { }

  ngOnInit() {
    this.loadedStudents = this.mainmenuService.Stude;
  }

}
