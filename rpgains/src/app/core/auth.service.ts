import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {NotifyService} from './notify.service';
import {Observable} from 'rxjs/observable';
import {User} from '../User';
import 'rxjs/add/operator/switchMap';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {auth} from 'firebase/app';

/*interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;

}*/

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    // Getting auth data from firestore user info
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>('users/${user.uid}').valueChanges();
        } else {
          return of(null);
        }
      }));
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  /*
  private handleError(error: Error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }
  */

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ',
      xp: user.xp || 0,
      eqArmor: user.eqArmor || '',
      eqHelmet: user.eqHelmet || '',
      eqWeapon: user.eqWeapon || '',
      historyBench: user.historyBench || {},
      historyCurl: user.historyCurl || {},
      historySquat: user.historySquat || {},
      historyWeight: user.historyWeight || {},
      invArmor: user.invArmor || [''],
      invHelm: user.invHelm || [''],
      invWeapon: user.invWeapon || [''],
      lastBench: user.lastBench || 0,
      lastCurl: user.lastCurl || 0,
      lastSquat: user.lastSquat || 0,
      lastWeight: user.lastWeight || 0,
      tokens: user.tokens || 0
    };
    localStorage.userid = user.uid;
    return userRef.set(data, {merge: true});
  }
}



