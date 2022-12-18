export {};

// 1. What Is Extract
type Stuff = 10|20|30|"a"|"b"|true
type Numbers = Extract<Stuff, number>


// Numbers is the type: 10|20|30

























// 2. Example - Events
type Event = 
    | { type: 'login', username: string }
    | { type: 'newMessage', from: string, text: string }
    | { type: 'logout' }
    | { type: 'newPublicNotification', channel: string, text: string, from: string }

const pendingEvents: Array<Event> = [
    { type: 'login', username: 'ynonp' },
    { type: 'newMessage', from: 'mst', text: 'yo dog'},
    { type: 'newMessage', from: 'mst', text: 'Glad to see you'}
];

const messages = pendingEvents.filter(e => e.type === 'newMessage');

// let's fix type of messages

