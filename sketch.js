let blackJet;
let whiteJet;

let blackJetImage;
let whiteJetImage;

function preload() {
  blackJetImage = loadImage("black-jet.png");
  whiteJetImage = loadImage("white-jet.png");
}

function setup() {
  createCanvas(400, 400);
  blackJet = new Jet(blackJetImage);
  whiteJet = new Jet(whiteJetImage);
}

function draw() {
  background(130);

  blackJet.draw();
  whiteJet.draw();
}