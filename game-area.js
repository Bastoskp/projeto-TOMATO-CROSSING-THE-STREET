let button = document.getElementById("start-btn");
button.addEventListener("click", () => {
  myGameArea.start();
});

let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");

// const somColision = new Audio()
// somColision.src = 'colocar arquivo de som'

const myGameArea = {
  car1: [],
  frames: 0,
  score: 0,
  lives: 3,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  stop: () => {
    // console.log("stop");
    clearInterval(this.interval);
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
      // console.log(myGameArea.score);
      myGameArea.score = myGameArea.score + 1;
      // this.score ++
      // this.score += 1
      player.y = 550;
    }
  },
};

function updateGameArea() {
  myGameArea.clear();
  drawRoad();
  updateCar();
  myGameArea.atravessouARua(player);
  myGameArea.checkLives();
  player.detectColision(myGameArea.car1);
  player.draw();
  for (let i = 0; i < myGameArea.car1.length; i += 1) {
    myGameArea.car1[i].move();
    myGameArea.car1[i].draw();
  }
}
function backToStart() {
  player.y = 552;
}

function runOver() {
  myGameArea.lives -= 1;
  // console.log(myGameArea.lives);
}

function gameOver() {
  // console.log("teste");
  myGameArea.stop(); //mandar parar o jogo
  //mostrar a tela de game over
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
    myGameArea.car1.push(new Car(20, 330, 5.5, "left", "/imagens/carro-3.png"));
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

//myGameArea.start();

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
