//Criar Obstaculos
class Car {
  constructor(x, y, speed, start, image) {
    this.start = start;
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 35;
    this.speed = speed;
    this.img = new Image();
    // img.addEventListener("load", () => {
    //   this.img = img;
    //   //  this.draw();
    // });
    this.img.src = image;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (this.start === "right") {
      this.x -= this.speed;
    } else {
      this.x += this.speed;
    }
  }
}
