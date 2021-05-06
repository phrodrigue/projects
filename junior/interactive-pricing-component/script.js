const allPrices = [{
  pageviews: "10K",
  price: 8
}, {
  pageviews: "50K",
  price: 12
}, {
  pageviews: "100K",
  price: 16
}, {
  pageviews: "500K",
  price: 24
}, {
  pageviews: "1M",
  price: 36
}]


let htmlPageviews = document.querySelector("#pageviews")
let slider = document.querySelector("#slider")

let htmlPrice = document.querySelector("#price-number")

let toggle = document.getElementsByClassName("toggle-type-billing")[0]
let dot = document.querySelector("#dot")

var yearlyBilling = false

slider.addEventListener("input", changePrice)

toggle.addEventListener("click", function(e) {
  if (dot.style.float == "right") {
    yearlyBilling = false
    dot.style.float = "left"
    toggle.classList.remove("active")
    toggle.classList.add("inactive")
  } else {
    yearlyBilling = true
    dot.style.float = "right"
    toggle.classList.add("active")
    toggle.classList.remove("inactive")
  }
  changePrice(e)
})

function changePrice(e) {
  var sv = slider.value
  htmlPageviews.innerHTML = `${allPrices[sv].pageviews} Pageviews`
  var multiplier = yearlyBilling ? 0.75 : 1
  var finalPrice = allPrices[sv].price * multiplier
  htmlPrice.innerHTML = `$${finalPrice}.00`
}