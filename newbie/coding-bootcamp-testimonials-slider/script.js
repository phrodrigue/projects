var images = document.getElementsByClassName("image")
var quotes = document.getElementsByClassName("quote")

var quoteIndex = 0
showQuote(quoteIndex)

function changeQuote(n) {
    showQuote(quoteIndex += n)
}

function showQuote(n) {
    if (n > quotes.length - 1) {
        quoteIndex = 0
    }
    if (n < 0) {
        quoteIndex = quotes.length - 1
    }

    for (var i = 0; i < quotes.length; i++) {
        images[i].style.display = "none"
        quotes[i].style.display = "none"
    }

    var currentImage = images[quoteIndex]
    var currentQuote = quotes[quoteIndex]

    currentImage.style.display = "block"
    currentQuote.style.display = "block"
}