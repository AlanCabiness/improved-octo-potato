import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {

  }

  logout(): void {
    localStorage.removeItem('session');
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('userName');
  }



  ngOnInit() {
    if (localStorage.session == 'logged') {
      document.getElementById('logged').innerHTML = "<button (click)='logout()'>Log out</button>"
    }
  }

}
