import React,{useContext} from "react";
import { QuizContexts } from "../Helpers/Contexts";
import { Questions } from "../Helpers/questionBank";
import "../App.css"
function EndScreen(){
    const {score } = useContext(QuizContexts)

    return (
        
        <div className="mainend">
            <br />
        <br />
        <br />
        <br />
             <h1 className="buttonend">Quiz Finished</h1> 
        <h3 className="btnend2">{score} / {Questions.length}</h3>
        </div>
    )
}
export default EndScreen;