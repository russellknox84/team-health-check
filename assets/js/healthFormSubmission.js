import axios from "axios"
import { validateUserInput, removeChild, appendErrorMessageElement} from "./helpers"

const submitHealthForm = (ev) => {
    ev.preventDefault()

    const userInputResponses = ev.target
    const healthCheckQuestions = healthCheck["health-check"].questions
    
    console.log("the health check questions", healthCheck["health-check"].projectName)
    
    const userInput = healthCheckQuestions
        .map(question => {
            return validateUserInput(question, userInputResponses[question.id])
        })

    if (userInput.every(response => response.isValid)) {
        const userResponse = userInput.map(response => Object.assign(response, {userResponse: response.userResponse}))
        return axios.post("/user-data", 
            { userResponse, 
              projectName: healthCheck["health-check"].projectName,  
              surveyName: healthCheck["health-check"].surveyName
            }) 
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