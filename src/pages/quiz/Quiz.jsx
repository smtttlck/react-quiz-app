import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import QuestionCard from "../../components/questionCard/QuestionCard"
import ResultCard from "../../components/resultCard/ResultCard"
import * as api from "../../api/Api"
import './Quiz.css'

const Quiz = () => {

    const { level } = useParams()
    const [questions, setQuestions] = useState([])
    const [finishFlag, setFinishFlag] = useState(false)
    const [score, setScore] = useState(0)
    const [time, setTime] = useState(30)



    useEffect(() => {
        const getData = async () => setQuestions(await api.fetchData(level))
        getData();

    }, [])
    useEffect(() => {
        if (time != 0) {
            const interval = setInterval(() => setTime(time - 1), 1000)

            return () => clearInterval(interval)
        }
        else
            setFinishFlag(true)
    }, [time]);

    return (
        <div className="quiz">
            {(finishFlag) ? <ResultCard score={score} time={time} setTime={setTime} /> :
                (<div className="quiz-container">
                    <div className="timer">
                        {time}
                    </div>
                    <QuestionCard
                        questions={questions}
                        score={score}
                        setScore={setScore}
                        setFinishFlag={setFinishFlag}
                        setTime={setTime}
                    />
                </div>)}

        </div>
    )
}

export default Quiz