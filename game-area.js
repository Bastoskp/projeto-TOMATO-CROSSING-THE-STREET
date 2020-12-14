let button = document.getElementById("start-btn");
button.addEventListener("click", () => {
  myGameArea.start();
});

// restart
const restartGame = document.querySelector(".restart");

const restart = () => {
  location.reload();
};
restartGame.addEventListener("click", restart);

let divCanvas = document.getElementById("canvas");
let divIntro = document.getElementById("intro");

let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");

let data = parseInt(localStorage.getItem(`bestScore`));
let bestScore = isNaN(data) ? 0 : data;

let colidiu = document.getElementById("audio1");
const somColision = new Audio();
somColision.src = "./sons/blood-squirt.flac";

let points = document.getElementById("audio2");
const somPoints = new Audio();
somPoints.src = "./sons/finish line.wav";

let trilha = document.getElementById("audio3");
const somTrilha = new Audio();
somTrilha.src = "./sons/transito.wav";
somTrilha.volume = 0.4;

const myGameArea = {
  car1: [],
  frames: 0,
  score: 0,
  lives: 5,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
    divIntro.style.display = "none";
    divCanvas.style.display = "block";

    // console.log(this.interval);
  },
  clear: () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  stop: () => {
    // console.log("stop", myGameArea.interval);
    clearInterval(myGameArea.interval);
  },

  checkLives: () => {
    // console.log("checklives");
    if (myGameArea.lives <= 0) {
      // console.log("morreu");
      gameOver(); // chamar game over
    }
  },

  atravessouARua: (player) => {
    if (player.y <= 0) {
      somPoints.play();
      // console.log(myGameArea.score);
      myGameArea.score = myGameArea.score + 1;
      somPoints.play();
      // this.score ++
      // this.score += 1

      player.y = 546;
    }
  },

  showScore: function () {
    ctx.fillStyle = "green";
    ctx.font = "20px Comic Sans MS";
    ctx.fillText(`SCORE: ${this.score}`, 40, 32);
  },

  bestScore: function () {
    ctx.fillStyle = "red";
    ctx.font = "20px Comic Sans MS";
    ctx.fillText(`BEST SCORE: ${bestScore}`, 200, 32);
  },

  checkLives: function () {
    ctx.fillStyle = "red";
    ctx.font = "20px Comic Sans MS";
    ctx.fillText(`LIVES: ${this.lives}`, 1050, 32);
  },

  screenGameOver: function () {
    myGameArea.clear();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1200, 600);
    ctx.fillStyle = "red";
    ctx.font = "50px Comic Sans MS";
    ctx.fillText(`GAME OVER  SCORE: ${myGameArea.score}`, 300, 325);
  },
};

function setBestScore() {
  if (myGameArea.score > bestScore) {
    bestScore = myGameArea.score;
    localStorage.setItem(`bestScore`, myGameArea.score);
  }
}

function checkGameOver() {
  if (myGameArea.lives <= 0) {
    myGameArea.stop();
    myGameArea.screenGameOver();
  }
}

function updateGameArea() {
  console.log("teste");
  myGameArea.clear();
  drawRoad();
  updateCar();
  myGameArea.showScore();
  myGameArea.bestScore();
  somTrilha.play();
  myGameArea.atravessouARua(player);
  myGameArea.checkLives();
  setBestScore();
  player.detectColision(myGameArea.car1);
  player.draw();
  for (let i = 0; i < myGameArea.car1.length; i += 1) {
    myGameArea.car1[i].move();
    myGameArea.car1[i].draw();
  }
  checkGameOver();
}

function backToStart() {
  player.y = 546;
}

function runOver() {
  myGameArea.lives -= 1;
  // console.log(myGameArea.lives);
}

function gameOver() {
  // console.log("teste");
  myGameArea.stop(); //mandar parar o jogo
}

function updateCar() {
  myGameArea.frames += 1;
  if (myGameArea.frames % 190 === 0) {
    myGameArea.car1.push(new Car(1125, 58, 3, "right", "/imagens/carro-1.png"));
  }
  if (myGameArea.frames % 150 === 0) {
    myGameArea.car1.push(
      new Car(1125, 118, 2.5, "right", "/imagens/carro-5.png")
    );
  }

  if (myGameArea.frames % 100 === 0) {
    myGameArea.car1.push(
      new Car(1125, 174, 5, "right", "/imagens/carro-8.png")
    );
  }

  if (myGameArea.frames % 300 === 0) {
    myGameArea.car1.push(
      new Car(1125, 232, 1.5, "right", "/imagens/carro-10.png")
    );
  }

  if (myGameArea.frames % 100 === 0) {
    myGameArea.car1.push(new Car(20, 335, 5.5, "left", "/imagens/carro-3.png"));
  }

  if (myGameArea.frames % 150 === 0) {
    myGameArea.car1.push(new Car(20, 390, 4.5, "left", "/imagens/carro-6.png"));
  }

  if (myGameArea.frames % 300 === 0) {
    myGameArea.car1.push(new Car(20, 450, 1.5, "left", "/imagens/carro-7.png"));
  }

  if (myGameArea.frames % 190 === 0) {
    myGameArea.car1.push(new Car(20, 505, 3.5, "left", "/imagens/carro-9.png"));
  }
}

function drawRoad() {
  //pista
  ctx.fillStyle = "#737373";
  ctx.fillRect(0, 0, 1200, 600);

  //calçadas
  ctx.fillStyle = "lightgray";
  ctx.fillRect(0, 0, 1200, 50);
  ctx.fillStyle = "lightgray";
  ctx.fillRect(0, 550, 1200, 600);
  //fim calçada

  //linhas do centro
  ctx.beginPath();
  ctx.moveTo(0, 285);
  ctx.lineTo(1200, 285);
  ctx.strokeStyle = "#feffa7";
  ctx.lineWidth = 12;
  ctx.stroke();

  ctx.moveTo(0, 315);
  ctx.lineTo(1200, 315);
  ctx.stroke();
  ctx.closePath();
  //fim linhas do centro

  //faixas da rua
  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 110, 8, 1);
  }

  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 165, 8, 1);
  }

  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 222, 8, 1);
  }

  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 380, 8, 1);
  }
  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 438, 8, 1);
  }
  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 495, 8, 1);
  }

  //fim faixas da rua
}

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 38) {
    player.moveUp();
  }
  if (e.keyCode === 40) {
    player.moveDown();
  }
  if (e.keyCode === 39) {
    player.moveRight();
  }
  if (e.keyCode === 37) {
    player.moveLeft();
  }
});
