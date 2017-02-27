const validateInputs = (nodes, fieldsets) => {

    const a = document.createElement('div')
    a.innerHTML = 'A input value must be given..'
    
    if (fieldsets[nodes.id].value === "") {
        fieldsets.querySelector(`.${nodes.id}`).appendChild(a)
        return false
    }
    return true
}

const healthForm = document.querySelector(".radioNameForm") 
    .addEventListener('submit', (e) => {
        e.preventDefault()

        const fieldsets = e.target
        const healthCheckData = healthCheck["health-check"].questions

        const truthify = healthCheckData.some(nodes => validateInputs(nodes, fieldsets))
 
        if (!truthify) return

        const userData = healthCheckData.map(nodes => Object.assign(nodes, {userInput: fieldsets[nodes.id].value}))

        //send data
 
    })  