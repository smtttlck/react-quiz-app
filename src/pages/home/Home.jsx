import React from "react"
import { useNavigate } from "react-router-dom"
import Selectbar from "../../components/selectbar/Selectbar"
import './Home.css'

const Home = () => {

    const dificulity = ["easy", "medium", "hard"]

    const navigate = useNavigate()

    return (
        <div className="home">
            <div className="home-container">
                <h1>Quiz App with React</h1>
                <Selectbar options = {dificulity} />
                <button onClick={() => navigate(`/quiz/${document.querySelector("#selector").value}`)}>
                    Start a quiz
                </button>
            </div>
        </div>
    )
}

export default Home