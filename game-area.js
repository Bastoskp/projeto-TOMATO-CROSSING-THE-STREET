let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");

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
