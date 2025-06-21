import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  imports:[IonicModule,CommonModule,RouterModule]
})
export class TasksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
