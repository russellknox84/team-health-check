// Functions for validation middleware

const validator = require('the-vladiator');

// DONE: Create unit test for module.
// DONE: Consider using vladiator to chain validation and improve reliability of checks, module can be used Client/Server side.
// TODO: Create meaningful errors.
// TODO: Refactor code to use a callback pattern inline with existing NodeJS patterns.

var validation = {
    radioButton: function(data) {
        // Radio Button validation code goes here.
        var result = validator(data).isRequired().notEmpty().isNumber().lowerThan(6).higherThan(0).didPass();
        return result;
    },
    textArea: function(data) {
        // Text Area validation code goes here
        var result1 = validator(data).isRequired().notEmpty().isString().shorterThan(65).didPass();
        var result2 = data.split(" ").length > 3
                      ? false
                      : true;
        var specChars = /[\<\>!@#\$%^&\*,]+/;
        var result3 = !specChars.test(data)
        if(result1 && result2 && result3) return true;
        else return false;
    }
}

// Validation executer, applies and calls the commands as speciified
// Syntax for use as:
//      validation.check('validation rule', 'data');

validation.check = function (name, data) {
    if(validation.hasOwnProperty(name) && data){
        return validation[name] && validation[name].apply(validation, [].slice.call(arguments, 1));
    } else {
        return false;
    }
};

module.exports = validation;