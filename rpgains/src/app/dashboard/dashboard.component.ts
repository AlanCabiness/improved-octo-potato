import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  temp = new Player();

  ngOnInit() {
  }

}
