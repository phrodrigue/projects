let itens = document.getElementsByClassName("input");
let divFormItem = document.getElementsByClassName("form-item");
let warningItem = document.getElementsByClassName("warning-item");
let re = /^\S+@\S+\.\S+$/;

function checkFields() {
  // Remove all red borders
  for (var i = 0; i < divFormItem.length; i++) {
    divFormItem[i].style.borderColor = "hsla(246, 25%, 77%, 0.501)";
  }

  // Remove all warnings icons
  for (var i = 0; i < warningItem.length; i++) {
    let item = warningItem[i];
    if (item.className.search("no-warning") == -1) {
      item.className += "no-warning";
    }
  }

  // Put a warning if the field is empty or if the email its not valid
  for (var i = 0; i < itens.length; i++) {
    var warningElement = divFormItem[i].getElementsByClassName("no-warning");
    if (itens[i].value === "" || (itens[i].id == "email" && !re.test(itens[i].value))) {
      for (var c = 0; c < 2; c++) {
        warningElement[0].className = warningElement[0].className.replace(
          "no-warning",
          ""
        ); // show the error icon
        divFormItem[i].style.borderColor = "var(--red)"; // change border color to red
      }
    }
  }
}
