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

class Car2 {
  constructor() {
    this.x = 20;
    this.y = 116;
    this.speedY = 0;
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
}
const car2 = new Car2();

class Car3 {
  constructor() {
    this.x = 20;
    this.y = 174;
    this.speedY = 0;
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
}
const car3 = new Car3();

class Car4 {
  constructor() {
    this.x = 20;
    this.y = 232;
    this.speedY = 0;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-8.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
}
const car4 = new Car4();

class Car5 {
  constructor() {
    this.x = 20;
    this.y = 320;
    this.speedY = 0;
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
}
const car5 = new Car5();

class Car6 {
  constructor() {
    this.x = 20;
    this.y = 378;
    this.speedY = 0;
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
}
const car6 = new Car6();

class Car7 {
  constructor() {
    this.x = 20;
    this.y = 436;
    this.speedY = 0;
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
}
const car7 = new Car7();

class Car8 {
  constructor() {
    this.x = 20;
    this.y = 494;
    this.speedY = 0;
    const img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      this.draw();
    });
    img.src = "./imagens/carro-4.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 60, 40);
  }
}
const car8 = new Car8();
