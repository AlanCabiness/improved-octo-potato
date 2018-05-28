import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestoreModule
} from 'angularfire2/firestore';

interface User {
  email: string;
  eqArmor: string;
  eqHelmet: string;
  eqWeapon: string;
  historyBench: {};
  historyCurl: {};
  historySquat: {};
  historyWeight: {};
  invArmor: [string];
  invHelm: [string];
  invWeapon: [string];
  lastBench: number;
  lastCurl: number;
  lastSquat: number;
  lastWeight: number;
  name: string;
  password: string;
  xp: string;
}

import {Track} from '../track';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  usersCol: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  // public users: Observable<any>;

  constructor(private afs: AngularFirestore) {
    // this.users = afs.collection('users', ref => ref.where('email', '==', 'acab1996@gmail.com'));
  }

  model = new Track(200, 2000, 150, 100, 125);

  submitted = false;

  ngOnInit() {
    /*this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();*/
  }

}
