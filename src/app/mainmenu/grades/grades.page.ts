import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
  imports:[IonicModule,CommonModule, RouterModule]
})
export class GradesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
