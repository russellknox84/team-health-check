import { expect } from "chai";
import { validateUserInput } from "../assets/js/helpers"

describe("helper functions", () => {
    it("should validate a user input and return an new object with {valid: true} ", () => {

        const userInput = validateUserInput({type: "radio"}, {value: "input value"})
        expect(userInput).to.deep.equal({type: 'radio', userResponse: "input value"})
    })
    it("should validate a user input and return an new object with {valid: false} ", () => {

        const userInput = validateUserInput({type: "radio"}, {value: ""})
        expect(userInput).to.deep.equal({type: 'radio'})
    })
})
