let perso = document.querySelector(".perso");
let obstacle = document.querySelector(".obstacle");

// Rajoute un addEventListener sur les boutons mais ne marche pas donc j'ai fait un onclick dans le HTML

// let boutonSaut = document.querySelector(".boutonSauter");
// let boutonSeBaisser = document.querySelector(".boutonSeBaisser");

// boutonSaut.addEventListener("click", sauter());
// boutonSeBaisser.addEventListener("click", seBaisser());

function sauter() {
  if (perso.classList != "sauter" && perso.classList != "seBaisser") {
    perso.classList.add("sauter");

    setTimeout(function () {
      perso.classList.remove("sauter");
    }, 700);
  }
} 

function seBaisser() {
  if (perso.classList != "seBaisser" && perso.classList != "sauter") {
    perso.classList.add("seBaisser");

    setTimeout(function () {
      perso.classList.remove("seBaisser");
    }, 700);
  }
} 