import React from "react"
export default function Question(props){
    let question = props.question;
   

    return(
       
            <div className="question">{question}</div>
        
    )
}