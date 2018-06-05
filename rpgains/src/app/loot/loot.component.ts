import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {User} from '../User';

@Component({
  selector: 'app-loot',
  templateUrl: './loot.component.html',
  styleUrls: ['./loot.component.css']
})
export class LootComponent implements OnInit {
  tokens = 0;
  loot = 0;
  imgPath = '../../assets/treasureChest.png';
  // loottype = 0;
  // lootname = '';

  private userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  userManip;
  testinfo;

  constructor(private afs: AngularFirestore) {
    this.userDoc = afs.doc('users/' + localStorage.userid);
    this.user = this.userDoc.valueChanges();
    this.user.map(num => num).subscribe(x => this.userManip = x);
    this.user.map(num => num).subscribe(x => this.tokens = x.tokens);
  }

  lootRoll() {
    this.afs.collection('users').doc(localStorage.userid).set({'tokens': this.userManip.tokens - 1}, {merge: true});
    const lootType = this.randomInt(1, 3);
    if (lootType === 1) {
      this.rollHelm();
    } else if (lootType === 2) {
      this.rollArmor();
    } else if (lootType === 3) {
      this.rollWeapon();
    }
  }

  rollHelm() {
    const lootNum = this.randomInt(1, 100);
    if (lootNum > 50) {
      this.imgPath = '../../assets/helmetGreen.png';
      this.userManip.invHelm.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invHelm': this.userManip.invHelm}, {merge: true});
    } else if (lootNum <= 50 && lootNum > 20) {
      this.imgPath = '../../assets/helmetBlue.png';
      this.userManip.invHelm.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invHelm': this.userManip.invHelm}, {merge: true});
    } else if (lootNum <= 20 && lootNum > 5) {
      this.imgPath = '../../assets/helmetPurple.png';
      this.userManip.invHelm.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invHelm': this.userManip.invHelm}, {merge: true});
    } else if (lootNum <= 5) {
      this.imgPath = '../../assets/helmetYellow.png';
      this.userManip.invHelm.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invHelm': this.userManip.invHelm}, {merge: true});
    }
  }

  rollArmor() {
    const lootNum = this.randomInt(1, 100);
    if (lootNum > 50) {
      this.imgPath = '../../assets/armorGreen.png';
      this.userManip.invArmor.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invArmor': this.userManip.invArmor}, {merge: true});
    } else if (lootNum <= 50 && lootNum > 20) {
      this.imgPath = '../../assets/armorBlue.png';
      this.userManip.invArmor.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invArmor': this.userManip.invArmor}, {merge: true});
    } else if (lootNum <= 20 && lootNum > 5) {
      this.imgPath = '../../assets/armorPurple.png';
      this.userManip.invArmor.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invArmor': this.userManip.invArmor}, {merge: true});
    } else if (lootNum <= 5) {
      this.imgPath = '../../assets/armorYellow.png';
      this.userManip.invArmor.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invArmor': this.userManip.invArmor}, {merge: true});
    }
  }

  rollWeapon() {
    const lootNum = this.randomInt(1, 100);
    if (lootNum > 50) {
      this.imgPath = '../../assets/weaponGreen.png';
      this.userManip.invWeapon.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invWeapon': this.userManip.invWeapon}, {merge: true});
    } else if (lootNum <= 50 && lootNum > 20) {
      this.imgPath = '../../assets/weaponBlue.png';
      this.userManip.invWeapon.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invWeapon': this.userManip.invWeapon}, {merge: true});
    } else if (lootNum <= 20 && lootNum > 5) {
      this.imgPath = '../../assets/weaponPurple.png';
      this.userManip.invWeapon.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invWeapon': this.userManip.invWeapon}, {merge: true});
    } else if (lootNum <= 5) {
      this.imgPath = '../../assets/weaponYellow.png';
      this.userManip.invWeapon.push(this.imgPath);
      this.afs.collection('users').doc(localStorage.userid).set({'invWeapon': this.userManip.invWeapon}, {merge: true});
    }
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
  }

}
