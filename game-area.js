let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");

const myGameArea = {
  car1: [],
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
};

function updateGameArea() {
  myGameArea.clear();
  drawRoad();
  player.draw();
  car.move();
  car2.move();
  car3.move();
  car4.move();
  car5.move();
  car6.move();
  car7.move();
  car8.move();
  car.draw();
  car2.draw();
  car3.draw();
  car4.draw();
  car5.draw();
  car6.draw();
  car7.draw();
  car8.draw();
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

myGameArea.start();

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 38) {
    player.moveUp();
  }
  if (e.keyCode === 40) {
    player.moveDown();
  }
});
