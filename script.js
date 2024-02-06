let perso = document.querySelector(".perso");
let obstacle = document.querySelector(".obstacle");

// Rajoute un addEventListener sur les boutons mais ne marche pas donc j'ai fait un onclick dans le HTML

// let boutonSaut = document.querySelector(".boutonSauter");
// let boutonSeBaisser = document.querySelector(".boutonSeBaisser");

// boutonSaut.addEventListener("click", sauter());
// boutonSeBaisser.addEventListener("click", seBaisser());


// Fonction pour faire sauter le personnage
function sauter() {
  if (perso.classList != "sauter" && perso.classList != "seBaisser") {
    perso.classList.add("sauter");

    setTimeout(function () {
      perso.classList.remove("sauter");
    }, 700);
  }
}

// Fonction pour faire baisser le personnage
function seBaisser() {
  if (perso.classList != "seBaisser" && perso.classList != "sauter") {
    perso.classList.add("seBaisser");

    setTimeout(function () {
      perso.classList.remove("seBaisser");
    }, 700);
  }
}


let tousLesObstacles = [".obstacle", ".obstacle2"];

// Retourne un chiffre aléatoire entre 0 et la taille du tableau
function getRandomNumber(tableau) {
  return Math.floor(Math.random() * tableau);
}

// Retourne un des obstacles
function getRandomObstacle() {
  return tousLesObstacles[getRandomNumber(tousLesObstacles.length)];
}


// Fonction pour faire bouger un obstacle toutes les 2,1 secondes
function obstacleBouge() {
  let obstacleAleatoire = getRandomObstacle();
  let obstacleChoisi = document.querySelector(obstacleAleatoire);
  obstacleChoisi.classList.add("animationObstacle");

  setTimeout(function() {
    obstacleChoisi.classList.remove("animationObstacle");
  }, 2000);

  setTimeout(obstacleBouge,2100);
}

obstacleBouge();

