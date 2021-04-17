var inputEmail = document.getElementById("inputEmail");
var iconError = document.getElementById("icon-error");
var errorMessage = document.getElementById("error-message")
var inputField = document.getElementById("email-input")

function validateEmail(email) {
    var re = /^\S+@\S+\.\S+$/;
    return re.test(email);
}

function checkEmail() {
    var email = inputEmail.value
    
    if (validateEmail(email)) {
        iconError.style.display = "none"
        errorMessage.style.display = "none"
        inputField.style.border = "2px hsl(0, 80%, 86%) solid"

        console.log("email valido")
    } else {
        iconError.style.display = "block"
        errorMessage.style.display = "block"
        inputField.style.border = "2px hsl(0, 93%, 68%) solid"

        console.log(':(')
    }
}