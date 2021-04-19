var urlChallenge = "https://www.frontendmentor.io/challenges/"
var urlRepository = "https://phrodrigue.github.io/"
var urlSolution = "https://github.com/phrodrigue/phrodrigue.github.io/tree/master/"

class Challenge {
    constructor(name, challenge, repository, solution) {
        this.name = name
        this.challenge = urlChallenge + challenge
        this.repository = urlRepository + repository
        this.solution = urlSolution + solution
    }
}


var listSolutions = [
    new Challenge(
        "3 Column Preview Card",
        "3column-preview-card-component-pH92eAR2-",
        "newbie/desafio-3-colunas-frontend-mentor/index.html",
        "newbie/desafio-3-colunas-frontend-mentor"
    ),
    new Challenge(
        "Profile Card Component",
        "profile-card-component-cfArpWshJ",
        "newbie/profile-card-component",
        "newbie/profile-card-component"
    ),
    new Challenge(
        "Single Price Grid Component",
        "single-price-grid-component-5ce41129d0ff452fec5abbbc",
        "newbie/single-price-grid-component",
        "newbie/single-price-grid-component"
    ),
    new Challenge(
        "Article Preview",
        "article-preview-component-dYBN_pYFT",
        "newbie/article-preview",
        "newbie/article-preview"
    ),
    new Challenge(
        "Social Proof Section",
        "social-proof-section-6e0qTv_bA",
        "newbie/social-proof-section",
        "newbie/social-proof-section"
    ),
    new Challenge(
        "Huddle landing page with a single introductory section",
        "huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0",
        "newbie/huddle-landing-page-with-single-introductory-section/",
        "newbie/huddle-landing-page-with-single-introductory-section/"
    ),
    new Challenge(
        "Four card feature section",
        "four-card-feature-section-weK1eFYK",
        "newbie/four-card-feature-section",
        "newbie/four-card-feature-section"
    ),
    new Challenge(
        "Base Apparel coming soon page",
        "base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0",
        "newbie/base-apparel-coming-soon-master",
        "newbie/base-apparel-coming-soon-master"
        ),
        
        
        /*
    OBS.: PASSAR ESSA PORRA PRA JSON
    new Challenge(
        "",
        "",
        "newbie/",
        "newbie/"
    ),
    */

]

var table = document.querySelector("#table")


function createTable() {
    for (var i = 0; i < listSolutions.length; i++) {
        var htmlChallenge = `<tr><td class="challenge"><a href="${listSolutions[i]["challenge"]}" target="_blank">${listSolutions[i]["name"]}</a></td><td>`

        var htmlRepository = `<a href="${listSolutions[i]["repository"]}" target="_blank">here</a></td>`

        var htmlSolution = `<td><a href="${listSolutions[i]["solution"]}" target="_blank">here</a></td></tr>`

        var html = htmlChallenge + htmlRepository + htmlSolution

        table.innerHTML += html
    }
}