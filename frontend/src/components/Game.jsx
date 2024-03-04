import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Navbar from './components/Navbar';
import { shuffleDeck, startGame, drawCard, removeCatCard, defuse, DefuseCard } from './redux/actions'; // Import Redux actions
import Navbar from './Navbar';

const Game = () => {
    const dispatch = useDispatch();
    const deckState = useSelector((state) => state.state.username);
    let initialCards = useSelector((state) => state.state.deck);
    const defuseCard = useSelector((state) => state.state.defuseCard)
    const [cards, setCards] = useState(initialCards); 
    // const [toggleClick , setToggleClick] = useState(false)
  
  
    // Function to handle card click
    const handleCardClick = (index) => {
      const card = cards[index];
      if (card === "Exploding Kitten") {
        if(defuseCard !== 0){
          dispatch(DefuseCard())
        }else{
          alert("you lost")
        }
      } else if (card === "Shuffle") {
        dispatch(shuffleDeck());
      } else if (card === "Cat") {
        dispatch(removeCatCard(index));
      } else if (card === 'Defuse') {
        dispatch(defuse())
      }
      else {
        dispatch(drawCard(index)); 
      }
    };
  
    
    useEffect(() => {
      dispatch(shuffleDeck());
      dispatch(startGame());
    }, []);
  
  
    useEffect(() => {
      setCards(initialCards);
    }, [initialCards]);
  
    return (
      <div className="App">
        <Navbar />
        <div>
          <h1>UserName : {deckState}</h1>
          <div>
            <h2>DefuseCard Count: {defuseCard}</h2>
            <h3>Games Won : {} </h3>
          </div>
        </div>
        <div className='cards-container'>
  
          {initialCards.map((card, index) => (
            <div className='card'  onClick={() => handleCardClick(index)} key={index}>
              card 
              <div className='pop'>{card}</div>
            </div>
          ))}
        </div>
       
          <button onClick={()=>{dispatch(startGame())}}>Start Game</button>
    
      </div>
    );
}

export default Game
