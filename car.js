//Criar Obstaculos
class Car {
  constructor() {
    this.x = 1125;
    this.y = 58;
    this.speed = 2;
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
    this.x -= this.speed;
  }
}
const car = new Car();

class Car2 {
  constructor() {
    this.x = 1125;
    this.y = 116;
    this.speed = 3;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-2.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
  move() {
    this.x -= this.speed;
  }
}
const car2 = new Car2();

class Car3 {
  constructor() {
    this.x = 1125;
    this.y = 174;
    this.speed = 5;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-3.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
  move() {
    this.x -= this.speed;
  }
}
const car3 = new Car3();

class Car4 {
  constructor() {
    this.x = 1125;
    this.y = 232;
    this.speed = 1.5;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-5.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
  move() {
    this.x -= this.speed;
  }
}
const car4 = new Car4();

class Car5 {
  constructor() {
    this.x = 20;
    this.y = 320;
    this.speed = 5.5;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-3.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
  move() {
    this.x += this.speed;
  }
}
const car5 = new Car5();

class Car6 {
  constructor() {
    this.x = 20;
    this.y = 378;
    this.speed = 4.5;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-6.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
  move() {
    this.x += this.speed;
  }
}
const car6 = new Car6();

class Car7 {
  constructor() {
    this.x = 20;
    this.y = 436;
    this.speed = 1.5;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-7.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
  move() {
    this.x += this.speed;
  }
}
const car7 = new Car7();

class Car8 {
  constructor() {
    this.x = 20;
    this.y = 494;
    this.speed = 3.5;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-3.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
  move() {
    this.x += this.speed;
  }
}
const car8 = new Car8();
