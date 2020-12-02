//Criar Player1

class Player1 {
  constructor() {
    this.x = 180;
    this.y = 555;
    this.speed = 5;
    this.width = 50;
    this.height = 40;
    const img = new Image();
    img.addEventListener("load", () => {
      // Once image loaded => draw
      this.img = img;
    });
    img.src = "./imagens/ator-1.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveUp() {
    if (this.y > 0) {
      this.y -= this.speed;
    }
  }
  moveDown() {
    if (this.y < 595 - this.height) {
      this.y += this.speed;
    }
  }
}
const player = new Player1();
