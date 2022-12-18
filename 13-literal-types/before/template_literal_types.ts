type Value = 1|2|3|4|5|6|7|8|9|10|11|12|13;
type Suite = 'h'|'d'|'c'|'s';

const validCards = ['13h', '8d', '1c', '9c', '4s'] as const;
const invalidCards = ['999', '1g'] as const;
