import React, { useRef, useState } from "react"
import './QuestionCard.css'

const QuestionCard = props => {

    const [counter, setCounter] = useState(0)

    const button1Ref = useRef()
    const button2Ref = useRef()
    const button3Ref = useRef()
    const button4Ref = useRef()
    const buttonRefs = [button1Ref, button2Ref, button3Ref, button4Ref]

    const nextQuestion = e => {

        if(props.questions[counter].correctAnswer == e.target.value) { // correct answer
            props.setScore(props.score+1)            
            e.target.style.backgroundColor = "green"
        }
        else // incorrect answer
            e.target.style.backgroundColor = "red"
        e.target.style.color = "white"
        buttonRefs.map( ref => ref.current?.setAttribute("disabled", ""))
        setTimeout(() => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black"
            e.target.blur()
            buttonRefs.map( ref => ref.current?.removeAttribute("disabled", ""));
            (counter==4) ? props.setFinishFlag(true) : setCounter(counter+1)

        }, 1000)
    }

    return (
        <div className="question-card">
            <div className="question">
                {counter+1}. {props.questions[counter]?.question}
            </div>
            <div className="answers">
                {props.questions[counter]?.answers.map( (answer, index) => (
                    <button ref={buttonRefs[index]} onClick={nextQuestion} key={index} value={answer}>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;