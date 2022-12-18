type Value = 1|2|3|4|5|6|7|8|9|10|11|12|13;
type Suit = 'h'|'d'|'c'|'s';
type ValidCard = `${Value}${Suit}`;
type UppercaseValidCard = Uppercase<ValidCard>;
type LowercaseValidCard = Lowercase<ValidCard>;


const validCards = ['13h', '8d', '1c', '9c', '4s'] as const;
const invalidCards = ['999', '1g'] as const;

function getCard(card: UppercaseValidCard|LowercaseValidCard) {}


getCard('13h');
getCard('1c');
getCard('1C');


getCard('999');
getCard('123c');
