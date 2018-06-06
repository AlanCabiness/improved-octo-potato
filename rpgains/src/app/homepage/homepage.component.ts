import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {User} from '../User';


import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

/*interface User {
  uid: string;
  email: string | null;
  photoURL: string;
  displayName: string;
}*/

//
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {

  user: Observable<User | null>;
  userChecker;
  beforeLog;
  userInvitesCollection: AngularFirestoreCollection<User>;
  value: Observable<User[]>;
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  today;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.user = this.afAuth.authState.switchMap((user) => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });

    this.userInvitesCollection = this.afs.collection('users', (ref) => ref.orderBy('uid'));
  }

  /*checkUserExist(user: User){
    this.usersCollection = this.afs.collection('users', (ref) => ref.where('uid', '==', user.uid));
    this.users = this.usersCollection.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc().data() as User;
        const uid = action.payload.doc.uid;
        return{
          uid: action.payload.doc.uid,
        }
      })
    })
  }*/

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.newUser(provider);
  }

  egoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.existingUser(provider);
  }

  logout() {
    this.signOut();
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }


  signInWithGoogle() {
    this.googleLogin()
      .then(() => this.afterSignIn());
  }

  esignInWithGoogle() {
    this.egoogleLogin()
      .then(() => this.afterSignIn());
  }


  private newUser(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        return this.updateUserData(credential.user);
      })
      .catch((error) => console.log(error));
  }

  private existingUser(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        return this.eupdateUserData(credential.user);
      })
      .catch((error) => console.log(error));
  }

  private eupdateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    /*this.userChecker = this.afs.doc('users/' + user.uid).valueChanges();
    this.userChecker.map(num => num).subscribe(x => this.beforeLog = x);
    if (this.userChecker) {
      console.log(this.afs.doc('users/' + user.uid));
    }*/
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ',
      xp: user.xp || user.xp,
      eqArmor: user.eqArmor || user.eqArmor,
      eqHelmet: user.eqHelmet || user.eqHelmet,
      eqWeapon: user.eqWeapon || user.eqWeapon,
      historyBench: user.historyBench || user.historyBench,
      historyCurl: user.historyCurl || user.historyCurl,
      historySquat: user.historySquat || user.historySquat,
      historyWeight: user.historyWeight || user.historyWeight,
      historyCalories: user.historyCalories || user.historyCalories,
      invArmor: user.invArmor || user.invArmor,
      invHelm: user.invHelm || user.invHelm,
      invWeapon: user.invWeapon || user.invWeapon,
      lastBench: user.lastBench || user.lastBench,
      lastCurl: user.lastCurl || user.lastCurl,
      lastSquat: user.lastSquat || user.lastSquat,
      lastWeight: user.lastWeight || user.lastWeight,
      lastCalories: user.lastCalories || user.lastCalories,
      tokens: user.tokens || user.tokens
    };
    localStorage.userid = user.uid;
    return userRef.set(data);
  }

  private updateUserData(user) {
    const d = new Date();
    this.today = ((d.getMonth() + 1) + '/') + d.getDate() + '/' + d.getFullYear();
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ',
      xp: user.xp || 0,
      eqArmor: user.eqArmor || '../../assets/armorGray.png',
      eqHelmet: user.eqHelmet || '../../assets/helmetGray.png',
      eqWeapon: user.eqWeapon || '../../assets/weaponGray.png',
      historyBench: {startDate: '0'},
      historyCurl: {startDate: '0'},
      historySquat: {startDate: '0'},
      historyWeight: {startDate: '9999'},
      historyCalories: {startDate: '2000'},
      invArmor: user.invArmor || ['../../assets/armorGray.png'],
      invHelm: user.invHelm || ['../../assets/helmetGray.png'],
      invWeapon: user.invWeapon || ['../../assets/weaponGray.png'],
      lastBench: user.lastBench || 0,
      lastCurl: user.lastCurl || 0,
      lastSquat: user.lastSquat || 0,
      lastWeight: user.lastWeight || 9999,
      lastCalories: user.lastCalories || 2000,
      tokens: user.tokens || 5
    };
    localStorage.userid = user.uid;
    return userRef.set(data, {merge: true});
  }


  private afterSignIn() {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.router.navigate(['/']);
  }

  /*
  logout(): void {
    localStorage.removeItem('session');
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('userName');
  }
  */


  ngOnInit() {
    /*
      if (localStorage.session == 'logged') {
        document.getElementById('logged').innerHTML = "<button (click)='logout()'>Log out</button>"
      }
      */
  }

}
