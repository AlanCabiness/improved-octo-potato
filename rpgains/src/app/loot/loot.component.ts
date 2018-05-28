import { Component, OnInit } from '@angular/core';
import { Helmet } from '../Helmet';
import { Armor } from '../Armor';
import { Weapon } from '../Weapon';
import { Token } from '../Token';
import { HelmetList, ArmorList, WeaponList } from '../LootTable';

@Component({
  selector: 'app-loot',
  templateUrl: './loot.component.html',
  styleUrls: ['./loot.component.css']
})
export class LootComponent implements OnInit {
  helmet = new Helmet();
  armor = new Armor();
  weapon = new Weapon();
  tokens: Token = {count: 5};
  clickMessage = '';
  loot = 0;
  loottype = 0;
  lootname = '';

  /**
   * generate a random integer between min and max
   * @param {Number} min
   * @param {Number} max
   * @return {Number} random generated integer
   */
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  lootrollarmor() {
    this.loot = this.randomInt(1, 100);
    if (this.loot <= 5) {
      for (let i = 0; i < ArmorList.length; i++) {
        if (ArmorList[i].id === 8) {
          this.armor = ArmorList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.armor;
        }
      }
    }
    if  (this.loot <= 20 && this.loot > 5) {
      for (let i = 0; i <= ArmorList.length; i++) {
        if (ArmorList[i].id === 7) {
          this.armor = ArmorList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.armor;
        }
      }
    }
    if (this.loot <= 50 && this.loot > 20) {
      for (let i = 0; i <= ArmorList.length; i++) {
        if (ArmorList[i].id === 6) {
          this.armor = ArmorList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.armor;
        }
      }
    }
    if (this.loot <= 100 && this.loot > 50) {
      for (let i = 0; i <= ArmorList.length; i++) {
        if (ArmorList[i].id === 5) {
          this.armor = ArmorList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.armor;
        }
      }
    }
  }

  lootrollhelmet() {
    this.loot = this.randomInt(1, 100);
    if (this.loot <= 5) {
      for (let i = 0; i < HelmetList.length; i++) {
        if (HelmetList[i].id === 4) {
          this.helmet = HelmetList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.helmet;
        }
      }
    }
    if (this.loot <= 20 && this.loot > 5) {
      for (let i = 0; i <= HelmetList.length; i++) {
        if (HelmetList[i].id === 3) {
          this.helmet = HelmetList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.helmet;
        }
      }
    }
    if (this.loot <= 50 && this.loot > 20) {
      for (let i = 0; i <= HelmetList.length; i++) {
        if (HelmetList[i].id === 2) {
          this.helmet = HelmetList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.helmet;
        }
      }
    }
    if (this.loot <= 100 && this.loot > 50) {
      for (let i = 0; i <= HelmetList.length; i++) {
        if (HelmetList[i].id === 1) {
          this.helmet = HelmetList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.helmet;
        }
      }
    }
  }
  lootrollweapon() {
    this.loot = this.randomInt(1, 100);
    if (this.loot <= 5) {
      for (let i = 0; i < WeaponList.length; i++) {
        if (WeaponList[i].id === 12) {
          this.weapon = WeaponList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.weapon;
        }
      }
    }
    if (this.loot <= 20 && this.loot > 5) {
      for (let i = 0; i <= WeaponList.length; i++) {
        if (WeaponList[i].id === 11) {
          this.weapon = WeaponList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.weapon;
        }
      }
    }
    if (this.loot <= 50 && this.loot > 20) {
      for (let i = 0; i <= WeaponList.length; i++) {
        if (WeaponList[i].id === 10) {
          this.weapon = WeaponList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.weapon;
        }
      }
    }
    if (this.loot <= 100 && this.loot > 50) {
      for (let i = 0; i <= WeaponList.length; i++) {
        if (WeaponList[i].id === 9) {
          this.weapon = WeaponList[i];
          this.tokens.count = this.tokens.count - 1;
          return this.weapon;
        }
      }
    }
  }


  onClickMe() {
    this.clickMessage = 'Here\'s your loot';
    this.loottype = this.randomInt(1, 3);
    if (this.loottype === 1) {
      this.lootname = this.lootrollhelmet().name;
    }
    if (this.loottype === 2) {
      this.lootname = this.lootrollarmor().name;
    }
    if (this.loottype === 3) {
      this.lootname = this.lootrollweapon().name;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
