import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import 'firebase/storage';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/observable';
import {User} from '../User';
import 'rxjs-compat/add/operator/map';
import { Player } from '../Player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  document;
  users: Observable<any>;
  username = localStorage.userName;

  constructor(private afs: AngularFirestore) {
    const document: AngularFirestoreDocument<User> = afs.doc('users/' + localStorage.userid);
    const document$: Observable<User> = document.valueChanges();
    this.document = document$;
  }

  temp = new Player();

  ngOnInit() {
    /*this.UsersCollection = this.afs.collection('users');
    this.user = this.UsersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.email = a.payload.doc.email;
        return data;
      });
    });*/
  }

}
