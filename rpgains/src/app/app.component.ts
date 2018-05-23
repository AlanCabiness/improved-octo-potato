import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

class Track {
  constructor(
    public weight: number,
    public calories: number,
    public bench: number,
    public curl: number,
    public squat: number
  ) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  /*public Users: FirebaseListObservable<Track[]>;

  constructor(db: AngularFireDatabase) {
    this.Users = db.list('/Users');
  }*/

}
