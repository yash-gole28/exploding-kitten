import {Route , Routes} from 'react-router-dom'
import Game from './components/Game';
import Login from './components/Login';
import './App.css';
import Register from './components/Register';
function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<Game/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
   </>
  )
 
}

export default App;
