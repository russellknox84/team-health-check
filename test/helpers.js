import { expect } from "chai";
import { validateUserInput } from "../assets/js/helpers"

describe("helper functions", () => {
    it("should validate a user input and return an new object with {valid: true} ", () => {

        const userInput = validateUserInput({}, "input value")

        expect(userInput).to.deep.equal({userResponse: "input value"})
    })
    it("should validate a user input and return an new object with {valid: false} ", () => {

        const userInput = validateUserInput({}, "")

        expect(userInput).to.deep.equal({})
    })
})
