// ^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$

function checkEmail() {
  let email = document.querySelector("#email");
  let errorMessage = document.querySelector("#error-message")
  var message = ""
  var error = false

  if (email.value === "") {
    message = "Whoops! It looks like you forgot to add your email"
    error = true
  } else if (!email.validity.valid) {
    message = "Please provide a valid email address"
    error = true
  }
  
  if (error) {
    errorMessage.innerHTML = message
    errorMessage.style.display = "block"
    email.style.borderColor = "var(--light-red)"
  } else {
    errorMessage.style.display = "none"
    email.style.borderColor = "var(--pale-blue)"
  }
}