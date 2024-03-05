import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shuffleDeck, startGame, drawCard, removeCatCard, defuse, DefuseCard } from './redux/actions'; // Import Redux actions
import Navbar from './Navbar';
import { AuthContext } from './context/AuthContext';

const Game = () => {
    const {state ,start , setStart,Logout} = useContext(AuthContext)
    const dispatch = useDispatch();
   
    let initialCards = useSelector((state) => state.state.deck);
    const defuseCard = useSelector((state) => state.state.defuseCard)
    const [cards, setCards] = useState(initialCards); 
    const [gamesWon , setGamesWon] = useState(0)
    // const [start , setStart] = useState(false)
  
    const handleCardClick = (index) => {
      const card = cards[index];
      if (card === "Exploding Kitten") {
        if(defuseCard !== 0){
          dispatch(DefuseCard())
        }else{
          dispatch(startGame())
          setStart(false)
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

    useEffect(()=>{
      if(state?.user){
        const gameswon =  JSON.parse(localStorage.getItem("game-data"))
      setGamesWon(gameswon.won)
      }
    },[state])


  
  
    useEffect(() => {
      setCards(initialCards);
    }, [initialCards]);
  
    return (
      <div className="App">
        <Navbar />
    
        <div>
          <h1>UserName : {state?.user?.name}</h1>
          <div>
            <h2>DefuseCard Count: {defuseCard}</h2>
            <h3>Games Won : {state?.user ? gamesWon : "Login to record your winnings"} </h3>
          </div>
  
       <div className='start-container'>
       {/* <button className='start-btn' >Start Game</button> */}
       <button type="button" className="btn btn-primary" onClick={()=>{dispatch(startGame());setStart((value)=>!value)}} >Start Game</button>
       </div>
        </div>
        <div >
          {
            start ? <div className='cards-container'>
               {initialCards.map((card, index) => (
            <div className='card'  onClick={() => handleCardClick(index)} key={index}>
              card 
              <div className='pop'>{card}</div>
            </div>
          ))}
            </div>:
            <div className='before-start'>
              <h1>start the game</h1>
            </div>
          }
         
        </div>
       
         
      </div>
    );
}

export default Game
