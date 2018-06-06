import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import 'firebase/storage';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/observable';
import {User} from '../User';
import 'rxjs-compat/add/operator/map';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  document;
  users: Observable<any>;
  userName = localStorage.userName;
  remPercent;
  totalXP;
  level;
  userManip;

  constructor(private afs: AngularFirestore) {
    const document: AngularFirestoreDocument<User> = afs.doc('users/' + localStorage.userid);
    const document$: Observable<User> = document.valueChanges();
    this.document = document$;
    this.document.map(num => num).subscribe(x => this.totalXP = x.xp);
    // this.remPercent = this.totalXP % 5 * 10 + '%';
  }

  getPercentage() {
    this.levelCalc();
    return (this.totalXP % 5 * 20 + '%');
  }

  levelCalc() {
    this.level = Math.floor(this.totalXP / 5) + 1;
  }

  ngOnInit() {
  }

}
