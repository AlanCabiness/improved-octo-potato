import { Helmet } from './Helmet';
import { Armor } from './Armor';
import { Weapon } from './Weapon';

export class Player {
  id: number;
  name: string;
  xp: number;
  helmet: Helmet[];
  armor: Armor[];
  weapon: Weapon[];

  constructor() {
    this.id = 1;
    this.name = 'Temp';
    this.xp = 200;
    this.helmet = [];
    this.armor = [];
    this.weapon = [];
  }

  clear () {
    this.helmet = undefined;
    this.armor = undefined;
    this.weapon = undefined;
}

}
