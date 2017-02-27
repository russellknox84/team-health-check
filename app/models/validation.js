// Functions for validation middleware, consider using vladiator to chain checks and improve reliability

// TODO: 

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