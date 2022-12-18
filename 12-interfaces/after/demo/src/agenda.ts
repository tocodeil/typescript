// Interfaces




// [ ] What Are Interfaces


// [ ] A First Interface
{
type TUser = {
  id: number;
  name: string;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}

interface IUser {
  id: number;
  name: string;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}
function demo(user: IUser) {}

}

// [ ] Optional Properties
{
type TUser = {
  id: number;
  name: string;
  age?: number;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}

interface IUser {
  id: number;
  age?: number;
  name: string;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}

function demo(user: IUser) {
  console.log((user.age || 0) + 10);
}


}

// [ ] Readonly Properties
{

type TUser = {
  readonly id: number;
  name: string;
  age?: number;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}

interface IUser {
  readonly id: number;
  age?: number;
  name: string;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}


function demo(user: IUser) {  
  // @ts-ignore
  user.id = 10;
}

}

// [ ] Function Signatures ("call" the interface)
{

type TUser = {
  (): number;
  readonly id: number;
  name: string;
  age?: number;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}

interface IUser {
  (): number;
  readonly id: number;
  age?: number;
  name: string;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}


function demo(user: IUser) {  
  console.log(user());
}


}

// [ ] Extending Interfaces
{
type TUser = {
  (): number;
  readonly id: number;
  name: string;
  age?: number;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}

type TEmailUser = TUser & { email: string };

interface IUser {
  (): number;
  readonly id: number;
  age?: number;
  name: string;
  sayHi: (name: string) => void;
  isValid: () => boolean;
}

interface IEmailUser extends IUser {
  email: string;
}

interface MyEmailUser extends TUser {}

}


// [ ] P.S. Readonly Caveats
{
interface IUser {
  (): number;
  readonly id: number;
  age?: number;
  name: string;
  sayHi: (name: string) => void;
  isValid: () => boolean;
  readonly likes: Readonly<Array<string>>;
}

function showUser(user: IUser) {
  user.likes.push('a');
}


}








