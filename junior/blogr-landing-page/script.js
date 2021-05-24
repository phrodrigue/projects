var menu = document.querySelector(".menu");
let menuIcon = document.querySelector("#mobile-menu-btn");

document
  .querySelector("#mobile-menu-btn")
  .addEventListener("click", function () {
    if (menu.style.maxHeight == "0px") {
      menu.style.maxHeight = "1000px";
      menu.style.padding = "20px";
      menuIcon.src = "images/icon-close.svg"
    } else {
      menu.style.maxHeight = "0px";
      menu.style.padding = "0px";
      menuIcon.src = "images/icon-hamburger.svg"
    }
  });