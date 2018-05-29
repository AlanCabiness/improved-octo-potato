import {Component} from '@angular/core';

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
}
