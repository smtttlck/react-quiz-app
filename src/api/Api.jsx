
function shuffle(answers) {
    return [...answers].sort(() => Math.random() - 0.5)    
}

export const fetchData = async level => {
    const baseUrl = `https://opentdb.com/api.php?amount=5&difficulty=${level}`
    const data = await (await fetch(baseUrl)).json()
    return data.results.map( data => ({
        question: data.question,
        answers: shuffle([data.correct_answer, ...data.incorrect_answers]),
        correctAnswer : data.correct_answer
    }))
}