import React,{useContext} from "react";
import { QuizContexts } from "../Helpers/Contexts";
import "../App.css"
export default function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContexts)
    
    return(
        <div className="Menu">
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => setGameState("quiz")}>Start Quiz</button>
        </div>
    )
}