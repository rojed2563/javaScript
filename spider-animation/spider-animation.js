let bodyX = 200;
let bodyY = 2;

let bodyW = 5;
let bodyH = 0.70 * bodyW;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(133, 27, 44);
  stroke(199, 199, 199);
  line(200, 0, 200, bodyY);

  fill(3, 3, 3);
  noStroke();
  beginShape();
  vertex(bodyX - 0.13 *bodyW, bodyY -1.35 * bodyH);
  vertex(bodyX - 0.6 *bodyW, bodyY - 1.08 *bodyH);
  vertex(bodyX - 0.33 * bodyW, bodyY -0.4 * bodyH);
  vertex(bodyX + 0.04 * bodyW, bodyY - 0.5 * bodyH);
  endShape(CLOSE);

  stroke(3, 3, 3);
  strokeWeight(4);
  line(bodyX - 0.43 * bodyW, bodyY-0.37 *bodyH, bodyX + 0.19 * bodyW, bodyY -0.59 * bodyH);

  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(1);
  ellipse(bodyX, bodyY, bodyW, bodyH);

  fill(252, 252, 252);
  ellipse(bodyX - 0.14 * bodyW, bodyY - 0.25 * bodyH, 0.15 * bodyW, 0.30 * bodyH);
  ellipse(bodyX + 0.10 * bodyW, bodyY - 0.25 * bodyH, 0.15 * bodyW, 0.30 * bodyH);

  fill(0, 0, 0);
  ellipse(bodyX - 0.14 *bodyW, bodyY - 0.25 * bodyH, 0.05 * bodyW, 0.06 * bodyH);
  ellipse(bodyX + 0.10 *bodyW, bodyY - 0.25 * bodyH, 0.05 * bodyW, 0.06 * bodyH);

  fill(255, 0, 0);
  noStroke();
  arc(bodyX + 0.00 * bodyW, bodyY + 0.04 * bodyH, 0.80 * bodyW, 0.44 * bodyH, -PI/6, PI, OPEN);

  fill(0, 0, 0);
  ellipse(bodyX + 0.13 * bodyW, bodyY + 0.29 * bodyH, 0.22 * bodyW, 0.28 * bodyH);

  noStroke();
  beginShape();
  fill(3,3,3);
  vertex(bodyX - 0.49 *bodyW, bodyY - 0.04 * bodyH);
  vertex(bodyX - 0.85 * bodyW, bodyY - 0.46 * bodyH);
  vertex(bodyX - 1.27 * bodyW, bodyY + 1.15 * bodyH );
  vertex(bodyX - 0.81 * bodyW, bodyY -0.31 * bodyH);
  endShape(CLOSE);

  beginShape();
  fill(3,3,3);
  vertex(bodyX - 0.47 * bodyW, bodyY -0.02 * bodyH);
  vertex(bodyX - 0.53 * bodyW, bodyY - 0.85 * bodyH);
  vertex(bodyX - 1.39 * bodyW, bodyY - 0.78 * bodyH);
  vertex(bodyX - 0.59 * bodyW,bodyY - 0.70 * bodyH);
  endShape(CLOSE);

  beginShape();
  fill(3,3,3);
  vertex(bodyX - 0.44 * bodyW, bodyY + 0.00 * bodyH);
  vertex(bodyX - 0.74 * bodyW, bodyY + 0.10 * bodyH);
  vertex(bodyX - 0.13 * bodyW, bodyY + 1.24 * bodyH);
  vertex(bodyX - 0.91 * bodyW, bodyY + 0.01 * bodyH);
  endShape(CLOSE);

  beginShape();
  fill(3,3,3);
  vertex(bodyX + 0.46 * bodyW,bodyY - 0.22 * bodyH);
  vertex(bodyX + 0.64 * bodyW,bodyY -0.91 * bodyH);
  vertex(bodyX + 1.40 * bodyW,bodyY -0.58 * bodyH);
  vertex(bodyX + 0.65 * bodyW, bodyY -0.73 * bodyH);
  endShape(CLOSE);

  beginShape();
  fill(3,3,3);
  vertex(bodyX + 0.49 * bodyW,bodyY - 0.1 * bodyH);
  vertex(bodyX + 0.86 * bodyW, bodyY - 0.70 * bodyH);
  vertex(bodyX + 1.27 * bodyW, bodyY + 1.10 * bodyH);
  vertex(bodyX + 0.82 * bodyW, bodyY -0.44 * bodyH);
  endShape(CLOSE);

  beginShape();
  fill(3,3,3);
  vertex(bodyX + 0.49 * bodyW, bodyY + 0.02 * bodyH);
  vertex(bodyX + 0.90 * bodyW, bodyY + 0.59 * bodyH);
  vertex(bodyX + 0.25 * bodyW,bodyY + 1.74 * bodyH);
  vertex(bodyX + 1.03 * bodyW, bodyY + 0.51 * bodyH);
  endShape(CLOSE);

  if(bodyY < 200) {
     bodyY+=2;
  } else if(bodyW < 150){
     bodyH++;
     bodyW++;
  }
}
