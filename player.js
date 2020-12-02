//Criar Player1

class Player1 {
  constructor() {
    this.x = 150;
    this.y = 550;
    const img = new Image();
    img.addEventListener("load", () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/ator-1.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 55, 45);
  }
}
const player = new Player1();
