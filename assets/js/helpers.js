import validationModel from "../../app/models/validation"

const removeChild = (child, parent) => {
    if (parent.querySelector(`.errormessage_${child.id}`)) {
        parent.querySelector(`.${child.id}`).removeChild(parent.querySelector(`.errormessage_${child.id}`))
    }
  return child
}

const appendErrorMessageElement = (input, parent, errorMessage) => {
    const div = document.createElement('div')
    div.textContent = 'A input value must be given..'
    div.style.color = 'red'
    div.className = `errormessage_${input.id}`
    return parent.querySelector(`.${input.id}`).appendChild(div)
}

const validate = (input, userResponse) => {
    if (input.type === 'radio') {
        if (userResponse.value === "") return true
        return false
    }
    if (input.type === 'textarea') {
        if (userResponse.value.split(" ").length !== 3) return true
        return false
    }
}

const validateUserInput = (input, userResponse) => {
    if (validate(input, userResponse)) return Object.assign(input)
    return Object.assign(input, { userResponse: userResponse.value })
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
