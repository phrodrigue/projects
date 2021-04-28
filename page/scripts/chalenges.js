class Challenge {
  constructor(challengeName, challenge, condensedName, difficulty) {
    let urlChallenge = "https://www.frontendmentor.io/challenges/";
    let urlRepository = "https://github.com/phrodrigue/projects/tree/master/";
    let urlSolution = "https://phrodrigue.github.io/projects/";

    this.name = challengeName;
    this.challenge = urlChallenge + challenge;
    this.difficulty = difficulty;
    this.repository = urlRepository + this.difficulty + "/" + condensedName;
    this.solution = urlSolution + this.difficulty + "/" + condensedName;
  }
}

var listSolutions = [
  new Challenge(
    "3 Column Preview Card",
    "3column-preview-card-component-pH92eAR2-",
    "desafio-3-colunas-frontend-mentor",
    "newbie"
  ),
  new Challenge(
    "Profile Card Component",
    "profile-card-component-cfArpWshJ",
    "profile-card-component",
    "newbie"
  ),
  new Challenge(
    "Single Price Grid Component",
    "single-price-grid-component-5ce41129d0ff452fec5abbbc",
    "single-price-grid-component",
    "newbie"
  ),
  new Challenge(
    "Article Preview",
    "article-preview-component-dYBN_pYFT",
    "article-preview",
    "newbie"
  ),
  new Challenge(
    "Social Proof Section",
    "social-proof-section-6e0qTv_bA",
    "social-proof-section",
    "newbie"
  ),
  new Challenge(
    "Huddle landing page with a single introductory section",
    "huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0",
    "huddle-landing-page-with-single-introductory-section/",
    "newbie"
  ),
  new Challenge(
    "Four card feature section",
    "four-card-feature-section-weK1eFYK",
    "four-card-feature-section",
    "newbie"
  ),
  new Challenge(
    "Base Apparel coming soon page",
    "base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0",
    "base-apparel-coming-soon-master",
    "newbie"
  ),
  new Challenge(
    "Coding bootcamp testimonials slider",
    "coding-bootcamp-testimonials-slider-4FNyLA8JL",
    "coding-bootcamp-testimonials-slider",
    "newbie"
  ),
  new Challenge(
    "Intro component with sign-up form",
    "intro-component-with-signup-form-5cf91bd49edda32581d28fd1",
    "intro-component-with-signup-form",
    "newbie"
  ),
  new Challenge(
    "Ping single column coming soon page",
    "ping-single-column-coming-soon-page-5cadd051fec04111f7b848da",
    "ping-coming-soon-page",
    "newbie"
  ),
  new Challenge(
    "Testimonials grid section",
    "testimonials-grid-section-Nnw6J7Un7",
    "testimonials-grid-section",
    "junior"
  ),
  new Challenge(
    "Fylo data storage component",
    "fylo-data-storage-component-1dZPRbV5n",
    "fylo-data-storage-component",
    "junior"
  ),
  /* 
  new Challenge(
      "",
      "",
      "",
      ""
  ),
  */
];
