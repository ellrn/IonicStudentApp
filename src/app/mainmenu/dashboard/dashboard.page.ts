import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Reminders, Schedules } from '../mainmenu.model';
import { MainmenuService } from '../mainmenu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports:[IonicModule, CommonModule, RouterModule]
})
export class DashboardPage implements OnInit {

  loadedReminders!:Reminders[]
  loadedSchedules!:Schedules[]

  constructor(private mainmenuService:MainmenuService) { }

  ngOnInit() {
    this.loadedReminders = this.mainmenuService.Remind;
    this.loadedSchedules = this.mainmenuService.Schedu;
  }

}
