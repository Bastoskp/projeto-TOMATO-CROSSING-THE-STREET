//Criar Obstaculos
function carObstaculo(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

carObstaculo(25, 55, 55, 30, "turquoise");
carObstaculo(25, 104, 55, 30, "orange");
carObstaculo(25, 515, 55, 30, "magenta");

// Movimentar Obstaculos
