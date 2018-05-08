import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  logout() : void{
    localStorage.removeItem('session');
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('userName');
  }

  ngOnInit() {
  }

}
