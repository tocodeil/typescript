type Event = 
  | { type: 'login', username: string }
  | { type: 'message', from: string, text: string }

handle({ type: 'login', username: 'badguy' });
handle({ type: 'message', from: 'mom', text: 'good morning' });
handle({ type: 'message', from: 'tracy', text: 'you go girl' });

function handle(ev: Event) {
  
}



export {};