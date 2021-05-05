import {  useState } from "react";
import Question from "./Question";
import Options from './Options';
import questions from "../data"
import Results from "./Results";
import ShowConfetti from "./ShowConfetti"
const answers = [];
export default function Main() {
    let [currenQuestion, setCurrentQuestion] = useState(0);
    let [score,setScore] = useState(0)
    let [showConfetti,setShowConfetti] = useState(false)
    let [disable,setDisable] = useState(false)
    
    const handleClick = (index,e) => {
        answers.push(index)
        setDisable(true)
        let correctAnswer = questions[currenQuestion].correctOption;
        if(index === correctAnswer){
            setScore(current => current + 1 );
            e.style.backgroundColor = "green";
            setShowConfetti(true)
            
        }else{
            e.style.backgroundColor = "red";
        }
        setTimeout(() => {
            e.style.backgroundColor = "black";
            currenQuestion < (questions.length-1) ? setCurrentQuestion(current => current + 1 ) : setCurrentQuestion(0);
            setShowConfetti(false)
            setDisable(false)
        },3000)

    }
    

    return answers.length === questions.length  && !disable ? <Results result = {answers} ques = {questions}/>:
       ( 
        <div className="main">
            {showConfetti &&  <ShowConfetti />}
            <div className ="score"><h3>Score:{score}</h3></div>
            <div className ="question"><Question question={questions[currenQuestion].question} /></div>
            <Options options={questions[currenQuestion].options} handleClick={handleClick} disable = {disable} />
            
        </div>
    )
}