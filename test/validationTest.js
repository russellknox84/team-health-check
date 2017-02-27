const validation = require('../app/models/validation');
const should = require('chai').should();


describe('Validation Module', () => {

    describe('Module testing', () => {
        it('should process the correct validation when supported command provided', () => {
            validation.check('radioButton', 2).should.equal(true); 
        });
        it('should fail when no data is passed', () => {
            validation.check('radioButton').should.equal(false);
        });
        it('should fail when supplied incorrect command', () => {
            validation.check('cake', 2).should.equal(false); 
        });
    });

    describe('Radio Button Validation', () => {
        it('should pass if the value is defined, a number and in range', () => {
            validation.check('radioButton', 4).should.equal(true);
        });
        it('should fail if the value is undefined', () => {
            validation.check('radioButton').should.equal(false);
        });
        it('should fail if the value is not a number', () => {
            validation.check('radioButton', 'cake').should.equal(false);
        });
        it('should fail if the value is lower than the range', () => {
            validation.check('radioButton', -20).should.equal(false);
        });
        it('should fail if the value is higher than the range', () => {
            validation.check('radioButton', 10).should.equal(false);
        });
    });

    describe('Text Button Validation', () => {
        it('should pass if the value is defined, a string and in range', () => {
            validation.check('textArea', 'cat dog bird').should.equal(true);
        });
        it('should fail when the value is undefined', () => {
            validation.check('textArea').should.equal(false);
        });
        it('should fail when the value is zero length', () => {
            validation.check('textArea', '').should.equal(false);
        });
        it('should fail when the value has illegal characters', () => {
            validation.check('textArea', '</;$').should.equal(false);
        });
        it('should fail when the value is higher than specified wordcount', () => {
            validation.check('textArea', 'cat dog bird horse').should.equal(false);
        });
        it('should fail when the value is higher than specified character count', () => {
            validation.check('textArea', 'mQpKPmDGVDybmoOpgkLVOYtCVLAHYCYlUnxlzbRWgSXKLYUIMjPyVmnvFrqStzQVyDr').should.equal(false);
        });
    });
})