var local = document.getElementById("solutions")

function carregar() {
  listSolutions.forEach((element, index) => {
    var htmlDifficulty = document.querySelector(".diff-" + element.difficulty)

    if (htmlDifficulty == null) {
      local.innerHTML += `
        <li class="difficulty-menu diff-${element.difficulty}">
          <div class="difficulty-name"><h2>${element.difficulty}</h2></div>
        </li>`
      htmlDifficulty = document.querySelector(".diff-" + element.difficulty)
    }
    
    var html = `
      <div class="challenge">
        <div class="challenge-name ${element.difficulty}">
          ${element.name}
          <div class="arrow"></div>
        </div>
        <div class="links--animated">
          <div class="links">
            <div class="link">
              <a href="${element.challenge}" target="_blank">Challenge</a>
            </div>
            <div class="link">
              <a href="${element.solution}" target="_blank">Solution</a>
            </div>
            <div class="link">
              <a href="${element.repository}" target="_blank">Repository</a>
            </div>
          </div>
        </div>
      </div>`


    htmlDifficulty.innerHTML += html
  });
}