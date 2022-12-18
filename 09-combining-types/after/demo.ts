type EmailUser = { id: string, email: string };
type PhoneUser = { id: string, phoneNumber: string };

function printUser(user: EmailUser & PhoneUser) {
}

// printUser({ id: '10', email: 'foo@gmail.com' });
printUser({ id: '15', email: 'foo@gmail.com', phoneNumber: '0521121234' });
// printUser({ id: '20', phoneNumber: '0521121234' });





type NumberUString = number|string;

function twice(x: NumberUString) {
  if (typeof x === 'number') {
    return x + x;
  } else {
    return x + x;
  }
}

const arr: Array<number|boolean> = [];
arr.push(10);
arr.push(false);

twice(10);
twice('hello');

const y = twice(10);
