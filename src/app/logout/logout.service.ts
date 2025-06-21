import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
private _isAuthenticated = false;

  get userIsAuthenticated(){
    return this._isAuthenticated;
  }
  constructor() { }

  login(){
    this._isAuthenticated = true;
  }

  logout(){
    this._isAuthenticated = false;
  }
}
