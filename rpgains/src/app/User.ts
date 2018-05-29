export class User {
  constructor(public email: string,
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
              public lastCurl: number,
              public lastSquat: number,
              public lastWeight: number,
              public name: string,
              public password: string,
              public xp: number,
              public id?: string) {
  }
}
