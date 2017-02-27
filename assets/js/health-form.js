const removeChild = (parent, child) => parent.querySelector(`.${child.id}`).removeChild(parent.querySelector(`.errormessage${child.id}`))

const appendErrorMessageElement = (parent, nodes) => {
    const a = document.createElement('div')
    a.textContent = 'A input value must be given..'
    a.style.color = 'red'
    a.className = `errormessage${nodes.id}`
    return parent.querySelector(`.${nodes.id}`).appendChild(a)
}

const validateInputs = (nodes, fieldsets) => {
    //remove error messgae if already exists
    if(fieldsets.querySelector(`.errormessage${nodes.id}`)) removeChild(fieldsets, nodes)
     
    if (fieldsets[nodes.id].value === "") { 
        appendErrorMessageElement(fieldsets, nodes)
        return false
    }  
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
 
    })  