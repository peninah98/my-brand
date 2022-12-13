// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementById("form");
const email = document.getElementById("email");
const password =document.getElementById("password")
const emailError = document.querySelector("#emailError");

const passwordError = document.querySelector("#passwordError");

email.addEventListener("input", (event) => {
    
    if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.textContent = ""; // Reset the content of the message
        emailError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});



form.addEventListener("submit", (event) => {
    // if the email field is valid, we let the form submit
    if (!email.validity.valid ) {
        // If it isn't, we display an appropriate error message
        showError();
       
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }

    else if(!password.validity.valid){
         showErrorPassword();

         event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        emailError.textContent = "You need to enter an e-mail address.";
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if (email.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    else if(email.validity.patternMismatch){
        emailError.textContent = "pattern "
    }
    // Set the styling appropriately
    emailError.className = "error active";
}



password.addEventListener("input", (event) => {
    
    if (password.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        passwordError.textContent = ""; // Reset the content of the message
        passwordError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showErrorPassword();
    }
});



function showErrorPassword() {
    if (password.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        passwordError.textContent = "You need to enter a password.";
    } else if (password.validity.typeMismatch) {
        // If the field doesn't contain an password,
        // display the following error message.
        passwordError.textContent = "Entered value needs to be a strong password.";
    } else if (password.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        passwordError.textContent = `Email should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    }

    else if(password.validity.patternMismatch){
        passwordError.textContent = "password must be strong "
    }
    // Set the styling appropriately
    passwordError.className = "error active";
}





