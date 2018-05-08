import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loot',
  templateUrl: './loot.component.html',
  styleUrls: ['./loot.component.css']
})
export class LootComponent implements OnInit {

  /**
   * generate a random integer between min and max
   * @param {Number} min
   * @param {Number} max
   * @return {Number} random generated integer
   */
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor() { }

  ngOnInit() {
  }

}
