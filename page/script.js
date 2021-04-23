var urlChallenge = "https://www.frontendmentor.io/challenges/"
var urlRepository = "https://github.com/phrodrigue/projects/tree/master/"
var urlSolution = "https://phrodrigue.github.io/projects/"

class Challenge {
  constructor(name, challenge, repository, solution, difficulty) {
    this.name = name
    this.challenge = urlChallenge + challenge
    this.difficulty = difficulty
    this.repository = urlRepository + this.difficulty + "/" + repository
    this.solution = urlSolution + this.difficulty  + "/"+ solution
  }
}



var listSolutions = [
  new Challenge(
    "3 Column Preview Card",
    "3column-preview-card-component-pH92eAR2-",
    "desafio-3-colunas-frontend-mentor/index.html",
    "desafio-3-colunas-frontend-mentor",
    "newbie"
  ),
  new Challenge(
    "Profile Card Component",
    "profile-card-component-cfArpWshJ",
    "profile-card-component",
    "profile-card-component",
    "newbie"
  ),
  new Challenge(
    "Single Price Grid Component",
    "single-price-grid-component-5ce41129d0ff452fec5abbbc",
    "single-price-grid-component",
    "single-price-grid-component",
    "newbie"
  ),
  new Challenge(
    "Article Preview",
    "article-preview-component-dYBN_pYFT",
    "article-preview",
    "article-preview",
    "newbie"
  ),
  new Challenge(
    "Social Proof Section",
    "social-proof-section-6e0qTv_bA",
    "social-proof-section",
    "social-proof-section",
    "newbie"
  ),
  new Challenge(
    "Huddle landing page with a single introductory section",
    "huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0",
    "huddle-landing-page-with-single-introductory-section/",
    "huddle-landing-page-with-single-introductory-section/",
    "newbie"
  ),
  new Challenge(
    "Four card feature section",
    "four-card-feature-section-weK1eFYK",
    "four-card-feature-section",
    "four-card-feature-section",
    "newbie"
  ),
  new Challenge(
    "Base Apparel coming soon page",
    "base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0",
    "base-apparel-coming-soon-master",
    "base-apparel-coming-soon-master",
    "newbie"
  ),
  new Challenge(
    "Coding bootcamp testimonials slider",
    "coding-bootcamp-testimonials-slider-4FNyLA8JL",
    "coding-bootcamp-testimonials-slider/index.html",
    "coding-bootcamp-testimonials-slider",
    "newbie"
  ),
    new Challenge(
        "desafio teste",
        "desafio-teste",
        "desafio-teste",
        "desafio-teste",
        "junior"
    ),
    new Challenge(
        "desafio teste",
        "desafio-teste",
        "desafio-teste",
        "desafio-teste",
        "intermediate"
    ),
    new Challenge(
        "desafio teste",
        "desafio-teste",
        "desafio-teste",
        "desafio-teste",
        "advanced"
    ),
    new Challenge(
        "desafio teste",
        "desafio-teste",
        "desafio-teste",
        "desafio-teste",
        "guru"
    ),


  /*
    new Challenge(
        "",
        "",
        "",
        "",
        ""
    ),
    */

]


// document.querySelector(".dados").addEventListener()

//USAR JS PARA POVOAR OS ITENS COM A LISTA ACIMA

// function mostrar(n) {
//     var itens = document.getElementsByClassName("links--animated")
//     var selectedChallenge = itens[n]

//     if (selectedChallenge.style.display == "none") {
//         for (var i = 0; i < itens.length; i++) {
//             itens[i].style.display = "none"
//         }
//         selectedChallenge.style.display = "block"
//     } else {
//         selectedChallenge.style.display = "none"
//     }
// }

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

    //<img src="page/images/down-arrow.svg">
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


document.getElementById("title").addEventListener("click", function() {
  var dif = document.getElementById("colors")

  if (dif.style.display == "none") {
    dif.style.display = "grid"
  } else {
    dif.style.display = "none"
  }
})