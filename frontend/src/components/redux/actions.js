export const shuffleDeck = () => (
    { type : "SHUFFLE" }
)

export const startGame =() =>(
    {type : "START_GAME"}
)

export const  removeCatCard = () => (
    {type : "REMOVE_CAT_CARD"}
)

export const defuse = () => (
    { type : "ADD_DEFUSE_CARD" }
)
   
export const DefuseCard = () => (
    { type : "REMOVE_DEFUSE_CARD" }
)

// actions.js

// Action type constant
export const DRAW_CARD = 'DRAW_CARD';

// Action creator function for drawing a card
export const drawCard = (index) => ({
  type: DRAW_CARD,
  payload: { index }, // Optionally, you can include additional data such as the index of the card being drawn
});
