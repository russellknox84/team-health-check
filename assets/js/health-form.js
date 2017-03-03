import axios from 'axios'
import { validateUserInput, removeChild, appendErrorMessageElement, addEventListener } from "./helpers"

const healthFormSubmission = () => {

    const submitHealthForm = (ev) => {
    ev.preventDefault()

    const userInputResponses = ev.target
    const healthCheckQuestions = healthCheck["health-check"].questions

    const userInput = healthCheckQuestions
        .map(question => validateUserInput(question, userInputResponses[question.id].value))

    if (userInput.every(response => response.userResponse)) {
        const userResponse = userInput.map(response => Object.assign(response, {userResponse: userInputResponses[response.id].value}))
        return axios.post("/user-data", { userResponse }) 
            .then(a => window.location.href = "/sucess") 
    } else userInput
        .map(response => removeChild(response, userInputResponses))
        .filter(response => !response.userResponse)
        .map(question => appendErrorMessageElement(question, userInputResponses))
   
} 
    addEventListener(".health-check", "submit", submitHealthForm)
}

export default healthFormSubmission