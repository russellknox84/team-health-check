import validationModel from "../../app/models/validation"

const removeChild = (child, parent) => {
    if (parent.querySelector(`.errormessage_${child.id}`)) {
        parent.querySelector(`.${child.id}`).parentElement.parentElement.removeChild(parent.querySelector(`.errormessage_${child.id}`))
    }
  return child
}

const appendErrorMessageElement = (input, parent, errorMessage) => {
    const div = document.createElement('div')
    div.textContent = 'A input value must be given..'
    div.style.color = 'red'
    div.className = `errormessage_${input.id}`
    return parent.querySelector(`.${input.id}`).parentElement.parentElement.appendChild(div)
}

const validate = (input, userResponse) => {
/*    if (input.type === 'Radio') {
        if (userResponse.value === "") return true
        return false
    }
    if (input.type === 'Text') {
        if (userResponse.value.split(" ").length !== 3) return true
        return false
    }*/
    console.log(`${input.question} is mandatory ? (${input.isMandatory})`);
    if(input.type === 'Text') {
        if(input.isMandatory === false && ((userResponse.value.split(" ").length === 3) || (userResponse.value === ""))) return false;
        if(input.isMandatory === true && userResponse.value.split(" ").length === 3) return false;
        return true;
    }
    if (input.type === 'Radio') {
        if(input.isMandatory === true) {
            console.log(`${input.question} is mandatory and the value is (${userResponse.value})`);
            if (userResponse.value === "") return true
        } else {
            console.log(`${input.question} is NOT mandatory and the value is (${userResponse.value})`);
            return false
        }
    }

}

const validateUserInput = (input, userResponse) => {
    if (validate(input, userResponse)) return Object.assign(input)
    return Object.assign({}, { question: input.question, isValid: true, userResponse: userResponse.value, id: input.id })
}

const getElementByClassName = (e) => {
    return document.querySelector(e)
}

const addEventListener = (className, type, cb) => {
    const element = getElementByClassName(className)
    if (element) return element.addEventListener(type, cb)
}

export {
    validateUserInput,
    appendErrorMessageElement,
    removeChild,
    addEventListener
}
