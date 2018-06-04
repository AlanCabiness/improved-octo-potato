import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

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
  xp: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) {
  }




 /* addUser() {
    const md5 = require('md5');
    let size;
    const all = this.afs.collection('users', ref => ref.where('email', '==', this.email));
    const query = all.get().then(res => size = res.size);
    // this.users = afs.collection('users', ref => ref.where('name', '==', 'Alan Cabiness')).valueChanges();
    if (size > 0) {
      alert('Sorry, account already exists with that email.');
    } else {
      if (this.password === this.verifypass) {
        this.afs.collection('users').add({
          'name': this.name,
          'email': this.email,
          'password': md5(this.password),
          'eqArmor': '',
          'eqHelmet': '',
          'eqWeapon': '',
          'historyBench': {},
          'historyCurl': {},
          'historySquat': {},
          'historyWeight': {},
          'invArmor': [],
          'invHelm': [],
          'invWeapon': [],
          'lastBench': '',
          'lastCurl': '',
          'lastDate': '',
          'lastSquat': '',
          'lastWeight': '',
          'xp': 0
        });
        // document.getElementById('createForm').reset();
        alert('account created successfully');
      } else {
        alert('passwords do not match, try again');
      }
    }


  }*/

  ngOnInit() {
  }

}
