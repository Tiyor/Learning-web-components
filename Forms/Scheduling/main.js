// ***** ~~~~~ VALIDATOR FUNCTIONS ~~~~~ *****
var validator = {};

//     ********** isEMPTY INPUT
validator.isEmpty = function(input) {
    // Stop execution if input isn't string
    if (typeof input !== 'string') return false;

    if (input.length !== 0) {
        for (var i = 0; i < input.length; i++) {
            if (input[i] !== " ") {
                return false;
            }
            return true;
        }
    }
    return true;
};
validator.isEmpty(null); // returns false

//     ********** PHONE NUMBER
validator.isPhoneNumber = function(input) {
    var i, len;
    var template = "";

    // Replacing numbers with "x" and check against predefined template
    for (i = 0; len = input.length, i < len; i++) {
        template += input[i] >= '0' && input[i] <= '9' ? 'x' : input[i];
    }
    return ['xxx-xxx-xxxx', 'xxxxxxxxxx', '(xxx)xxxxxxx', '(xxx)xxx-xxxx']
        .indexOf(template) >= 0;
};
validator.isPhoneNumber("415-124-8800"); // returns true;

//     ********** WORD LENGTH
validator.isOfLengthOrLessThan = function(input, n) {
    return input.length < n;
};
validator.isOfLengthOrLessThan("123456789", 20); // true

//     ********** EMAIL
validator.isEmailAddress = function(input) {
    if ((typeof input !== 'string') || (input.length < 3)) return false;

    // Checks  @ 
    var atPos = input.indexOf("@");
    if (atPos < 1) return false;

    // Checks if @ appears only once
    if (atPos !== input.lastIndexOf("@")) return false;

    // Checks if the character before/after @ is not empty
    if ((input.charAt(atPos - 1) === '') || (input.charAt(atPos + 1) === "")) return false;

    // Checks if dot is not at the end of the input
    var dot = input.indexOf(".");
    if (dot === input.length - 1) return false;

    return true;

};
validator.isEmailAddress('***@*&df.'); // returns false;

// ***** ~~~~~ VALIDATES INPUT FIELDS ~~~~~ *****

// Validates Full Name Input Field
function validateName() {
    var name = document.getElementById("name").value;

    if (validator.isEmpty(name)) {
        makePrompt("Name is required", "promptName", "#ff4d4d");
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        makePrompt("Only alphabetic characters!", "promptName", "#ff4d4d");
        return false;
    }

    makePrompt("Welcome " + name, "promptName", "#00b300");
    return true;
}

// Validates Email Input Field
function validateEmail() {
    var email = document.getElementById("email").value;

    if (validator.isEmpty(email)) {
        makePrompt("Email is required", "promptEmail", "#ff4d4d");
        return false;
    }

    if (!validator.isEmailAddress(email)) {
        makePrompt("Invalid email!", "promptEmail", "#ff4d4d");
        return false;
    }

    makePrompt("Valid", "promptEmail", "#00b300");
    return true;
}
// Validates Phone Number Input Field
function validatePhone() {
    var phone = document.getElementById("phone").value;

    if (validator.isEmpty(phone)) {
        makePrompt("Phone number is required", "promptPhone", "#ff4d4d");
        return false;
    }

    if (!validator.isOfLengthOrLessThan(phone, 14)) {
        makePrompt("Too long input", "promptPhone", "#ff4d4d");
        return false;
    }

    if (!validator.isPhoneNumber(phone)) {
        makePrompt("Only digits!", "promptPhone", "#ff4d4d");
        return false;
    }

    makePrompt("Valid", "promptPhone", "#00b300");
    return true;
}

// Validates Time Input Field
function validateTime() {
    var dat = document.getElementById("date").value;

    if (validator.isEmpty(dat)) {
        makePrompt("Choose time", "promptTime", "#ff4d4d");
        return false;
    }

    makePrompt("Valid", "promptTime", "#00b300");
    return true;
}


// Validates Comment Area
function validateText() {
    var text = document.getElementById("text").value;
    var required = 10;
    var left = required - text.length;

    if (left > 0) {
        makePrompt(left + " Characters left", "promptText", "#ff4d4d");
        return false;
    }

    makePrompt("Valid comment", "promptText", "#00b300");
    return true;
}

// Checks All Inputs and Submits the Form
function submitForm() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateText() || !validateTime()) {
        makePrompt("Form Must Be Valid", "promptSubmit", "#ff4d4d");
        return false;
    }
    makePrompt("You good now!", "promptSubmit", "#00b300");
    return true;
}

// Gives Proper Message Value and Color to Error Input Field
function makePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}
