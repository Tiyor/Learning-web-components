//     ****** ~~~ Validator Functions ~~~ ******
var validator = {};

// ***** Checks if entered input is empty *****
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

// ****** Checks if input is contained with alphabetic characters
validator.isAlphabetic = function(input) {
    var code, i, len;
    // Loop through input
    for (i = 0; len = input.length, i < len; i++) {
        code = input.charCodeAt(i);

        // Check if code matches to character codes
        if (!(code > 64 && code < 91) &&
            !(code > 96 && code < 123)) {
            return false;
        }
    }
    return true;
};

// ******  Checks if input is after today or not *****
validator.isAfterToday = function(input) {
    if (typeof input === 'string') {
        return (new Date(input).getTime() >= new Date().getTime());
    }
    return "Please, enter valid date object";
};

// ****** Checks if input is valid phone number
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

// ****** Checks if input is valid email adress
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

// Gets user age from entered input to today
function getAge(input) {
    var currDate = new Date();
    var birthDate = new Date(input);
    var age = currDate.getFullYear() - birthDate.getFullYear();
    var m = currDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
getAge('1980/08/10');


//     ****** ~~~ Form validation functions  ~~~ ******

window.onload = function() {
        var signUp = document.getElementById("signUp");
        var fName = document.getElementById("fName");
        var lName = document.getElementById("lName");
        var email = document.getElementById("emAil");
        var dateBirth = document.getElementById("dob");
        var phone = document.getElementById("pn");
        var passwor = document.getElementById("passw");
        var confPassw = document.getElementById("cpassw");
        var suButton = document.getElementById("subMit");

        suButton.addEventListener('click', function(event) {
            isNameValid(fName);
            isLNameValid(lName);
            isEmailValid(email);
            isDOBValid(dateBirth);
            isPhoneValid(phone);
            isPassWord(passwor);
            confPassword(confPassw);
        });

        signUp.addEventListener('submit', function(event) {
            event.preventDefault();
        });
 
// Validates user first name  
function isNameValid(char) {
    var val = char.value;
    if (validator.isEmpty(val)) {
        char.setCustomValidity("Let's get started. Please, enter your first name");
        char.style.borderColor = "red";
    } else if (val.length < 2) {
        char.setCustomValidity("We expect your input should contain at least 2 characters, darling!");
        char.style.borderColor = "red";
    } else if (!validator.isAlphabetic(val)) {
        char.setCustomValidity("Ooops... only alphabetic characters. Names contain neither digits nor keyboard symbols, right?!");
        char.style.borderColor = "red";
    } else {
        char.setCustomValidity("");
        char.style.borderColor = "green";
    }
}

// Validates user last name 
function isLNameValid(elem) {
    var value = elem.value;
    if (validator.isEmpty(value)) {
        elem.setCustomValidity("Yup... You shouldn't leave it blank. Enter your last name, please");
        elem.style.borderColor = "red";
    } else if (value.length < 2) {
        elem.setCustomValidity("NOTE: Your last name should contain at least 2 characters !");
        elem.style.borderColor = "red";
    } else if (!validator.isAlphabetic(value)) {
        elem.setCustomValidity("Ooops... only alphabetic characters. Names contain neither digits nor keyboard symbols, right?!");
        elem.style.borderColor = "red";
    } else {
        elem.setCustomValidity("");
        elem.style.borderColor = "green";
    }
}

// Validates user email 
function isEmailValid(input) {
    var val = input.value;
    if (validator.isEmpty(val)) {
        input.setCustomValidity("Please, enter your email");
        input.style.borderColor = "red";
    } else if (validator.isEmailAddress(val) !== true) {
        input.setCustomValidity("Okay, your email should not start and end with dot, only includes one @ in the middle.");
        input.style.borderColor = "red";
    } else {
        input.setCustomValidity("");
        input.style.borderColor = "green";
    }
}

// Validates user date of birth 
function isDOBValid(num) {
    var val = num.value;
    var minAge = 12;

    if (validator.isEmpty(val)) {
        num.setCustomValidity("Please, give me your DOB in 'yyyy/mm/dd' format");
        num.style.borderColor = "red";
    } else if ((getAge(val) < minAge) || (validator.isAfterToday(val))) {
        num.setCustomValidity("Are you 12 years old? Then you are good to have account with us.");
        num.style.borderColor = "red";
    } else {
        num.setCustomValidity("");
        num.style.borderColor = "green";
    }
}

// Validates user phone number 
function isPhoneValid(number) {
    var res = number.value;
    if (validator.isEmpty(res)) {
        number.setCustomValidity("Please, enter your phone number");
        number.style.borderColor = "red";
    } else if (validator.isPhoneNumber(res) !== true) {
        number.setCustomValidity("Your input has to be in right format. Please, check it once more");
        number.style.borderColor = "red";
    } else {
        number.setCustomValidity("");
        number.style.borderColor = "green";
    }
}

// Validates user password 
function isPassWord(chars) {
    var val = chars.value;
    if (validator.isEmpty(val)) {
        chars.setCustomValidity("Please, create a password");
        chars.style.borderColor = "red";
    } else if (val.length < 6 || val.length > 8) {
        chars.setCustomValidity("Your password has to be from 6 length long to 8");
        chars.style.borderColor = "red";
    } else {
        chars.setCustomValidity("");
        chars.style.borderColor = "green";
    }
}

// Confirms the password
function confPassword(input) {
    var passw2 = input.value;
    var passw1 = document.getElementById("passw").value;
    if (validator.isEmpty(passw2)) {
        input.setCustomValidity("Last but not least, please confirm your password for me !");
        input.style.borderColor = "red";
    } else if (passw1 !== passw2) {
        input.setCustomValidity("Hmm... Passwords are not matching! They should be identical.");
        input.style.borderColor = "red";
    } else {
        input.setCustomValidity("");
        input.style.borderColor = "green";
    }
  }
}






