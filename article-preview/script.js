function toggle_share() {
    var div_share = document.getElementById("div-options-share")

    if (div_share.style.display === "none") {
        div_share.style.display = "grid"
        div_share.style.animation = "fadeIn 0.3s linear"
    } else {
        div_share.style.display = "none"
    }
}