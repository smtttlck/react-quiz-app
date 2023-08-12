import React from "react"
import './Selectbar.css'

const Selectbar = props => {
    
    return (
        <div>
            <select name="" id="selector">
                {props.options.map( (option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Selectbar