/*export class User {
  constructor(
    public  uid: string,
    public eqArmor: string,
    public eqHelmet: string,
    public eqWeapon: string,
    public historyBench: {},
    public historyCurl: {},
    public historySquat: {},
    public historyWeight: {},
    public invArmor: [string],
    public invHelm: [string],
    public invWeapon: [string],
    public lastBench: number,
    public lastCurl?: number,
    public lastSquat?: number,
    public lastWeight?: number,
    /!*public name: string,
    public password: string,*!/
    public xp?: number,
    public email?: string | null,
    public photoURL?: string,
    public displayName?: string,
  ) {
  }
}*/

/*public name: string,
public password: string,*/
export interface User {
  uid: string;
  eqArmor: string;
  eqHelmet: string;
  eqWeapon: string;
  historyBench: {};
  historyCurl: {};
  historySquat: {};
  historyWeight: {};
  historyCalories: {};
  invArmor: [string];
  invHelm: [string];
  invWeapon: [string];
  lastBench: number;
  lastCurl: number;
  lastSquat: number;
  lastWeight: number;
  lastCalories: number;
  xp: number;
  email: string | null;
  photoURL: string;
  displayName: string;
  tokens: number;
}

