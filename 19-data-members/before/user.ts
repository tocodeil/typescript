class User {
  uid: number;
  userName: string;
  
  constructor(uid: number, userName: string) { 
    this.uid = uid;
    this.userName = userName;
  }
}

const u = new User(10, 'ynon');
console.log(u.uid);
