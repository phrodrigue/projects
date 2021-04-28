var bar = document.getElementsByClassName("progress")[0];

bar.addEventListener("click", function (e) {
  bar.style.transition = "50ms";
  var tam = 0;
  var id = setInterval(add, 500);

  function add() {
    if (tam >= 100) {
      bar.style.width = `81.5%`;
      clearInterval(id);
    } else {
      tam += 20;
      bar.style.width = `${tam}%`;
    }
  }
});
