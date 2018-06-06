import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import 'firebase/storage';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/observable';
import {User} from '../User';
import 'rxjs-compat/add/operator/map';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";

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
  user;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth,
              private router: Router) {
    const document: AngularFirestoreDocument<User> = afs.doc('users/' + localStorage.userid);
    const document$: Observable<User> = document.valueChanges();
    this.document = document$;
    this.document.map(num => num).subscribe(x => this.totalXP = x.xp);
    // this.remPercent = this.totalXP % 5 * 10 + '%';
    this.user = this.afAuth.authState.switchMap((user) => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  getPercentage() {
    this.levelCalc();
    return (this.totalXP % 5 * 20 + '%');
  }

  logout() {
    this.signOut();
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
    localStorage.removeItem('userid');
  }

  levelCalc() {
    this.level = Math.floor(this.totalXP / 5) + 1;
  }

  ngOnInit() {
  }

}
