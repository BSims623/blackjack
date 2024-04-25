const shuffleDeck = (deck) => {
    return deck.sort((a,b) => Math.random(b) - Math.random(a))
};

export const createDeck = (numberOfDecks) => {
    const values = ['ace','king','queen','jack','10','9','8','7','6','5','4','3','2'];
    const suits = ['spades','clubs','hearts','diamonds'];
    let deck = [];
 
    for (let i = numberOfDecks; i > 0; i--) {
        for (let value of values) {
            for (let suit of suits) {
                deck.push([value,suit])
            }
        }
    }
    return shuffleDeck(deck);
};