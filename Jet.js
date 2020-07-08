class Jet {
  constructor(image) {
    this.x = random(width);
    this.y = random(height);
    this.image = image;

    this.angle = 0;
    this.speed = 0.7;

    this.rotateAmount = 0;

    this.bullets = [];
    this.isWhite = isWhite;
  }

  update() {
    this.goTheWayWereFacing();
    this.constrainToMap();

    this.angle += this.rotateAmount;
  }

  goTheWayWereFacing() {
    this.x += this.speed * sin(this.angle);
    this.y += this.speed * cos(this.angle);
  }

  constrainToMap() {
    if (this.x < -this.image.width) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }

    if (this.y > height) {
      this.y = 0;
    } else if (this.y < -this.image.height) {
      this.y = height;
    }
  }

  shoot() {
    let bullet = new Bullet(this.x, this.y, this.angle, this.isWhite);
    this.bullets.push(bullet);
  }

  draw() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    rotate(this.angle + HALF_PI);

    image(this.image, 0, 0);
    pop();

    this.drawBullets();
  }

  drawBullets() {
    for (let bullet of this.bullets) {
      bullet.update();
      bullet.draw();
    }
  }
}