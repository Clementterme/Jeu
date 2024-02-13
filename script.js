let perso = document.querySelector(".perso");
let obstacle = document.querySelector(".obstacle");
let obstacle2 = document.querySelector(".obstacle2");
let obstacle3 = document.querySelector(".obstacle3");
let obstacle4 = document.querySelector(".obstacle4");
let obstacle5 = document.querySelector(".obstacle5");
let obstacle6 = document.querySelector(".obstacle6");

// Mes fonctions sauter seBaisser et kick s'exécutent avec les flèches haut bas et droite
document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    sauter();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowDown") {
    seBaisser();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    kick();
  }
}); 

// Fonction pour faire sauter le personnage
function sauter() {
  if (
    perso.classList != "sauter" &&
    perso.classList != "seBaisser" &&
    perso.classList != "kick"
  ) {
    perso.classList.add("sauter");

    setTimeout(function () {
      perso.classList.remove("sauter");
    }, 800);
  }
}

// Fonction pour faire baisser le personnage
function seBaisser() {
  if (
    perso.classList != "seBaisser" &&
    perso.classList != "sauter" &&
    perso.classList != "kick"
  ) {
    perso.classList.add("seBaisser");

    setTimeout(function () {
      perso.classList.remove("seBaisser");
    }, 800);
  }
}

// Fonction pour que le personnage mette un coup
function kick() {
  if (
    perso.classList != "seBaisser" &&
    perso.classList != "sauter" &&
    perso.classList != "kick"
  ) {
    perso.classList.add("kick");

    setTimeout(function () {
      perso.classList.remove("kick");
    }, 700);
  }
}

let tousLesObstacles = [".obstacle", ".obstacle2", ".obstacle3"];
let tousLesObstacles2 = [".obstacle4", ".obstacle5", ".obstacle6"];

// Retourne un chiffre aléatoire entre 0 et la taille du tableau
function getRandomNumber(tableau) {
  return Math.floor(Math.random() * tableau);
}

// Retourne un des obstacles du premier tableau
function getRandomObstacle() {
  return tousLesObstacles[getRandomNumber(tousLesObstacles.length)];
}

// Retourne un des obstacles du deuxième tableau
function getRandomObstacle2() {
  return tousLesObstacles2[getRandomNumber(tousLesObstacles2.length)];
}

// Fonction pour faire bouger un obstacle toutes les 2,1 secondes
function obstacleBouge() {
  let obstacleAleatoire = getRandomObstacle();
  let obstacleChoisi = document.querySelector(obstacleAleatoire);
  obstacleChoisi.classList.add("animationObstacle");

  setTimeout(function () {
    obstacleChoisi.classList.remove("animationObstacle");
  }, 2000);

  setTimeout(obstacleBouge, 2100);
}

setTimeout(function obstacleBouge2() {
  let obstacleAleatoire = getRandomObstacle2();
  let obstacleChoisi = document.querySelector(obstacleAleatoire);
  obstacleChoisi.classList.add("animationObstacle");

  setTimeout(function () {
    obstacleChoisi.classList.remove("animationObstacle");
  }, 2000);

  setTimeout(obstacleBouge2, 2100);
}, 1000);

obstacleBouge();

let collision = setInterval(function () {
  let gojoBottom = parseInt(window.getComputedStyle(perso).getPropertyValue("bottom"));
  let gojoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
  let gojoWidth = parseInt(window.getComputedStyle(perso).getPropertyValue("width"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  let obstacleLeft2 = parseInt(window.getComputedStyle(obstacle2).getPropertyValue("left"));
  let obstacleLeft3 = parseInt(window.getComputedStyle(obstacle3).getPropertyValue("left"));
  let obstacleLeft4 = parseInt(window.getComputedStyle(obstacle4).getPropertyValue("left"));
  let obstacleLeft5 = parseInt(window.getComputedStyle(obstacle5).getPropertyValue("left"));
  let obstacleLeft6 = parseInt(window.getComputedStyle(obstacle6).getPropertyValue("left"));

  if (obstacleLeft <= 141 && obstacleLeft >= 50 && gojoBottom <= 145) {
    alert("Perdu");
  }
  if (obstacleLeft4 <= 141 && obstacleLeft4 >= 50 && gojoBottom <= 145) {
    alert("Perdu");
  }
  if (obstacleLeft2 <= 141 && obstacleLeft2 >= 50 && gojoTop <= 230) {
    alert("Perdu");
  }
  if (obstacleLeft5 <= 141 && obstacleLeft5 >= 50 && gojoTop <= 230) {
    alert("Perdu");
  }
  if (obstacleLeft3 <= 141 && obstacleLeft3 >= 50 && gojoWidth >= 54) {
    obstacle3.classList.remove("animationObstacle");
  }
  if (obstacleLeft3 <= 141 && obstacleLeft3 >= 50 && gojoWidth < 54) {
    alert("Perdu");
  }
  if (obstacleLeft6 <= 141 && obstacleLeft6 >= 50 && gojoWidth >= 54) {
    obstacle6.classList.remove("animationObstacle");
  }
  if (obstacleLeft6 <= 141 && obstacleLeft6 >= 50 && gojoWidth < 54) {
    alert("Perdu");
  }
}, 1);
