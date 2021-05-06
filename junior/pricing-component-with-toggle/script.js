let checkbox = document.getElementById("checkbox");
let priceNumbers = document.getElementsByClassName("price-number");

checkbox.addEventListener("change", function () {
  for (var i = 0; i < priceNumbers.length; i++) {
    [priceNumbers[i].dataset.textSwap, priceNumbers[i].textContent] = [
      priceNumbers[i].textContent,
      priceNumbers[i].dataset.textSwap,
    ];
  }
});
