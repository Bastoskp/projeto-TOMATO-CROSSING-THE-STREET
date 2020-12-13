//Criar Player1

class Player1 {
  constructor() {
    this.x = 180;
    this.y = 548;
    this.speed = 15;
    this.width = 75;
    this.height = 52;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
    });
    img.src = "./imagens/tomate1.png";
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
  moveRight() {
    if (this.x > 0) {
      this.x += this.speed;
    }
  }
  moveLeft() {
    if (this.x < 1200) {
      this.x -= this.speed;
    }
  }
  detectColision(cars) {
    for (let i = 0; i < cars.length; i += 1) {
      if (
        this.x < cars[i].x + cars[i].width &&
        this.x + this.width > cars[i].x &&
        this.y < cars[i].y + cars[i].height &&
        this.y + this.height > cars[i].y
      ) {
        somColision.play();
        // console.log("bateu");
        backToStart();
        runOver();
      }
    }
  }
}
const player = new Player1();
