import { useEffect, useState } from "react";
import Question from "./Question";
import Options from './Options';
import questions from "../data"
import Results from "./Results";
import ShowConfetti from "./ShowConfetti"
const answers = [];
export default function Main() {
    let [currenQuestion, setCurrentQuestion] = useState(0);
    let [score, setScore] = useState(0)
    let [showConfetti, setShowConfetti] = useState(false)
    let [disable, setDisable] = useState(false)
    let [width, setWidth] = useState(100)
    let [gotAnswer, setGotAnswer] = useState(false)
    useEffect(() => {
        setWidth(100);
        let barWidth;

        barWidth = setInterval(() => {

            if (currenQuestion < 5) {
                setWidth((bar) => {
                    if (bar - 0.5 < 0 || gotAnswer) {
                        if (!gotAnswer && currenQuestion < 5) {
                            setCurrentQuestion(cur => cur + 1);
                            if (currenQuestion === answers.length) {
                                answers.push("No Answer");
                            }
                        }
                        clearInterval(barWidth)
                        setGotAnswer(!gotAnswer)
                    }
                    return bar - .1;
                });
            }
        })


       
        return (() => { if (barWidth) clearInterval(barWidth) })
    }, [currenQuestion, gotAnswer]);


    if (answers.length === questions.length) return <Results result={answers} ques={questions} />


    function handleClick(index, e = "") {

        answers.push(index)
       
        setGotAnswer(true)
        setDisable(true)
        let correctAnswer = questions[currenQuestion].correctOption;
        if (index === correctAnswer) {
            setScore(current => current + 1);
            if (e) e.style.backgroundColor = "green";
            setShowConfetti(true)

        } else {
            if (e) e.style.backgroundColor = "red";
        }
        setTimeout(() => {
            if (e) e.style.backgroundColor = "black";
            setCurrentQuestion(current => current + 1)
            setShowConfetti(false)
            setDisable(false)
        }, 3000)

    }



    return (
        <div className="main">
            {showConfetti && <ShowConfetti />}
            <div className="progress-bar" style={{ width: width + '%' }}></div>
            <div className="score"><h3>Score:{score}</h3></div>
            <div className="question"><Question question={questions[currenQuestion].question} /></div>
            <Options options={questions[currenQuestion].options} handleClick={handleClick} disable={disable} />

        </div>
    )
}