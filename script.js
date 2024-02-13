let perso = document.querySelector(".perso");
let obstacle = document.querySelector(".obstacle");

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

// const persoRect = document.querySelector(".perso").getBoundingClientRect();
// const obstacleRect = document.querySelector(".obstacle").getBoundingClientRect();

// Essai des collisions
// function updatePositions() {
//   console.log(persoRect);
//   console.log(obstacleRect);
//   if (
//     persoRect.right >= obstacleRect.left &&
//     persoRect.bottom <= obstacleRect.top
//   ) {
//     alert(Perdu);
//   }

//   setInterval(updatePositions, 10);
// }
// updatePositions();

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
    }, 700);
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
    }, 700);
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

// setTimeout(function obstacleBouge2() {
//   let obstacleAleatoire = getRandomObstacle2();
//   let obstacleChoisi = document.querySelector(obstacleAleatoire);
//   obstacleChoisi.classList.add("animationObstacle");

//   setTimeout(function () {
//     obstacleChoisi.classList.remove("animationObstacle");
//   }, 2000);

//   setTimeout(obstacleBouge2, 2100);
// }, 1000);

// obstacleBouge();

let collision = setInterval(function () {
  let gojoBottom = parseInt(
    window.getComputedStyle(perso).getPropertyValue("bottom")
  );
  console.log(gojoBottom);
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );
  console.log(obstacleLeft);
  if (obstacleLeft <= 141 && obstacleLeft >= 50 && gojoBottom <= 145) {
    alert("Perdu");
  }
}, 1);
