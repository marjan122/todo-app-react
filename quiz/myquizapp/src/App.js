import './App.css';
import React, {useState, useContext} from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContexts } from './Helpers/Contexts';
function App() {
 const [gameState, setGameState] = useState("menu");
 const [score, setScore] = useState(0);


  return (
    <div className="App">
      <br />
   <h1 className='h1'>Quiz App</h1>
<br />
<br />
<QuizContexts.Provider value={{gameState, setGameState, score , setScore}}>

 {gameState === "menu" &&<MainMenu />}
 {gameState === "quiz" &&<Quiz />}
 {gameState === "endScreen" &&<EndScreen />}
 </QuizContexts.Provider> 
      </div>
  )
}

export default App;