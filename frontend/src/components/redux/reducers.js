import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
    deck: ['Cat', 'Cat','Cat','Cat', 'Cat','Defuse', 'Defuse', 'Exploding Kitten','Exploding Kitten', 'Shuffle'],
    username: "Yash Gole",
    defuseCard: 0,
}



function shuffleArray(array) {

    const shuffledArray = [...array];


    for (let i = shuffledArray.length - 1; i > 0; i--) {
        
        const j = Math.floor(Math.random() * (i + 1));

        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

const AddWins = async()=>{
    try{
        const gameswon =  JSON.parse(localStorage.getItem("game-data"))
        console.log(gameswon.won)
      const response = await axios.post('http://localhost:8000/api/v1/game/add-win',{win:gameswon.won,id:gameswon.id})
      if(response.data.success){
        // setGamesWon(response.data.gameswon)
        toast.success("win added")
      }
    }catch(error){
      toast.error("error")
    }
  }

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHUFFLE":
            
            const shuffledDeck = shuffleArray(state.deck);
            return { ...state, deck: shuffledDeck };

        case 'START_GAME':
            const shuffleDeck = shuffleArray(['Cat', 'Cat', 'Cat', 'Cat', 'Cat','Defuse', 'Defuse', 'Exploding Kitten','Exploding Kitten', 'Shuffle']);
            return {
                ...state,
                deck: shuffleDeck,
                isStarted: true,
                defuseCard: 0
            };

        case 'ADD_DEFUSE_CARD':
            
            const defuseIndex = state.deck.indexOf('Defuse');
            if (defuseIndex !== -1) {
                const updatedDeck = [...state.deck.slice(0, defuseIndex), ...state.deck.slice(defuseIndex + 1)];
                return {
                    ...state,
                    defuseCard: state.defuseCard + 1, 
                    deck: updatedDeck 
                };
            }
            return state;

        case 'REMOVE_DEFUSE_CARD':
            return { ...state, defuseCard: state.defuseCard - 1 }

        case 'USE_DEFUSE_CARD':

            if (state.defuseCard > 0) {

                return { ...state, defuseCard: state.defuseCard - 1 };
            }

            return state;

        case 'REMOVE_CAT_CARD':
            const catIndex = state.deck.indexOf('Cat');
            const updatedDeck = [
                ...state.deck.slice(0, catIndex),
                ...state.deck.slice(catIndex + 1)
            ];
            const isCatRemaining = updatedDeck.includes('Cat');
            if (!isCatRemaining) {
                AddWins()
                alert('You won!');

            }

            return { ...state, deck: updatedDeck };

        default:
            return state;
    }
};


export default stateReducer