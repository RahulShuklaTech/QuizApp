import React from "react";
import "./results.css"

const Results = ({result,ques}) => {
    console.log(ques)
    return (
        <div className ="results">
            {result.map( (item,index) => 
                        <div className = "row"><div className = "result-question">{ques[index].question}</div>
                        <div className = {checkAnswer(item,ques[index].correctOption)}>{ques[index].options[item]}</div> 
                        </div>                    
            )} 
       </div>
        
    )
}

const checkAnswer = (userAnswer,rightAnswer) =>  {
    return userAnswer === rightAnswer ? "result-answer-right": "result-answer-wrong"
}



export default Results