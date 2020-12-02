//Criar Obstaculos
class Car {
  constructor() {
    this.x = 20;
    this.y = 58;
    this.speedY = 0;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-1.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
}
const car = new Car();
