import axios from 'axios'
import validation from "../../app/models/validation"

const removeChild = (parent, child) => parent.querySelector(`.${child}`).removeChild(parent.querySelector(`.errormessage${child}`))

const appendErrorMessageElement = (parent, nodes) => {
    const a = document.createElement('div')
    a.textContent = 'A input value must be given..'
    a.style.color = 'red'
    a.className = `errormessage${nodes.id}`
    return parent.querySelector(`.${nodes.id}`).appendChild(a)
}

const validateInputs = (nodes, fieldsets) => {
    //remove error messgae if already exists
    if(fieldsets.querySelector(`.errormessage${nodes.id}`)) removeChild(fieldsets, nodes.id)
    //console.log(validation.check("textarea", 's'), "textare....")
    //!validation.check(nodes.type, fieldsets[nodes.id].value)
    if (fieldsets[nodes.id].value === '') { 
        appendErrorMessageElement(fieldsets, nodes)
        return false
    }
    //returns true if value from input is found 
    return true
}

const healthForm = document.querySelector(".radioNameForm") 
    .addEventListener('submit', (e) => {
        e.preventDefault()

        const fieldsets = e.target
        const healthCheckData = healthCheck["health-check"].questions

        const truthify = healthCheckData
            .map(nodes => validateInputs(nodes, fieldsets))
            .every(a => a)
   
        if (!truthify) return

        const userData = healthCheckData
            .map(nodes => Object.assign(nodes, {userInput: fieldsets[nodes.id].value}))
     
        //send data
        axios.post("user-data", { userData })
 
    })  