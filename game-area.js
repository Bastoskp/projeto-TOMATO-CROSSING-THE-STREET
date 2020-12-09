let button = document.getElementById("start-btn");
button.addEventListener("click", () => {
  myGameArea.start();
});

let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");

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
};

function updateGameArea() {
  myGameArea.clear();
  drawRoad();
  updateCar();
  myGameArea.checkLives();
  player.detectColision(myGameArea.car1);
  player.draw();
  for (let i = 0; i < myGameArea.car1.length; i += 1) {
    myGameArea.car1[i].move();
    myGameArea.car1[i].draw();
  }
}
function backToStart() {
  player.y = 555;
}

function runOver() {
  myGameArea.lives -= 1;
  // console.log(myGameArea.lives);
}

function gameOver() {
  console.log("teste");
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
      new Car(1125, 116, 2.5, "right", "/imagens/carro-5.png")
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
    myGameArea.car1.push(new Car(20, 320, 5.5, "left", "/imagens/carro-3.png"));
  }

  if (myGameArea.frames % 150 === 0) {
    myGameArea.car1.push(new Car(20, 378, 4.5, "left", "/imagens/carro-6.png"));
  }

  if (myGameArea.frames % 300 === 0) {
    myGameArea.car1.push(new Car(20, 436, 1.5, "left", "/imagens/carro-7.png"));
  }

  if (myGameArea.frames % 190 === 0) {
    myGameArea.car1.push(new Car(20, 494, 3.5, "left", "/imagens/carro-9.png"));
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
  ctx.moveTo(0, 290);
  ctx.lineTo(1200, 290);
  ctx.strokeStyle = "#feffa7";
  ctx.lineWidth = 10;
  ctx.stroke();

  ctx.moveTo(0, 310);
  ctx.lineTo(1200, 310);
  ctx.stroke();
  ctx.closePath();
  //fim linhas do centro

  //faixas da rua
  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 110, 8, 1);
  }

  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 170, 8, 1);
  }

  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 230, 8, 1);
  }

  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 370, 8, 1);
  }
  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 430, 8, 1);
  }
  for (i = 0; i < 201; i++) {
    ctx.fillRect(1 + i * 20, 490, 8, 1);
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
