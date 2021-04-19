var inputEmail = document.getElementById("inputEmail");
var iconError = document.getElementById("icon-error");
var errorMessage = document.getElementById("error-message")
var divInput = document.getElementById("email-input")


function checkEmail() {
    var re = /^\S+@\S+\.\S+$/;
    var email = inputEmail.value
    var borderNormal = "2px hsl(0, 80%, 86%) solid"
    var borderError = "2px hsl(0, 93%, 68%) solid"
    var textErrorMessage = ""

    if (re.test(email)) {
        iconError.style.visibility = "hidden"
        errorMessage.style.visibility = "hidden"
        inputEmail.style.borderTop = borderNormal
        inputEmail.style.borderBottom = borderNormal
        inputEmail.style.borderLeft = borderNormal
        divInput.style.border = borderNormal
    } else {
        if (email === "") {
            textErrorMessage = "Please provide an email"
        } else {
            textErrorMessage = "Please provide a valid email"
        }

        iconError.style.visibility = "visible"
        errorMessage.style.visibility = "visible"
        errorMessage.innerHTML = textErrorMessage
        inputEmail.style.borderTop = borderError
        inputEmail.style.borderBottom = borderError
        inputEmail.style.borderLeft = borderError
        divInput.style.border = borderError
    }
}