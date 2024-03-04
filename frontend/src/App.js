import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import { shuffleDeck, startGame, drawCard, removeCatCard } from './components/redux/actions'; // Import Redux actions

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const dispatch = useDispatch();
  const deckState = useSelector((state) => state.state.username);
  let initialCards = useSelector((state) => state.state.deck);
  // const isStarted = useSelector((state) => state.state.isStarted); // Check if the game has started
  const [cards, setCards] = useState(initialCards); // Use local state to store cards

  // useEffect to shuffle the deck and start the game when component mounts


  // Function to handle card click
  const handleCardClick = (index) => {
    const card = cards[index];
    if (card === "Exploding Kitten") {
      alert("You lose");
    } else if (card === "Shuffle") {
      dispatch(shuffleDeck());
    } else if (card === "Cat") {
      dispatch(removeCatCard(index)); // Dispatch action to remove Cat card
    } else if (card === 'Defuse') {
      // Handle Defuse logic
    }
    // else {
    //   dispatch(drawCard(index)); // Dispatch action to draw card
    // }
  };

  // Function to handle "Start Game" button click
  const handleStartGame = () => {
    dispatch(shuffleDeck()); // Shuffle the deck
    dispatch(startGame()); // Start the game
  };

  useEffect(() => {
    dispatch(shuffleDeck());
    dispatch(startGame());
  }, []);

  // Update local state when initialCards change
  useEffect(() => {
    setCards(initialCards);
  }, [initialCards]);

  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>states : {deckState}</h1>
      </div>
      <div className='cards-container'>
        {/* Render the "Start Game" button */}

        {/* Map over the cards array and display each card */}
        {cards.map((card, index) => (
          <div className='card' onClick={() => handleCardClick(index)} key={index}>
            {card} {/* Display the value of the card */}
          </div>
        ))}

      </div>
       {/* {!isStarted && ( */}
       <button onClick={handleStartGame}>Start Game</button>
        {/* )} */}
    </div>
  );
}

export default App;
