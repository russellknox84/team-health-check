// Functions for validation middleware

// DONE: Create unit test for module.
// TODO: Consider using vladiator to chain validation and improve reliability of checks, module can be used Client/Server side.
// TODO: Create meaningful errors.
// TODO: Refactor code to use a callback pattern inline with existing NodeJS patterns.

var validation = {
    radioButton: function(data) {
        // Radio Button validation code goes here.
    },
    textArea: function(data) {
        // Text Area validation code goes here
    }
}

// Validation executer, applies and calls the commands as speciified
// Syntax for use as:
//      validation.check('validation rule', 'data');

validation.check = function (name, data) {
    if(validation.hasOwnProperty(name)){
        return validation[name] && validation[name].apply(validation, [].slice.call(arguments, 1));
    } else {
        console.log("validation rule for " + name + " does not exist");
    }
};

module.exports = validation;