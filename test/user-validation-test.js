import { expect } from "chai";
import { validateUserInput } from "../assets/js/helpers"

describe("validate user input", () => {
    it("should validate a radio input and return an new object with userResposne equal to radio value", () => {

        const userInput = validateUserInput({type: "radio"}, {value: 1})
        expect(userInput).to.deep.equal({type: 'radio', userResponse: 1})

    })
    it("should not validate a radio input and return an new object with no userResponse value", () => {

        const userInput = validateUserInput({type: "radio"}, {value: ""})
        expect(userInput).to.deep.equal({type: 'radio'})

    })
    it("should validate a text input and return an new object with userResposne equal to text value", () => {

        const userInput = validateUserInput({type: "textarea"}, {value: "one two three"})
        expect(userInput).to.deep.equal({type: 'textarea', userResponse: "one two three"})

    })
    it("should not validate a text input and return an new object with no userResponse value", () => {

        const userInput = validateUserInput({type: "textarea"}, {value: "one two"})
        expect(userInput).to.deep.equal({type: 'textarea'})

    })
    it("should not validate a text input and return an new object with no userResponse value", () => {

        const userInput = validateUserInput({type: "textarea"}, {value: "one two three four"})
        expect(userInput).to.deep.equal({type: 'textarea'})

    })
})
