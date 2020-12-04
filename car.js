//Criar Obstaculos
class Car {
  constructor(x, y, speed, start) {
    this.start = start;
    this.x = x;
    this.y = y;
    this.speed = speed;
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
  move() {
    if (this.start === "right") {
      this.x -= this.speed;
    } else {
      this.x += this.speed;
    }
  }
}
const car = new Car(1125, 58, 2, "right");
const car2 = new Car(1125, 116, 3, "right");
const car3 = new Car(1125, 174, 5, "right");
const car4 = new Car(1125, 232, 1.5, "right");
const car5 = new Car(20, 320, 5.5, "left");
const car6 = new Car(20, 378, 4.5, "left");
const car7 = new Car(20, 436, 1.5, "left");
const car8 = new Car(20, 494, 3.5, "left");
