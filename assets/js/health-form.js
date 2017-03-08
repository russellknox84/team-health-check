import submitHealthForm from "./healthFormSubmission"
import { addEventListener } from "./helpers"

const healthFormSubmission = () => addEventListener(".health-check", "submit", submitHealthForm)

export default healthFormSubmission