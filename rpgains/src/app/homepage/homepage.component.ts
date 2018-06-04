import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import {User} from '../User';



import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

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

  }
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
      .catch((error) => console.log(error) );
  }
  signInWithGoogle() {
    this.googleLogin()
      .then(() => this.afterSignIn());
  }
  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ',
      xp: user.xp || null
    };
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
