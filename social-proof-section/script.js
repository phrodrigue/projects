function loadStars() {
    var html_star = "<div class='stars'>"
    for (var star = 0; star < 5; star++) {
        html_star += "<img src='./images/icon-star.svg'>"
    }
    html_star += "</div><br>"
    var divs_rating = document.getElementsByClassName("rating")
    for (var i = 0; i < divs_rating.length; i++) {
        divs_rating[i].innerHTML = html_star + divs_rating[i].innerHTML
    }
}