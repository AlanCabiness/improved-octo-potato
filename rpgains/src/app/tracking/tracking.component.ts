import {Component, OnInit} from '@angular/core';

import {Track} from "../track";

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

  /*MongoClient = require('mongodb').MongoClient;
  url = 'mongodb://207.229.181.23:27017/rpgains';

  onSubmit() {
    this.MongoClient.connect(this.url, function (err, db) {
      var cursor = db.collection('users').find();

      cursor.each(function (err, doc) {
        console.log(doc);
      });
    });
  }*/

  ngOnInit() {
  }

}
