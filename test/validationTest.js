import validation from '../app/models/validation';
const should = require('chai').should();


describe('Validation Module', () => {

    describe('Module testing', () => {
        it('should process the correct validation when supported command provided', () => {
            validation.check('radio', 2).should.equal(true); 
        });
        it('should fail when no data is passed', () => {
            validation.check('radio').should.equal(false);
        });
        it('should fail when supplied incorrect command', () => {
            validation.check('cake', 2).should.equal(false); 
        });
    });

    describe('Radio Button Validation', () => {
        it('should pass if the value is defined, a number and in range', () => {
            validation.check('radio', 4).should.equal(true);
        });
        it('should fail if the value is undefined', () => {
            validation.check('radio').should.equal(false);
        });
        it('should fail if the value is not a number', () => {
            validation.check('radio', 'cake').should.equal(false);
        });
        it('should fail if the value is lower than the range', () => {
            validation.check('radio', -20).should.equal(false);
        });
        it('should fail if the value is higher than the range', () => {
            validation.check('radio', 10).should.equal(false);
        });
    });

    describe('Text Button Validation', () => {
        it('should pass if the value is defined, a string and in range', () => {
            validation.check('textarea', 'cat dog bird').should.equal(true);
        });
        it('should fail when the value is undefined', () => {
            validation.check('textarea').should.equal(false);
        });
        it('should fail when the value is zero length', () => {
            validation.check('textarea', '').should.equal(false);
        });
        it('should fail when the value has illegal characters', () => {
            validation.check('textarea', '</;$').should.equal(false);
        });
        it('should fail when the value is higher than specified wordcount', () => {
            validation.check('textarea', 'cat dog bird horse').should.equal(false);
        });
        it('should fail when the value is higher than specified character count', () => {
            validation.check('textarea', 'mQpKPmDGVDybmoOpgkLVOYtCVLAHYCYlUnxlzbRWgSXKLYUIMjPyVmnvFrqStzQVyDr').should.equal(false);
        });
    });
})