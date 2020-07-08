let blackJet;
let whiteJet;

let blackJetImage;
let whiteJetImage;
const ROTATE_AMOUNT = 0.05;

function preload() {
  blackJetImage = loadImage("black-jet.png");
  whiteJetImage = loadImage("white-jet.png");
}

function setup() {
  createCanvas(400, 400);
  blackJet = new Jet(blackJetImage);
  whiteJet = new Jet(whiteJetImage);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    blackJet.rotateAmount = ROTATE_AMOUNT;
  } else if (keyCode === LEFT_ARROW) {
    blackJet.rotateAmount = -ROTATE_AMOUNT;
  } else if (keyCode === 68) {
    whiteJet.rotateAmount = ROTATE_AMOUNT;
  } else if (keyCode === 65) {
    whiteJet.rotateAmount = -ROTATE_AMOUNT;
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    blackJet.rotateAmount = 0;
  } else if (keyCode === 65 || keyCode === 68) {
    whiteJet.rotateAmount = 0;
  }
}

function draw() {
  background(130);

  blackJet.draw();
  whiteJet.draw();
}