import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';

function shuffleArray(array) {
  // This function shuffles the array using Fisher-Yates algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const deckState = useSelector((state) => state.state.username);
  const initialCards = useSelector((state) => state.state.deck);
  const [cards, setCards] = useState(initialCards);

  const setCardsAndCheckWinCondition = (updatedCards) => {
    // Update the cards array
    setCards(updatedCards);
  
    // Check if there are no more "Cat" cards left
    if (!updatedCards.some((card) => card === "Cat")) {
      alert("You won");
      // Reset the game or handle game won
    }
  };

  const handleShuffle = () => {
    // Shuffle the cards array
    const shuffledCards = shuffleArray([...cards]);
    setCards(shuffledCards);
  };

  const checkCard = (index) => {
    if (cards[index] === "Exploding Kitten") {
      alert("You lose");
      // Reset the game or handle game over
    } else if (cards[index] === "Shuffle") {
      handleShuffle();
    } else if (cards[index] === "Cat") {
      // Remove the Cat card from the array
      const updatedCards = cards.filter((_, i) => i !== index);
      setCardsAndCheckWinCondition(updatedCards);
    }
  };
  

  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>states : {deckState}</h1>
      </div>
      <div>
        {/* Map over the cards array */}
        {cards.map((card, index) => (
          <div onClick={() => checkCard(index)} key={index}>
            {card}
          </div>
        ))}
      </div>
      {/* <button onClick={handleShuffle}>Shuffle</button> */}
    </div>
  );
}

export default App;
