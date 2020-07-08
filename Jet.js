class Jet {
  constructor(image) {
    this.x = random(width);
    this.y = random(height):
    this.image = image;
  }

  draw() {
    image(this.image, this.x, this.y);
  }
}