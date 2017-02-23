const { expect } = require("chai");

import name from '../assets/js'

describe("test test", () => {
    it("should return true", () => {
        expect(1).to.equal(1)
    })
    it("should return 'Home Office Digital'", () => {
        expect(name).to.equal("Home Office Digital")
    })
})