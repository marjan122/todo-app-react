import React, {useState, useContext} from "react";
import { QuizContexts } from "../Helpers/Contexts";
import { Questions } from "../Helpers/questionBank";
function Quiz(){

        const {score, setScore, setGameState }= useContext(QuizContexts);

        const [currQuestion, setcurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
  
  const nextQuestion = () => {

        if (Questions[currQuestion].answer == optionChosen) {
                setScore(score + 1)
        }
        setcurrQuestion(currQuestion + 1)
  };

const finishQuiz = () =>{
        if (Questions[currQuestion].answer == optionChosen) {
                setScore(score + 1)
        }
setGameState("endScreen");
}

  return (
        <div className="Quiz">
                <br />
                <br />
                <br />
<h1 className="h2">{Questions[currQuestion].prompt}</h1>
<div>

        <button className="btn" onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>

        <button className="btn" onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
        <br />
        <br />
        <button className="btn" onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
        <button className="btn" onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
</div>
<br />
<br />
{currQuestion == Questions.length -1 ? (
        <button className="btn" onClick={finishQuiz}>Finish</button>
) :

<button className="btn" onClick={nextQuestion}>Next Question</button>
}
        </div>
        
        );
}
export default Quiz;