import React from "react";
import "./results.css"

const Results = ({result,ques}) => {
    console.log(result)

    return (
        <div className ="results">
            {result.map( (item,index) => 
                        <div className = "row" key ={index}><div className = "result-question">{ques[index].question}</div>
                        <div className = {checkAnswer(item,ques[index].correctOption)}>{item === "No Answer" ? "No Answer": ques[index].options[item]}</div> 
                        </div>                    
            )} 
       </div>
        
    )
}

const checkAnswer = (userAnswer,rightAnswer) =>  {
    return userAnswer === rightAnswer ? "result-answer-right": "result-answer-wrong"
}



export default Results