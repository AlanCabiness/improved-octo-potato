import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/observable';
import {User} from '../User';
import {MatTabsModule} from '@angular/material';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  userName = localStorage.userName;
  private userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;


  constructor(private afs: AngularFirestore) {
    this.userDoc = afs.doc('users/' + localStorage.userid);
    this.user = this.userDoc.valueChanges();
  }

  ngOnInit() {
  }

  equip(path: string, type: string) {
    if (type === 'helmet') {
      this.afs.collection('users').doc(localStorage.userid).set({'eqHelmet': path}, {merge: true});
    } else if (type === 'armor') {
      this.afs.collection('users').doc(localStorage.userid).set({'eqArmor': path}, {merge: true});
    } else if (type === 'weapon') {
      this.afs.collection('users').doc(localStorage.userid).set({'eqWeapon': path}, {merge: true});
    }
  }
}
