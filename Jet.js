class Jet {
  constructor(image) {
    this.x = random(width);
    this.y = random(height);
    this.image = image;
  }

  update() {
    this.goTheWayWereFacing();
    this.constrainToMap();
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

  draw() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    rotate(this.angle + HALF_PI);

    image(this.image, 0, 0);
    pop();
  }
}