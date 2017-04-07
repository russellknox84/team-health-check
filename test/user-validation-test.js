import { expect } from "chai";
import { validateUserInput } from "../assets/js/helpers"

describe("validate user input", () => {
    it("should validate a radio input and return an new object with userResposne equal to radio value", () => {

        const userInput = validateUserInput({question: "Who am I?", id: 1}, {value: 1})
        expect(userInput).to.deep.equal({userResponse: 1, question: "Who am I?", id: 1})

    })
    it("should not validate a radio input and return an new object with no userResponse value", () => {

        const userInput = validateUserInput({type: "radio", id: 1}, {value: ""})
        expect(userInput).to.deep.equal({type: 'radio', id: 1})

    })
    it("should validate a text input and return an new object with userResposne equal to text value", () => {

        const userInput = validateUserInput({question: "What is the meaning of life?", id: 1}, {value: "one two three"})
        expect(userInput).to.deep.equal({question: "What is the meaning of life?", userResponse: "one two three", id: 1})

    })
    it("should not validate a text input and return an new object with no userResponse value", () => {

        const userInput = validateUserInput({type: "textarea", id: 1}, {value: "one two"})
        expect(userInput).to.deep.equal({type: 'textarea', id: 1})

    })
    it("should not validate a text input and return an new object with no userResponse value", () => {

        const userInput = validateUserInput({type: "textarea", id: 1}, {value: "one two three four"})
        expect(userInput).to.deep.equal({type: 'textarea', id: 1})

    })
})
