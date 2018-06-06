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
  usersCollection:        AngularFirestoreCollection<User>;
  users: Observable<User[]>;


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
    return this.oAuthLogin(provider);
  }

  logout() {
    this.signOut();
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        return this.updateUserData(credential.user);
      })
      .catch((error) => console.log(error));
  }

  signInWithGoogle() {
    this.googleLogin()
      .then(() => this.afterSignIn());
  }

  private updateUserData(user: User) {
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
      xp: user.xp || 0,
      eqArmor: user.eqArmor || '../../assets/armorGray.png',
      eqHelmet: user.eqHelmet || '../../assets/helmetGray.png',
      eqWeapon: user.eqWeapon || '../../assets/weaponGray.png',
      historyBench: user.historyBench || {},
      historyCurl: user.historyCurl || {},
      historySquat: user.historySquat || {},
      historyWeight: user.historyWeight || {},
      historyCalories: user.historyCalories || {},
      invArmor: user.invArmor || ['../../assets/armorGray.png'],
      invHelm: user.invHelm || ['../../assets/helmetGray.png'],
      invWeapon: user.invWeapon || ['../../assets/weaponGray.png'],
      lastBench: user.lastBench || 0,
      lastCurl: user.lastCurl || 0,
      lastSquat: user.lastSquat || 0,
      lastWeight: user.lastWeight || 0,
      lastCalories: user.lastCalories || 0,
      tokens: user.tokens || 5
    };
    localStorage.userid = user.uid;
    return userRef.set(data);
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
