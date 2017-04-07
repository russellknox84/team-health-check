import axios from "axios"
import { validateUserInput, removeChild, appendErrorMessageElement} from "./helpers"

const submitHealthForm = (ev) => {
    ev.preventDefault()

    const userInputResponses = ev.target
    const healthCheckQuestions = healthCheck["health-check"].questions


    const userInput = healthCheckQuestions
        .map(question => {
            return validateUserInput(question, userInputResponses[question.id])
        })

    if (userInput.every(response => response.userResponse)) {
        const userResponse = userInput.map(response => Object.assign(response, {userResponse: response.userResponse}))
        return axios.post("/user-data", { userResponse, projectTitle: healthCheckQuestions.projectTitle }) 
            .then(a => window.location.href = "/sucess") 
    } else userInput
        .map(response => {
            console.log("responses:", response)
           return removeChild(response, userInputResponses)
        })
        .filter(response => !response.userResponse)
        .map(question => appendErrorMessageElement(question, userInputResponses))
   
} 

export default submitHealthForm