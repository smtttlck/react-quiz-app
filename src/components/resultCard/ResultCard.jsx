import React, { useEffect, useState } from "react";
import './ResultCard.css';

const ResultCard = props => {

    const [resulTime, setResultTime] = useState()
    
    useEffect(() => {
        setResultTime(30-props.time)
        props.setTime(0)
    }, [])

    return (
        <div className="result-container">
            <div>Score: {props.score}/5</div>
            <div>Time: {resulTime}</div>
            <button className="playButton" onClick={() => location.reload()}>Play Again</button>
        </div>
    )
}

export default ResultCard;