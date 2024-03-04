const initialState = {
    deck: ['Cat', 'Cat', 'Defuse', 'Exploding Kitten', 'Shuffle'],
    username: "dlsfkjslkfjsl",
    isStarted: false,
    defuseCard: 0
}

function shuffleArray(array) {

    const shuffledArray = [...array];


    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap the elements at indices i and j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}


const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHUFFLE":
            // Shuffle the deck array
            const shuffledDeck = shuffleArray(state.deck);
            return { ...state, deck: shuffledDeck };

        case 'START_GAME':
            return {
                ...state,
                deck: ['Cat', 'Cat', 'Defuse', 'Exploding Kitten', 'Shuffle'],
                isStarted: true,
            };

        case 'ADD_DEFUSE_CARD':
            return { ...state, defuseCard: state.defuseCard + 1 }

        case 'USE_DEFUSE_CARD':

            if (state.defuseCard > 0) {

                return { ...state, defuseCard: state.defuseCard - 1 };
            }

            return state;



            case 'REMOVE_CAT_CARD':
                // Find the index of the first "Cat" card in the deck array
                const catIndex = state.deck.indexOf('Cat');
                
                // Create a new deck array without the first "Cat" card
                const updatedDeck = [
                    ...state.deck.slice(0, catIndex),
                    ...state.deck.slice(catIndex + 1)
                ];
    
                // Check if there are no more "Cat" cards remaining
                const isCatRemaining = updatedDeck.includes('Cat');
    
                // If no "Cat" cards are remaining, declare the game as won
                if (!isCatRemaining) {
                    alert('You won!');
                    // Handle any additional game-winning logic
                }
    
                // Return the new state object with the updated deck array
                return { ...state, deck: updatedDeck };

        default:
            return state;
    }
};
            

export default stateReducer