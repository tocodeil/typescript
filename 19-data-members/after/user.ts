class User {
  public readonly uid: number;
  private _userName: string;
  public updateCount: number;

  constructor(uid: number, userName: string) { 
    this.uid = uid;
    this._userName = userName;
    this.updateCount = 0;
  }

  set userName(newValue: string) {
    this._userName = newValue;
    this.updateCount += 1;
  }

  get userName() {
    return this._userName;
  }
}

const u = new User(10, 'ynon');

console.log(u.updateCount);
u.userName = 'foo';
console.log(u.updateCount);











