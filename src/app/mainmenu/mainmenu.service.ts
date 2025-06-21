import { Injectable } from '@angular/core';
import { Reminders, Schedules, Students } from './mainmenu.model';

@Injectable({
  providedIn: 'root'
})
export class MainmenuService {
  private _remi: Reminders[]=[
    new Reminders(
      's1',
      'Le Mans 24 Hour',
      'June 15-16, 2025',
    ),
    new Reminders(
      's2',
      'F1 Red Bull Ring Grand Prix',
      'June 29, 2025',
    ),
    new Reminders(
      's3',
      'Chevrolet Grand Prix',
      'July 11-13, 2025',
    )
  ];

  private _sched: Schedules[]=[
    new Schedules(
      'd1',
      'Vroom Vroom',
      'June 19, 2025'
    )
  ];

    private _stud: Students[]=[
    new Students(
      'p1',
      'Ellis Rian Nuevas',
      '3rd Year'
    )
  ];
  constructor() { }

  get Remind(){
    return [...this._remi]
  }
  get Schedu(){
    return [...this._sched]
  }
  get Stude(){
    return[...this._stud]
  }

  getMainMenu(remindId: String, scheduId: String, studentId:String){
    return this._remi.find(remind => remind.id === remindId);
    return this._sched.find(sched => sched.id === scheduId);
    return this._stud.find(student => student.id === studentId);
  }
}
