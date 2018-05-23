import {Component, OnInit} from '@angular/core';

import {Track} from '../track';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor() {
  }

  model = new Track(200, 2000, 150, 100, 125);

  submitted = false;

  ngOnInit() {
  }

}
