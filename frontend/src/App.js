import {Route , Routes} from 'react-router-dom'
import Game from './components/Game';
import Login from './components/Login';
import './App.css';
function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<Game/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </>
  )
 
}

export default App;
