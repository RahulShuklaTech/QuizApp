import React from "react"
const Options = ({options,handleClick,disable}) => {
    
    
    return (
        <div className = "options">
            {options.map((item,index) => <button onClick = {(e) =>handleClick(index,e.target)} disabled = {disable} className = {`btn${index}`} key = {index} >{item}</button> )}
        </div>
    )
}
export default Options