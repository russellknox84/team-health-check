const validation = require('../app/models/validation');


describe("Validation Module", () => {

    describe("Module testing", () => {
        it("should process the correct validation when supported command provided");
        it("should fail when no data is passed");
        it("should fail when supplied incorrect command");
    });

    describe("Radio Button Validation", () => {
        it("should pass if the value is defined, a number and in range");
        it("should fail if the value is undefined");
        it("should fail if the value is not a number");
        it("should fail if the value is lower than the range");
        it("should fail if the value is higher than the range");
    });

    describe("Text Button Validation", () => {
        it("should pass if the value is defined, a string and in range");
        it("should fail when the value is undefined");
        it("should fail when the value is zero length");
        it("should fail when the value has illegal characters");
        it("should fail when the value is higher than specified wordcount");
        it("should fail when the value is higher than specified character count");
    });
})