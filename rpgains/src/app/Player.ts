import { Helmet } from './Helmet';
import { Armor } from './Armor';
import { Weapon } from './Weapon';

export class Player {
  id: number;
  name: string;
  helmet: Helmet[];
  armor: Armor[];
  weapon: Weapon[];
}
